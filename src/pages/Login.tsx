
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast({
      title: "Login Successful",
      description: "Welcome back to MobilityMesh!",
    });
    // In a real app, we would handle authentication here
  };

  return (
    <div className="container py-8 md:py-16">
      <div className="max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-1">
            <CardTitle className="text-2xl font-montserrat font-bold text-center">
              Login to MobilityMesh
            </CardTitle>
            <CardDescription className="text-center">
              Enter your credentials to access your account
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="name@example.com" required />
                </div>
                
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <Link to="/forgot-password" className="text-sm text-transit-teal hover:underline">
                      Forgot password?
                    </Link>
                  </div>
                  <Input id="password" type="password" required />
                </div>
                
                <Button type="submit" className="w-full bg-transit-teal hover:bg-transit-teal/90">
                  Sign In
                </Button>
              </div>
            </form>
            
            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-background px-2 text-muted-foreground">
                  Or continue with
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" type="button">
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 0C5.37 0 0 5.37 0 12C0 18.63 5.37 24 12 24C18.63 24 24 18.63 24 12C24 5.37 18.63 0 12 0ZM12 2C17.54 2 22 6.46 22 12C22 17.54 17.54 22 12 22C6.46 22 2 17.54 2 12C2 6.46 6.46 2 12 2ZM12 6C14.21 6 16 7.79 16 10H18C18 6.69 15.31 4 12 4C8.69 4 6 6.69 6 10C6 13.31 8.69 16 12 16H13V18H12C10.05 18 8.22 16.54 7.06 14.92L5.4 16.8C7.06 19.04 9.47 20 12 20H13V22H18V16H12C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12H18C18 10.95 17.55 9.56 16.98 8.44L18.89 6.78C19.59 8.27 20 9.87 20 11.5V12H22V11.5C22 9.86 21.64 8.2 20.95 6.67L20.17 7.38C20.35 7.82 20.5 8.28 20.62 8.74L19.84 9.44C19.7 8.87 19.5 8.33 19.26 7.81L18.17 8.79C18.69 9.66 19 10.75 19 12C19 14.76 16.76 17 14 17V19C17.86 19 21 15.86 21 12C21 10.15 20.33 8.45 19.21 7.14L19.95 6.46C21.38 8.07 22 10.07 22 12C22 16.97 17.97 21 13 21V19C16.87 19 20 15.87 20 12C20 9.8 18.9 7.8 17.29 6.71L20.29 4L19 2.71L7.73 14.27C7.28 13.11 7 12.05 7 10.95C7 7.78 9.24 5.14 12.23 5.01L11.77 3.02C7.67 3.16 4.48 6.77 4.48 11C4.48 12.71 4.96 14.34 5.76 15.69L4.29 17.29L5.71 18.71L8.18 16.24C9.54 17.33 11.25 18 13 18V16C11.12 16 9.61 14.83 8.71 13.69L16.71 5.29C15.9 4.9 14.94 4.61 13.93 4.61L14.38 6.02C15.04 6.12 15.67 6.36 16.26 6.67L12.41 10.87C11.94 10.31 11.22 9.94 10.41 9.94C9.05 9.94 7.94 11.05 7.94 12.41C7.94 13.77 9.05 14.88 10.41 14.88C11.77 14.88 12.88 13.77 12.88 12.41C12.88 11.84 12.7 11.31 12.4 10.87L16.26 6.67C17.52 7.47 18.37 9.05 18.37 10.8H16.44C16.44 9.34 15.51 8.12 14.24 7.73L14.85 9.4C15.5 9.71 15.94 10.38 15.94 11.15C15.94 12.17 15.12 13 14.09 13C13.07 13 12.24 12.17 12.24 11.15C12.24 10.38 12.68 9.71 13.33 9.4L12.71 7.71C11.35 8.11 10.35 9.36 10.35 10.85H8.41C8.41 8.61 10.06 6.73 12.19 6.35L12.65 8.35C11.79 8.56 11.18 9.36 11.18 10.3H13.12C13.12 10.04 13.31 9.83 13.56 9.83C13.81 9.83 14 10.04 14 10.3C14 10.55 13.81 10.74 13.56 10.74C13.31 10.74 13.12 10.55 13.12 10.3H11.18C11.18 10.87 11.47 11.38 11.91 11.68L13.97 9.41C14.23 9.15 14.58 9 14.94 9C15.7 9 16.32 9.62 16.32 10.38C16.32 11.14 15.7 11.76 14.94 11.76C14.58 11.76 14.23 11.61 13.97 11.35L11.91 13.62C11.47 13.92 11.18 14.43 11.18 15H13.12C13.12 14.75 13.31 14.56 13.56 14.56C13.81 14.56 14 14.75 14 15C14 15.26 13.81 15.44 13.56 15.44C13.31 15.44 13.12 15.26 13.12 15H11.18C11.18 15.94 11.79 16.74 12.65 16.95L12.19 18.94C10.06 18.57 8.41 16.69 8.41 14.44H10.35C10.35 15.94 11.35 17.19 12.71 17.58L13.33 15.9C12.68 15.59 12.24 14.92 12.24 14.15C12.24 13.13 13.07 12.3 14.09 12.3C15.12 12.3 15.94 13.13 15.94 14.15C15.94 14.92 15.5 15.59 14.85 15.9L14.24 17.57C15.51 17.18 16.44 15.96 16.44 14.5H18.37C18.37 16.25 17.52 17.83 16.26 18.63L12.4 14.42C12.7 13.99 12.88 13.46 12.88 12.89C12.88 11.53 11.77 10.42 10.41 10.42C9.05 10.42 7.94 11.53 7.94 12.89C7.94 14.25 9.05 15.36 10.41 15.36C11.22 15.36 11.94 14.99 12.41 14.43L16.26 18.63C15.67 18.94 15.04 19.18 14.38 19.28L13.93 17.69C14.94 17.69 15.9 17.4 16.71 17.01L8.71 9.01C9.61 7.86 11.12 7 13 7V5C11.25 5 9.54 5.66 8.18 6.75L5.71 4.59L4.29 6L5.76 7.61C4.96 8.96 4.48 10.59 4.48 12.3C4.48 16.53 7.67 20.14 11.77 20.28L12.23 18.29C9.24 18.16 7 15.52 7 12.35C7 11.24 7.28 10.19 7.73 9.03L19 20.59L20.29 19.29L17.29 16.59C18.9 15.5 20 13.5 20 11.3C20 7.43 16.87 4.3 13 4.3V6.3C16.97 6.3 21 10.33 21 15.3C21 17.23 20.38 19.23 18.95 20.84L19.21 21.16C20.33 19.85 21 18.15 21 16.3C21 12.44 17.86 9.3 14 9.3V11.3C16.76 11.3 19 13.54 19 16.3C19 17.55 18.69 18.64 18.17 19.51L19.26 20.49C19.5 19.97 19.7 19.43 19.84 18.86L20.62 19.56C20.5 20.02 20.35 20.48 20.17 20.92L20.95 21.63C21.64 20.1 22 18.44 22 16.8V16.3H20V16.8C20 18.43 19.59 20.03 18.89 21.52L16.98 19.86C17.55 18.74 18 17.35 18 16.3H16C16 19.01 14.21 21 12 21C9.79 21 8 19.01 8 16.3H6C6 19.61 8.69 22.3 12 22.3C15.31 22.3 18 19.61 18 16.3H13V14.3H18V8.3H13C15.21 8.3 17 10.09 17 12.3H15C15 11.09 13.91 10.3 13 10.3V8.3C15.76 8.3 18 10.54 18 13.3V14.3H20V13.3C20 8.33 15.97 4.3 12 4.3C8.03 4.3 4 8.33 4 13.3C4 15.93 5.23 18.28 7.14 19.69L5.4 21.5C2.97 19.5 1.5 16.42 1.5 13.14C1.5 7.05 6.44 2.14 12.5 2.14V4.14C7.53 4.14 3.5 8.17 3.5 13.14C3.5 15.07 4.12 16.87 5.22 18.33L7.06 16.38C6.26 15.36 5.77 14.09 5.77 12.71C5.77 9.9 8.06 7.62 10.87 7.62V9.62C9.16 9.62 7.77 11.01 7.77 12.71C7.77 14.42 9.16 15.81 10.87 15.81C12.57 15.81 13.96 14.42 13.96 12.71C13.96 11.01 12.57 9.62 10.87 9.62V7.62C13.68 7.62 15.96 9.9 15.96 12.71C15.96 14.09 15.48 15.36 14.67 16.38L16.52 18.33C17.61 16.87 18.23 15.07 18.23 13.14C18.23 8.17 14.2 4.14 9.23 4.14V2.14C15.3 2.14 20.23 7.05 20.23 13.14C20.23 16.42 18.77 19.5 16.34 21.5L14.67 19.91C16.58 18.5 17.81 16.15 17.81 13.51C17.81 9.95 14.91 7.04 11.35 7.04V9.04C13.8 9.04 15.81 11.05 15.81 13.51C15.81 15.96 13.8 17.97 11.35 17.97C8.89 17.97 6.88 15.96 6.88 13.51C6.88 11.05 8.89 9.04 11.35 9.04V7.04C7.78 7.04 4.88 9.95 4.88 13.51C4.88 16.15 6.11 18.5 8.02 19.91L6.34 21.5C3.92 19.5 2.46 16.42 2.46 13.14C2.46 7.05 7.39 2.14 13.46 2.14V4.14C8.48 4.14 4.46 8.17 4.46 13.14C4.46 15.07 5.08 16.87 6.17 18.33L8.02 16.38C7.22 15.36 6.73 14.09 6.73 12.71C6.73 9.9 9.02 7.62 11.83 7.62V9.62C10.12 9.62 8.73 11.01 8.73 12.71C8.73 14.42 10.12 15.81 11.83 15.81C13.53 15.81 14.92 14.42 14.92 12.71C14.92 11.01 13.53 9.62 11.83 9.62V7.62C14.63 7.62 16.92 9.9 16.92 12.71C16.92 14.09 16.44 15.36 15.63 16.38L17.48 18.33C18.57 16.87 19.19 15.07 19.19 13.14C19.19 8.17 15.16 4.14 10.19 4.14V2.14C16.25 2.14 21.19 7.05 21.19 13.14C21.19 16.42 19.73 19.5 17.3 21.5L15.63 19.91C17.54 18.5 18.77 16.15 18.77 13.51C18.77 9.95 15.87 7.04 12.31 7.04V9.04C14.76 9.04 16.77 11.05 16.77 13.51C16.77 15.96 14.76 17.97 12.31 17.97C9.85 17.97 7.84 15.96 7.84 13.51C7.84 11.05 9.85 9.04 12.31 9.04V7.04C8.74 7.04 5.84 9.95 5.84 13.51C5.84 16.15 7.07 18.5 8.98 19.91L7.3 21.5C4.87 19.5 3.41 16.42 3.41 13.14C3.41 7.05 8.35 2.14 14.41 2.14V4.14C9.44 4.14 5.41 8.17 5.41 13.14C5.41 15.07 6.03 16.87 7.13 18.33L8.98 16.38C8.18 15.36 7.69 14.09 7.69 12.71C7.69 9.9 9.98 7.62 12.79 7.62V9.62C11.08 9.62 9.69 11.01 9.69 12.71C9.69 14.42 11.08 15.81 12.79 15.81C14.49 15.81 15.88 14.42 15.88 12.71C15.88 11.01 14.49 9.62 12.79 9.62V7.62C15.59 7.62 17.88 9.9 17.88 12.71C17.88 14.09 17.4 15.36 16.59 16.38L18.44 18.33C19.53 16.87 20.15 15.07 20.15 13.14C20.15 8.17 16.12 4.14 11.15 4.14V2.14C17.21 2.14 22.15 7.05 22.15 13.14C22.15 16.42 20.69 19.5 18.26 21.5L16.59 19.91C18.5 18.5 19.73 16.15 19.73 13.51C19.73 9.95 16.83 7.04 13.27 7.04V9.04C15.72 9.04 17.73 11.05 17.73 13.51C17.73 15.96 15.72 17.97 13.27 17.97C10.81 17.97 8.8 15.96 8.8 13.51C8.8 11.05 10.81 9.04 13.27 9.04V7.04C9.7 7.04 6.8 9.95 6.8 13.51C6.8 16.15 8.03 18.5 9.94 19.91L8.26 21.5C5.83 19.5 4.37 16.42 4.37 13.14C4.37 7.05 9.31 2.14 15.37 2.14V4.14C10.4 4.14 6.37 8.17 6.37 13.14C6.37 15.07 6.99 16.87 8.09 18.33L9.94 16.38C9.14 15.36 8.65 14.09 8.65 12.71C8.65 9.9 10.94 7.62 13.75 7.62V9.62C12.04 9.62 10.65 11.01 10.65 12.71C10.65 14.42 12.04 15.81 13.75 15.81C15.45 15.81 16.84 14.42 16.84 12.71C16.84 11.01 15.45 9.62 13.75 9.62V7.62C16.55 7.62 18.84 9.9 18.84 12.71C18.84 14.09 18.36 15.36 17.55 16.38L19.4 18.33C20.49 16.87 21.11 15.07 21.11 13.14C21.11 8.17 17.08 4.14 12.11 4.14V2.14C18.17 2.14 23.11 7.05 23.11 13.14C23.11 16.42 21.65 19.5 19.22 21.5L17.55 19.91C19.45 18.5 20.69 16.15 20.69 13.51C20.69 9.95 17.79 7.04 14.22 7.04V9.04C16.68 9.04 18.69 11.05 18.69 13.51C18.69 15.96 16.68 17.97 14.22 17.97C11.77 17.97 9.76 15.96 9.76 13.51C9.76 11.05 11.77 9.04 14.22 9.04V7.04C10.66 7.04 7.76 9.95 7.76 13.51C7.76 16.15 8.99 18.5 10.9 19.91" />
                </svg>
                Google
              </Button>
              <Button variant="outline" type="button">
                <svg className="mr-2 h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
                GitHub
              </Button>
            </div>
          </CardContent>
          
          <CardFooter>
            <div className="text-center w-full">
              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to="/signup" className="text-transit-teal hover:underline">
                  Sign up
                </Link>
              </p>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;
