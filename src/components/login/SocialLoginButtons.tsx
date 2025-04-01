import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Mail, Twitter, Facebook } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Separator } from '@/components/ui/separator';

type Provider = 'github' | 'google' | 'twitter' | 'facebook';

interface SocialLoginButtonsProps {
  layout?: 'login' | 'register';
}

const SocialLoginButtons: React.FC<SocialLoginButtonsProps> = ({ layout = 'login' }) => {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState<Provider | null>(null);

  const handleSocialLogin = async (provider: Provider) => {
    try {
      setIsLoading(provider);
      
      // Mock authentication delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Show toast message about missing Supabase integration
      toast({
        title: "Not Implemented",
        description: `Social login with ${provider} requires backend integration.`,
      });
    } catch (error: any) {
      toast({
        title: "Authentication Error",
        description: error.message || `Failed to sign in with ${provider}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(null);
    }
  };

  return (
    <>
      <div className="my-4 flex items-center w-full">
        <Separator className="flex-grow w-26" />
        <span className="px-4 text-xs text-muted-foreground text-center">
          Or Continue With
        </span>
        <Separator className="flex-grow w-26" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 w-full">
        <Button 
          variant="outline" 
          className="w-full flex justify-center items-center"
          onClick={() => handleSocialLogin('github')}
          disabled={isLoading !== null}
        >
          <Github className="w-4 h-4 mr-2" />
          {isLoading === 'github' ? 'Loading...' : 'Github'}
        </Button>
        <Button 
          variant="outline" 
          className="w-full flex justify-center items-center"
          onClick={() => handleSocialLogin('google')}
          disabled={isLoading !== null}
        >
          <Mail className="w-4 h-4 mr-2" />
          {isLoading === 'google' ? 'Loading...' : 'Google'}
        </Button>
        <Button 
          variant="outline" 
          className="w-full flex justify-center items-center"
          onClick={() => handleSocialLogin(layout === 'login' ? 'twitter' : 'facebook')}
          disabled={isLoading !== null}
        >
          {layout === 'login' ? (
            <Twitter className="w-4 h-4 mr-2" />
          ) : (
            <Facebook className="w-4 h-4 mr-2" />
          )}
          {isLoading === (layout === 'login' ? 'twitter' : 'facebook') 
            ? 'Loading...' 
            : (layout === 'login' ? 'Twitter' : 'Facebook')}
        </Button>
      </div>
    </>
  );
};

export default SocialLoginButtons;
