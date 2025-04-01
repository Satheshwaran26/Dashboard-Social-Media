
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/AuthProvider";

const Index = () => {
  const navigate = useNavigate();
  const { setDemoMode } = useAuth();
  
  const handleDemoClick = () => {
    setDemoMode(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-background to-muted/60">
      <div className="w-full max-w-4xl p-8 space-y-8 animate-fade-in">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-social-purple to-social-blue bg-clip-text text-transparent">
            SocialDash
          </h1>
          <p className="text-xl text-muted-foreground max-w-lg mx-auto">
            Your all-in-one social media dashboard for managing and analyzing your online presence
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Button asChild className="btn-gradient text-lg px-8 py-6">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-8 py-6"
            onClick={handleDemoClick}
          >
            View Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-xl card-gradient">
            <h3 className="text-xl font-semibold mb-2">Analytics</h3>
            <p className="text-muted-foreground">Track performance metrics and engagement across all platforms</p>
          </div>
          
          <div className="p-6 rounded-xl card-gradient">
            <h3 className="text-xl font-semibold mb-2">Messaging</h3>
            <p className="text-muted-foreground">Centralized inbox for all your social media messages</p>
          </div>
          
          <div className="p-6 rounded-xl card-gradient">
            <h3 className="text-xl font-semibold mb-2">Scheduling</h3>
            <p className="text-muted-foreground">Plan and schedule posts across multiple platforms</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
