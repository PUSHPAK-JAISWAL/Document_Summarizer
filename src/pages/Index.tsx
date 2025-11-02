import { useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import Landing from "@/components/Landing";
import Auth from "@/components/Auth";
import Dashboard from "@/components/Dashboard";

const Index = () => {
  const { isAuthenticated } = useAuth();
  const [showAuth, setShowAuth] = useState(false);

  if (isAuthenticated) {
    return <Dashboard />;
  }

  if (showAuth) {
    return <Auth />;
  }

  return <Landing onGetStarted={() => setShowAuth(true)} />;
};

export default Index;
