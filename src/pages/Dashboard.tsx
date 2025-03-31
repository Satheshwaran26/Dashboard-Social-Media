
import React from 'react';
import { SidebarNav } from '@/components/sidebar-nav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { BarChart3, ChevronUp, MessageSquare, MoreHorizontal, ThumbsUp, Users } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { ScrollArea } from '@/components/ui/scroll-area';

// Mock chart data
const engagementData = [
  { name: 'Jan', likes: 1200, comments: 900, shares: 500 },
  { name: 'Feb', likes: 1900, comments: 1200, shares: 700 },
  { name: 'Mar', likes: 1500, comments: 1400, shares: 650 },
  { name: 'Apr', likes: 2000, comments: 1800, shares: 800 },
  { name: 'May', likes: 2400, comments: 2100, shares: 1000 },
  { name: 'Jun', likes: 1800, comments: 1600, shares: 900 },
  { name: 'Jul', likes: 2500, comments: 2300, shares: 1200 }
];

const platformData = [
  { name: 'Twitter', value: 520, color: '#1DA1F2' },
  { name: 'Instagram', value: 350, color: '#C13584' },
  { name: 'Facebook', value: 220, color: '#4267B2' },
  { name: 'LinkedIn', value: 180, color: '#0077B5' },
];

// Sample recent activity data
const recentActivity = [
  {
    id: 1,
    user: { name: 'Emma Wilson', avatar: 'https://i.pravatar.cc/150?img=29' },
    action: 'commented on your post',
    content: '"Great insights! Would love to hear more about user engagement techniques."',
    time: '5 minutes ago',
    platform: 'Twitter'
  },
  {
    id: 2,
    user: { name: 'Michael Chen', avatar: 'https://i.pravatar.cc/150?img=11' },
    action: 'shared your post',
    content: '"5 Ways to Boost Your Social Media Presence"',
    time: '27 minutes ago',
    platform: 'Facebook'
  },
  {
    id: 3,
    user: { name: 'Sarah Johnson', avatar: 'https://i.pravatar.cc/150?img=20' },
    action: 'liked your photo',
    time: '52 minutes ago',
    platform: 'Instagram'
  },
  {
    id: 4,
    user: { name: 'David Rodriguez', avatar: 'https://i.pravatar.cc/150?img=54' },
    action: 'mentioned you in a comment',
    content: '"@yourusername Check out this opportunity!"',
    time: '2 hours ago',
    platform: 'LinkedIn'
  }
];

// Sample trending topics
const trendingTopics = [
  { id: 1, topic: '#DigitalMarketing', posts: 12300 },
  { id: 2, topic: '#SocialMediaTips', posts: 10500 },
  { id: 3, topic: '#ContentCreation', posts: 8700 },
  { id: 4, topic: '#Branding', posts: 7200 },
  { id: 5, topic: '#MarketingStrategy', posts: 6900 },
];

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      
      <div className="ml-0 md:ml-64 p-4 md:p-8 pt-16 md:pt-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's an overview of your social media performance.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Followers</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">28.4K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-social-green inline-flex items-center gap-0.5">
                  <ChevronUp className="h-3 w-3" />
                  5.2%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Engagement Rate</CardTitle>
              <ThumbsUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.6%</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-social-green inline-flex items-center gap-0.5">
                  <ChevronUp className="h-3 w-3" />
                  1.2%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Impressions</CardTitle>
              <BarChart3 className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">145.2K</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-social-green inline-flex items-center gap-0.5">
                  <ChevronUp className="h-3 w-3" />
                  8.4%
                </span>{" "}
                from last month
              </p>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader>
              <CardTitle>Engagement Overview</CardTitle>
              <CardDescription>Track your engagement metrics over time</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <Tabs defaultValue="chart">
                <TabsList className="mb-4">
                  <TabsTrigger value="chart">Chart</TabsTrigger>
                  <TabsTrigger value="breakdown">Breakdown</TabsTrigger>
                </TabsList>
                <TabsContent value="chart">
                  <ResponsiveContainer width="100%" height={300}>
                    <AreaChart data={engagementData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <defs>
                        <linearGradient id="colorLikes" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#6941C6" stopColor="#6941C6" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#6941C6" stopColor="#6941C6" stopOpacity={0} />
                        </linearGradient>
                        <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#2563EB" stopColor="#2563EB" stopOpacity={0.8} />
                          <stop offset="95%" stopColor="#2563EB" stopColor="#2563EB" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                      <XAxis dataKey="name" tickLine={false} axisLine={false} />
                      <YAxis tickLine={false} axisLine={false} width={30} />
                      <Tooltip />
                      <Area 
                        type="monotone" 
                        dataKey="likes" 
                        stroke="#6941C6" 
                        fillOpacity={1} 
                        fill="url(#colorLikes)" 
                        activeDot={{ r: 6 }} 
                      />
                      <Area 
                        type="monotone" 
                        dataKey="comments" 
                        stroke="#2563EB" 
                        fillOpacity={1}
                        fill="url(#colorComments)" 
                      />
                    </AreaChart>
                  </ResponsiveContainer>
                </TabsContent>
                <TabsContent value="breakdown">
                  <div className="space-y-4">
                    {['Twitter', 'Instagram', 'Facebook', 'LinkedIn'].map((platform) => (
                      <div key={platform} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{platform}</span>
                          <span className="text-sm text-muted-foreground">
                            {Math.floor(Math.random() * 5000) + 1000} engagements
                          </span>
                        </div>
                        <Progress 
                          value={Math.floor(Math.random() * 100)} 
                          className={
                            platform === 'Twitter' ? "bg-[#1DA1F2]/20" :
                            platform === 'Instagram' ? "bg-[#C13584]/20" :
                            platform === 'Facebook' ? "bg-[#4267B2]/20" :
                            "bg-[#0077B5]/20"
                          }
                        />
                      </div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Platform Distribution</CardTitle>
              <CardDescription>Followers across platforms</CardDescription>
            </CardHeader>
            <CardContent className="h-80">
              <ResponsiveContainer width="100%" height={220}>
                <BarChart data={platformData} layout="vertical" margin={{ left: 20 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                  <XAxis type="number" axisLine={false} tickLine={false} />
                  <YAxis 
                    dataKey="name" 
                    type="category" 
                    axisLine={false} 
                    tickLine={false} 
                    width={80}
                  />
                  <Tooltip />
                  <Bar 
                    dataKey="value" 
                    barSize={20} 
                    radius={[0, 4, 4, 0]}
                  >
                    {platformData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
              <div className="mt-6 grid grid-cols-2 gap-2">
                {platformData.map((platform) => (
                  <div key={platform.name} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded-full" 
                      style={{ backgroundColor: platform.color }}
                    />
                    <span className="text-xs">{platform.name}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <Card className="col-span-1 lg:col-span-2">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>The latest interactions with your content</CardDescription>
              </div>
              <Button variant="outline" size="sm">
                View all
              </Button>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[400px] pr-4">
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src={activity.user.avatar} />
                        <AvatarFallback>{activity.user.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="space-y-1">
                        <div className="flex flex-wrap items-center gap-1">
                          <span className="font-medium">{activity.user.name}</span>
                          <span className="text-muted-foreground">{activity.action}</span>
                          <Badge variant="outline" className="ml-auto">
                            {activity.platform}
                          </Badge>
                        </div>
                        {activity.content && (
                          <p className="text-sm text-muted-foreground">{activity.content}</p>
                        )}
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle>Trending Topics</CardTitle>
                <CardDescription>Popular hashtags & topics</CardDescription>
              </div>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div key={topic.id} className="flex items-center gap-2">
                    <div className="text-lg font-bold text-muted-foreground w-5">{index + 1}</div>
                    <div className="flex-1">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">{topic.topic}</span>
                        <Badge variant="secondary" className="text-xs">
                          {(topic.posts / 1000).toFixed(1)}K posts
                        </Badge>
                      </div>
                      <Progress 
                        value={100 - (index * 15)} 
                        className="h-1 mt-2" 
                      />
                    </div>
                  </div>
                ))}
              </div>
              
              <Button className="w-full mt-6" variant="outline">
                Explore all trending topics
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
