import { useEffect, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/contexts/AuthContext";
import { FileText, Calendar } from "lucide-react";

interface Summary {
  id: string;
  userId: string;
  fileName: string;
  summary: string;
  date: string;
}

const SummaryHistory = () => {
  const { user } = useAuth();
  const [summaries, setSummaries] = useState<Summary[]>([]);

  useEffect(() => {
    const allSummaries = JSON.parse(localStorage.getItem('summaries') || '[]');
    const userSummaries = allSummaries.filter((s: Summary) => s.userId === user?.id);
    setSummaries(userSummaries);
  }, [user]);

  if (summaries.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">No summaries yet</h3>
        <p className="text-muted-foreground">Upload your first document to get started</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {summaries.map((summary) => (
        <Card key={summary.id} className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <CardTitle className="text-base truncate">{summary.fileName}</CardTitle>
                <CardDescription className="flex items-center gap-1 mt-1">
                  <Calendar className="w-3 h-3" />
                  {new Date(summary.date).toLocaleDateString()}
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground line-clamp-4">
              {summary.summary}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default SummaryHistory;
