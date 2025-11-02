import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/contexts/AuthContext";
import { LogOut, Upload, FileText } from "lucide-react";
import DocumentUpload from "./DocumentUpload";
import SummaryHistory from "./SummaryHistory";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const [showUpload, setShowUpload] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <FileText className="w-5 h-5 text-primary-foreground" />
            </div>
            <h1 className="text-xl font-bold">DocuSummarize</h1>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground">Welcome, {user?.name}</span>
            <Button variant="outline" size="sm" onClick={logout}>
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {!showUpload ? (
          <>
            <div className="mb-8 text-center">
              <h2 className="text-3xl font-bold mb-2">Your Documents</h2>
              <p className="text-muted-foreground">Upload and summarize your documents with AI</p>
            </div>

            <div className="flex justify-center mb-8">
              <Button
                size="lg"
                onClick={() => setShowUpload(true)}
                className="shadow-lg hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] transition-all"
              >
                <Upload className="w-5 h-5 mr-2" />
                Upload New Document
              </Button>
            </div>

            <SummaryHistory />
          </>
        ) : (
          <DocumentUpload onBack={() => setShowUpload(false)} />
        )}
      </div>
    </div>
  );
};

export default Dashboard;
