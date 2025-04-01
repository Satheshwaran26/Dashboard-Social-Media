
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useTheme } from '@/components/theme-provider';
import LoginForm from '@/components/login/LoginForm';
import RegisterForm from '@/components/login/RegisterForm';

const Login = () => {
  const { theme } = useTheme();
  
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
                <LoginForm />
              </TabsContent>
              
              <TabsContent value="register">
                <RegisterForm />
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
