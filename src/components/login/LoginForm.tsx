
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useAuth } from '@/components/AuthProvider';
import SocialLoginButtons from './SocialLoginButtons';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useAuth();
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      await signIn(email, password);
      
      toast({
        title: "Success!",
        description: "You've logged in successfully.",
      });
      navigate('/dashboard');
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to log in. Please check your credentials.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
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
      
      <SocialLoginButtons layout="login" />
    </form>
  );
};

export default LoginForm;
