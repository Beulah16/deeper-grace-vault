import { useState } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { 
  Play, 
  Heart, 
  Search, 
  Star, 
  Clock, 
  Bookmark,
  Home,
  Video,
  List,
  User,
  Radio
} from 'lucide-react';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('home');

  const featuredSermon = {
    title: "Walking in Divine Purpose",
    speaker: "Pastor W.F. Kumuyi",
    date: "January 21, 2024",
    duration: "1h 15m",
    rating: 4.9,
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop",
    verse: "Jeremiah 29:11"
  };

  const dailyHighlights = [
    {
      title: "Worship Experience",
      duration: "25 min",
      category: "Worship",
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=400&h=300&fit=crop"
    },
    {
      title: "Church Conference",
      duration: "45 min", 
      category: "Conference",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
    },
    {
      title: "Family Sunday",
      duration: "35 min",
      category: "Family",
      thumbnail: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop"
    },
    {
      title: "Youth Service",
      duration: "40 min",
      category: "Youth",
      thumbnail: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=400&h=300&fit=crop"
    }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Home', id: 'home', active: true },
    { icon: Video, label: 'Sermons', id: 'sermons' },
    { icon: List, label: 'Playlists', id: 'playlists' },
    { icon: Heart, label: 'Favorites', id: 'favorites' },
    { icon: Radio, label: 'Live', id: 'live' },
    { icon: User, label: 'Profile', id: 'profile' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-primary text-primary-foreground min-h-screen p-4">
          <div className="space-y-2">
            {sidebarItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors duration-200 ${
                    activeTab === item.id 
                      ? 'bg-accent text-primary' 
                      : 'hover:bg-primary/80'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {/* Search Bar */}
          <div className="mb-8">
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search sermons, speakers, topics..." 
                className="pl-10 bg-secondary/20"
              />
            </div>
          </div>

          {/* Featured Sermon */}
          <Card className="mb-8 overflow-hidden bg-gradient-to-r from-primary/10 to-secondary/10">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/3">
                <img 
                  src={featuredSermon.thumbnail}
                  alt={featuredSermon.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="flex-1 p-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-orange text-orange-foreground">FEATURED</Badge>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-accent text-accent" />
                    <span className="text-sm font-medium">{featuredSermon.rating}</span>
                  </div>
                </div>
                
                <h2 className="text-3xl font-bold text-primary mb-2">
                  {featuredSermon.title}
                </h2>
                <p className="text-muted-foreground mb-1">{featuredSermon.speaker}</p>
                <p className="text-sm text-muted-foreground mb-4">
                  {featuredSermon.date} • {featuredSermon.duration}
                </p>
                
                <blockquote className="text-accent italic mb-6">
                  "{featuredSermon.verse}"
                </blockquote>
                
                <div className="flex space-x-4">
                  <Button className="bg-accent text-primary hover:bg-accent/90">
                    <Play className="mr-2 h-4 w-4" />
                    Watch Now
                  </Button>
                  <Button variant="outline" className="border-secondary text-secondary-foreground hover:bg-secondary">
                    <Bookmark className="mr-2 h-4 w-4" />
                    Save for Later
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Daily Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-6">Daily Highlights</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {dailyHighlights.map((highlight, index) => (
                <Card key={index} className="group hover:shadow-lg transition-all duration-300 cursor-pointer">
                  <div className="relative">
                    <img 
                      src={highlight.thumbnail}
                      alt={highlight.title}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-lg flex items-center justify-center">
                      <Button size="sm" className="bg-accent text-primary hover:bg-accent/90">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="absolute top-2 right-2">
                      <Badge variant="secondary" className="bg-black/60 text-white">
                        {highlight.duration}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{highlight.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Badge className="bg-secondary text-secondary-foreground">
                      {highlight.category}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}