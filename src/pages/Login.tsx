
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useTheme } from '@/components/theme-provider';
import { Facebook, Github, Mail, Twitter } from 'lucide-react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [resetEmail, setResetEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { theme } = useTheme();
  
  // Mock login function - will be replaced with Supabase auth
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mock login
      setTimeout(() => {
        // Here we'd actually call Supabase auth
        toast({
          title: "Success!",
          description: "You've logged in successfully.",
        });
        navigate('/dashboard');
        setLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };
  
  // Mock register function - will be replaced with Supabase auth
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mock register
      setTimeout(() => {
        // Here we'd actually call Supabase auth
        toast({
          title: "Account created!",
          description: "Your account has been created successfully.",
        });
        navigate('/dashboard');
        setLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };
  
  // Mock reset password function - will be replaced with Supabase auth
  const handleResetPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!resetEmail) {
      toast({
        title: "Error",
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return;
    }
    
    setLoading(true);
    try {
      // Mock reset password
      setTimeout(() => {
        // Here we'd actually call Supabase auth
        toast({
          title: "Reset link sent!",
          description: "Check your email for password reset instructions.",
        });
        setLoading(false);
      }, 1000);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset link. Please try again.",
        variant: "destructive",
      });
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-gradient-to-br from-background to-muted/60">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">SocialDash</h1>
          <p className="mt-2 text-muted-foreground">Your all-in-one social media dashboard</p>
        </div>
        
        <Card className="border-none shadow-lg bg-card/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Welcome back</CardTitle>
            <CardDescription className="text-center">Sign in to your account or create a new one</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="login" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="login">Login</TabsTrigger>
                <TabsTrigger value="register">Register</TabsTrigger>
              </TabsList>
              
              <TabsContent value="login">
                <form onSubmit={handleLogin}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="password">Password</Label>
                        <Link to="/reset-password" className="text-xs text-primary underline underline-offset-4 hover:text-primary/80">
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="btn-gradient" disabled={loading}>
                      {loading ? "Signing in..." : "Sign in"}
                    </Button>
                  </div>
                </form>
                
                <div className="my-4 flex items-center">
                  <Separator className="flex-grow" />
                  <span className="px-4 text-xs text-muted-foreground">OR CONTINUE WITH</span>
                  <Separator className="flex-grow" />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Twitter className="w-4 h-4 mr-2" />
                    Twitter
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="register">
                <form onSubmit={handleRegister}>
                  <div className="grid gap-4">
                    <div className="grid gap-2">
                      <Label htmlFor="email">Email</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="name@example.com" 
                        autoComplete="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password" 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="btn-gradient" disabled={loading}>
                      {loading ? "Creating account..." : "Create account"}
                    </Button>
                  </div>
                </form>
                
                <div className="my-4 flex items-center">
                  <Separator className="flex-grow" />
                  <span className="px-4 text-xs text-muted-foreground">OR CONTINUE WITH</span>
                  <Separator className="flex-grow" />
                </div>
                
                <div className="grid grid-cols-3 gap-2">
                  <Button variant="outline" className="w-full">
                    <Github className="w-4 h-4 mr-2" />
                    Github
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Mail className="w-4 h-4 mr-2" />
                    Google
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Facebook className="w-4 h-4 mr-2" />
                    Facebook
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
