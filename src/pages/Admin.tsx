import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { useContent } from '@/hooks/useContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Loader2, LogOut, Save, User, Lock, Eye } from 'lucide-react';

const Admin: React.FC = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading, signIn, signOut } = useAuth();
  const { content, loading: contentLoading, updateContent, getContentBySection } = useContent();
  const { toast } = useToast();

  const [isLoginMode, setIsLoginMode] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginLoading, setLoginLoading] = useState(false);

  // Content form states
  const [heroHeadline, setHeroHeadline] = useState('');
  const [heroSubheadline, setHeroSubheadline] = useState('');
  const [aboutContent, setAboutContent] = useState('');
  const [saveLoading, setSaveLoading] = useState(false);

  useEffect(() => {
    if (!authLoading && !contentLoading && user) {
      setHeroHeadline(getContentBySection('hero-headline'));
      setHeroSubheadline(getContentBySection('hero-subheadline'));
      setAboutContent(getContentBySection('about-content'));
    }
  }, [user, authLoading, contentLoading, content]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginLoading(true);

    const { error } = await signIn(email, password);
    
    if (error) {
      toast({
        title: 'Login Failed',
        description: error.message,
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Welcome!',
        description: 'Successfully logged in to the admin panel.',
      });
    }
    
    setLoginLoading(false);
  };

  const handleSaveChanges = async () => {
    setSaveLoading(true);

    try {
      const updates = [
        updateContent('hero-headline', heroHeadline),
        updateContent('hero-subheadline', heroSubheadline),
        updateContent('about-content', aboutContent),
      ];

      const results = await Promise.all(updates);
      const allSuccessful = results.every(result => result);

      if (allSuccessful) {
        toast({
          title: 'Content Updated',
          description: 'All changes have been saved successfully!',
        });
      } else {
        toast({
          title: 'Partial Update',
          description: 'Some updates may have failed. Please check and try again.',
          variant: 'destructive',
        });
      }
    } catch (error) {
      toast({
        title: 'Update Failed',
        description: 'Failed to save changes. Please try again.',
        variant: 'destructive',
      });
    }

    setSaveLoading(false);
  };

  const handleLogout = async () => {
    await signOut();
    toast({
      title: 'Logged Out',
      description: 'Successfully logged out.',
    });
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex items-center gap-2">
          <Loader2 className="h-6 w-6 animate-spin text-primary" />
          <span className="text-lg">Loading admin panel...</span>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md glass-card">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Lock className="h-6 w-6 text-primary" />
              Negat Solutions Admin
            </CardTitle>
            <CardDescription>
              Enter your credentials to access the content management system
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@negatsolutions.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="w-full" 
                disabled={loginLoading}
              >
                {loginLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Signing In...
                  </>
                ) : (
                  'Sign In'
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-bold">
              Negat<span className="text-primary">Solutions</span> Admin
            </h1>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              onClick={() => navigate('/')}
              className="flex items-center gap-2"
            >
              <Eye className="h-4 w-4" />
              View Site
            </Button>
            <Button
              variant="outline"
              onClick={handleLogout}
              className="flex items-center gap-2"
            >
              <LogOut className="h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Content Editor */}
          <div className="space-y-6">
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Hero Section Content</CardTitle>
                <CardDescription>
                  Edit the main headline and subheadline for the hero section
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="hero-headline">Hero Headline</Label>
                  <Input
                    id="hero-headline"
                    value={heroHeadline}
                    onChange={(e) => setHeroHeadline(e.target.value)}
                    placeholder="Enter hero headline..."
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="hero-subheadline">Hero Subheadline</Label>
                  <Textarea
                    id="hero-subheadline"
                    value={heroSubheadline}
                    onChange={(e) => setHeroSubheadline(e.target.value)}
                    placeholder="Enter hero subheadline..."
                    rows={3}
                  />
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card">
              <CardHeader>
                <CardTitle>About Section Content</CardTitle>
                <CardDescription>
                  Edit the main content for the About Us section
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Label htmlFor="about-content">About Content</Label>
                  <Textarea
                    id="about-content"
                    value={aboutContent}
                    onChange={(e) => setAboutContent(e.target.value)}
                    placeholder="Enter about content..."
                    rows={5}
                  />
                </div>
              </CardContent>
            </Card>

            <Button 
              onClick={handleSaveChanges} 
              className="w-full"
              disabled={saveLoading}
            >
              {saveLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Saving Changes...
                </>
              ) : (
                <>
                  <Save className="mr-2 h-4 w-4" />
                  Save Changes
                </>
              )}
            </Button>
          </div>

          {/* Image Management Placeholder */}
          <div>
            <Card className="glass-card">
              <CardHeader>
                <CardTitle>Image Management (Cloudflare)</CardTitle>
                <CardDescription>
                  Future feature for managing website images
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="border-2 border-dashed border-muted-foreground/25 rounded-lg p-8 text-center">
                  <div className="text-muted-foreground">
                    <p className="text-lg font-medium">Coming Soon</p>
                    <p className="text-sm mt-2">
                      Image upload and management functionality will be implemented here using Cloudflare Image API
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;