
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import SocialLoginButtons from './SocialLoginButtons';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // Mock registration delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Account created!",
        description: "Your account has been created successfully.",
      });
      
      // Redirect to login page
      navigate('/login');
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to create account. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="register-email">Email</Label>
          <Input 
            id="register-email" 
            type="email" 
            placeholder="name@example.com" 
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="grid gap-2">
          <Label htmlFor="register-password">Password</Label>
          <Input 
            id="register-password" 
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
      
      <SocialLoginButtons layout="register" />
    </form>
  );
};

export default RegisterForm;
