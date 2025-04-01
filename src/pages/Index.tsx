
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useAuth } from "@/components/AuthProvider";
import { ExternalLink, Sparkles, BarChart, MessageSquare, CalendarDays } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();
  const { setDemoMode } = useAuth();
  
  const handleDemoClick = () => {
    setDemoMode(true);
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50/50 to-purple-50/50">
      <div className="w-full max-w-5xl p-8 space-y-10 animate-fade-in">
        <div className="absolute top-4 right-4 z-10">
          <ThemeToggle />
        </div>
        
        <div className="text-center space-y-6">
          <div className="mb-6 inline-block">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white font-bold text-2xl shadow-lg">
              S
              <Sparkles className="h-4 w-4 ml-1 opacity-70" />
            </div>
          </div>
          <h1 className="text-6xl font-bold tracking-tight text-gradient">
            SocialDash
          </h1>
          <p className="text-xl text-muted-foreground max-w-xl mx-auto">
            Your all-in-one social media dashboard for managing and analyzing your online presence
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
          <Button asChild className="btn-gradient text-lg px-10 py-6 rounded-2xl">
            <Link to="/login">Sign In</Link>
          </Button>
          <Button 
            variant="outline" 
            className="text-lg px-10 py-6 rounded-2xl bg-white/50 backdrop-blur-sm border border-white/30 hover:bg-white/60 transition-all duration-300"
            onClick={handleDemoClick}
          >
            View Demo
          </Button>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl card-gradient group hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-indigo-100 flex items-center justify-center mb-4 group-hover:bg-indigo-200 transition-colors duration-300">
              <BarChart className="h-6 w-6 text-indigo-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Analytics</h3>
            <p className="text-muted-foreground">Track performance metrics and engagement across all platforms</p>
          </div>
          
          <div className="p-8 rounded-2xl card-gradient group hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:bg-purple-200 transition-colors duration-300">
              <MessageSquare className="h-6 w-6 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Messaging</h3>
            <p className="text-muted-foreground">Centralized inbox for all your social media messages</p>
          </div>
          
          <div className="p-8 rounded-2xl card-gradient group hover:translate-y-[-5px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors duration-300">
              <CalendarDays className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Scheduling</h3>
            <p className="text-muted-foreground">Plan and schedule posts across multiple platforms</p>
          </div>
        </div>
        
        <footer className="mt-20 text-center text-sm text-muted-foreground">
          <p className="flex items-center justify-center gap-1">
            Made with <span className="text-red-400">♥</span> for social media managers
            <ExternalLink className="h-3 w-3 ml-1 inline" />
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
