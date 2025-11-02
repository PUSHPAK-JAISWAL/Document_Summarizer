import { Button } from "@/components/ui/button";
import { FileText, Sparkles, Zap } from "lucide-react";

interface LandingProps {
  onGetStarted: () => void;
}

const Landing = ({ onGetStarted }: LandingProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center justify-center min-h-[80vh] text-center">
          <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_hsl(var(--primary)/0.3)]">
            <FileText className="w-10 h-10 text-primary-foreground" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            DocuSummarize
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl">
            Transform lengthy documents into concise summaries with AI-powered intelligence
          </p>

          <Button 
            onClick={onGetStarted}
            size="lg"
            className="text-lg px-8 py-6 rounded-xl shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
          >
            Get Started
            <Sparkles className="ml-2 w-5 h-5" />
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 max-w-4xl">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 mx-auto">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Any Format</h3>
              <p className="text-sm text-muted-foreground">
                Upload PDF, DOCX, TXT and more
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 mx-auto">
                <Zap className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-semibold text-lg mb-2">Smart Chunking</h3>
              <p className="text-sm text-muted-foreground">
                Process large documents page by page
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 mx-auto">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-lg mb-2">AI-Powered</h3>
              <p className="text-sm text-muted-foreground">
                Gemini 2.0 Flash for accurate summaries
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
