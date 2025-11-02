import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, Upload, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/contexts/AuthContext";
import { GEMINI_API_KEY, GEMINI_CONFIG } from "@/config/gemini";

interface DocumentUploadProps {
  onBack: () => void;
}

const DocumentUpload = ({ onBack }: DocumentUploadProps) => {
  const { user } = useAuth();
  const [file, setFile] = useState<File | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [progress, setProgress] = useState(0);
  const [summary, setSummary] = useState("");

  const chunkText = (text: string, wordsPerChunk: number = 500): string[] => {
    const words = text.split(/\s+/);
    const chunks: string[] = [];
    
    for (let i = 0; i < words.length; i += wordsPerChunk) {
      chunks.push(words.slice(i, i + wordsPerChunk).join(' '));
    }
    
    return chunks;
  };

  const summarizeChunk = async (chunk: string): Promise<string> => {
    const response = await fetch(
      `${GEMINI_CONFIG.apiUrl}?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{ text: `Summarize the following text concisely:\n\n${chunk}` }]
          }]
        })
      }
    );

    if (!response.ok) throw new Error('API request failed');
    
    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!file) {
      toast.error("Please select a file");
      return;
    }

    setIsProcessing(true);
    setProgress(0);
    setSummary("");

    try {
      const text = await file.text();
      const chunks = chunkText(text);
      const summaries: string[] = [];

      for (let i = 0; i < chunks.length; i++) {
        const chunkSummary = await summarizeChunk(chunks[i]);
        summaries.push(chunkSummary);
        setProgress(((i + 1) / chunks.length) * 100);
      }

      const finalSummary = summaries.join('\n\n');
      setSummary(finalSummary);

      const summaryData = {
        id: Date.now().toString(),
        userId: user?.id,
        fileName: file.name,
        summary: finalSummary,
        date: new Date().toISOString(),
      };

      const existingSummaries = JSON.parse(localStorage.getItem('summaries') || '[]');
      existingSummaries.push(summaryData);
      localStorage.setItem('summaries', JSON.stringify(existingSummaries));

      toast.success("Document summarized successfully!");
    } catch (error) {
      toast.error("Failed to summarize document. Please try again.");
      console.error(error);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <Button variant="ghost" onClick={onBack} className="mb-4">
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Dashboard
      </Button>

      <Card className="shadow-xl">
        <CardHeader>
          <CardTitle>Upload Document</CardTitle>
          <CardDescription>
            Upload a text file to generate an AI-powered summary
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="file">Text Document (.txt only)</Label>
              <Input
                id="file"
                type="file"
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                disabled={isProcessing}
                accept=".txt"
              />
              <p className="text-xs text-muted-foreground">
                Currently supports plain text files only. PDF support coming soon!
              </p>
            </div>

            {isProcessing && (
              <div className="space-y-2">
                <Label>Processing... {Math.round(progress)}%</Label>
                <Progress value={progress} />
              </div>
            )}

            {summary && (
              <div className="space-y-2">
                <Label>Summary</Label>
                <div className="p-4 rounded-lg bg-muted border border-border">
                  <p className="text-sm whitespace-pre-wrap">{summary}</p>
                </div>
              </div>
            )}

            <Button type="submit" disabled={isProcessing} className="w-full">
              {isProcessing ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Upload className="w-4 h-4 mr-2" />
                  Summarize Document
                </>
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default DocumentUpload;
