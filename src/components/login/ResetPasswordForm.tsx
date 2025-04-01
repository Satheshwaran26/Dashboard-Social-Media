
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

const ResetPasswordForm = () => {
  const [resetEmail, setResetEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

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
      // Mock reset password delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "Reset link sent!",
        description: "If an account with this email exists, a password reset link has been sent.",
      });
    } catch (error: any) {
      toast({
        title: "Error",
        description: "Failed to send reset link. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleResetPassword}>
      <div className="grid gap-4">
        <div className="grid gap-2">
          <Label htmlFor="reset-email">Email</Label>
          <Input 
            id="reset-email" 
            type="email" 
            placeholder="name@example.com" 
            value={resetEmail}
            onChange={(e) => setResetEmail(e.target.value)}
            required
          />
        </div>
        <Button type="submit" className="btn-gradient" disabled={loading}>
          {loading ? "Sending..." : "Send Reset Link"}
        </Button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
