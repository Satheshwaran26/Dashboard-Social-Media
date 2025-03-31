
import React from 'react';
import { SidebarNav } from '@/components/sidebar-nav';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { 
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue 
} from '@/components/ui/select';
import { 
  LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Mock chart data
const monthlyData = [
  { name: 'Jan', followers: 2400, engagement: 1800, reach: 4800 },
  { name: 'Feb', followers: 3200, engagement: 2400, reach: 6000 },
  { name: 'Mar', followers: 4000, engagement: 3100, reach: 8200 },
  { name: 'Apr', followers: 4800, engagement: 3700, reach: 9000 },
  { name: 'May', followers: 5400, engagement: 4200, reach: 10200 },
  { name: 'Jun', followers: 6000, engagement: 4800, reach: 11800 },
  { name: 'Jul', followers: 7200, engagement: 5200, reach: 13200 },
];

const contentPerformance = [
  { name: 'Post 1', views: 8500, engagement: 2100, shares: 780 },
  { name: 'Post 2', views: 12000, engagement: 3800, shares: 1200 },
  { name: 'Post 3', views: 6700, engagement: 1900, shares: 650 },
  { name: 'Post 4', views: 9300, engagement: 2700, shares: 900 },
  { name: 'Post 5', views: 14200, engagement: 4500, shares: 1500 },
];

const audienceData = [
  { name: '18-24', value: 25 },
  { name: '25-34', value: 40 },
  { name: '35-44', value: 20 },
  { name: '45-54', value: 10 },
  { name: '55+', value: 5 },
];

const COLORS = ['#6941C6', '#2563EB', '#10B981', '#F97316', '#EF4444'];

const Analytics = () => {
  return (
    <div className="min-h-screen bg-background">
      <SidebarNav />
      
      <div className="ml-0 md:ml-64 p-4 md:p-8 pt-16 md:pt-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
            <p className="text-muted-foreground">Get insights on your social media performance</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Select defaultValue="30days">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Time period" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="7days">Last 7 days</SelectItem>
                <SelectItem value="30days">Last 30 days</SelectItem>
                <SelectItem value="90days">Last 90 days</SelectItem>
                <SelectItem value="year">Last year</SelectItem>
              </SelectContent>
            </Select>
            
            <Button variant="outline">Export</Button>
            <Button className="btn-gradient">Generate Report</Button>
          </div>
        </div>
        
        <div className="mt-8">
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full md:w-auto">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="engagement">Engagement</TabsTrigger>
              <TabsTrigger value="audience">Audience</TabsTrigger>
              <TabsTrigger value="content">Content</TabsTrigger>
            </TabsList>
            
            <TabsContent value="overview" className="mt-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Growth Overview</CardTitle>
                    <CardDescription>Followers, engagement, and reach over time</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={monthlyData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} width={35} />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <Line 
                            type="monotone" 
                            dataKey="followers" 
                            stroke="#6941C6" 
                            strokeWidth={2} 
                            dot={{ r: 4 }} 
                            activeDot={{ r: 6 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="engagement" 
                            stroke="#2563EB" 
                            strokeWidth={2} 
                            dot={{ r: 4 }} 
                          />
                          <Line 
                            type="monotone" 
                            dataKey="reach" 
                            stroke="#10B981" 
                            strokeWidth={2} 
                            dot={{ r: 4 }} 
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Content Performance</CardTitle>
                    <CardDescription>Views, engagement, and shares per post</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={contentPerformance} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis dataKey="name" axisLine={false} tickLine={false} />
                          <YAxis axisLine={false} tickLine={false} width={35} />
                          <Tooltip />
                          <Legend verticalAlign="top" height={36} />
                          <Bar dataKey="views" fill="#6941C6" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="engagement" fill="#2563EB" radius={[4, 4, 0, 0]} />
                          <Bar dataKey="shares" fill="#10B981" radius={[4, 4, 0, 0]} />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Audience Demographics</CardTitle>
                    <CardDescription>Age distribution of your audience</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={audienceData}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                            outerRadius={80}
                            fill="#8884d8"
                            dataKey="value"
                          >
                            {audienceData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                          </Pie>
                          <Tooltip />
                          <Legend layout="vertical" verticalAlign="middle" align="right" />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Peak Engagement Times</CardTitle>
                    <CardDescription>Optimal times to post content</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="h-80">
                      <ResponsiveContainer width="100%" height="100%">
                        <LineChart 
                          data={
                            Array(24).fill(0).map((_, i) => ({
                              hour: i,
                              engagement: Math.floor(Math.random() * 1000) + 
                                (i > 8 && i < 22 ? 500 : 100) + 
                                (i > 16 && i < 20 ? 1000 : 0)
                            }))
                          }
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" vertical={false} />
                          <XAxis 
                            dataKey="hour"
                            tickFormatter={(hour) => `${hour}:00`}
                            axisLine={false}
                            tickLine={false}
                          />
                          <YAxis axisLine={false} tickLine={false} width={35} />
                          <Tooltip labelFormatter={(hour) => `${hour}:00`} />
                          <Line 
                            type="monotone" 
                            dataKey="engagement" 
                            stroke="#6941C6" 
                            strokeWidth={2}
                            dot={false}
                          />
                        </LineChart>
                      </ResponsiveContainer>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="engagement" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Engagement Details</CardTitle>
                  <CardDescription>This tab would contain detailed engagement metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This section would include more detailed engagement analytics, 
                    including types of engagement, engagement rates, and engagement by content type.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="audience" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Audience Analysis</CardTitle>
                  <CardDescription>This tab would contain detailed audience analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This section would include detailed audience demographics, 
                    geographic distribution, interests, and online behaviors.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="content" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content Analysis</CardTitle>
                  <CardDescription>This tab would contain detailed content performance analytics</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    This section would include detailed analysis of content performance, 
                    top-performing posts, content categories, and optimization recommendations.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
