import { useState, useRef } from 'react';
import { Navigation } from '@/components/ui/navigation';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  Play,
  Pause,
  Volume2,
  Download,
  Share2,
  Maximize,
  MessageCircle,
  Heart,
  Home,
  Video,
  List,
  User,
  Radio
} from 'lucide-react';

export default function MediaPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(80);
  const [newComment, setNewComment] = useState('');
  const videoRef = useRef<HTMLVideoElement>(null);

  const currentSermon = {
    title: "Living a Life of Purpose",
    speaker: "Pastor W.F. Kumuyi",
    date: "January 21, 2024",
    duration: "1h 15m",
    verse: "Romans 8:28 - 'And we know that in all things God works for the good of those who love him.'",
    description: "Discover God's perfect plan for your life and learn to walk confidently in His divine purpose, even through life's challenges and uncertainties."
  };

  const relatedVideos = [
    {
      title: "Faith in Action",
      speaker: "Pastor W.F. Kumuyi", 
      duration: "45 min",
      views: "2.1K",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop"
    },
    {
      title: "Prayer and Fasting",
      speaker: "Pastor D.K. Olukoya",
      duration: "52 min", 
      views: "1.8K",
      thumbnail: "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop"
    },
    {
      title: "Biblical Leadership",
      speaker: "Pastor W.F. Kumuyi",
      duration: "38 min",
      views: "1.5K", 
      thumbnail: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=300&h=200&fit=crop"
    }
  ];

  const comments = [
    {
      user: "Sarah Johnson",
      avatar: "SJ",
      time: "2 hours ago",
      text: "This message truly blessed my heart. Pastor Kumuyi's teachings always bring clarity to God's word. Hallelujah!"
    },
    {
      user: "David Adebayo", 
      avatar: "DA",
      time: "4 hours ago",
      text: "Romans 8:28 has been my anchor verse this year. Thank you for this powerful exposition of God's sovereign plan."
    },
    {
      user: "Grace Okafor",
      avatar: "GO", 
      time: "1 day ago",
      text: "Watching from Lagos. This sermon came at the perfect time when I needed to hear about God's purpose for my life."
    }
  ];

  const sidebarItems = [
    { icon: Home, label: 'Home', id: 'home' },
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
                  className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary/80 transition-colors duration-200"
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-8">
            
            {/* Video Player Section */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Video Player */}
              <Card className="overflow-hidden">
                <div className="relative bg-black">
                  <Badge className="absolute top-4 left-4 z-10 bg-orange text-orange-foreground">
                    LIVE
                  </Badge>
                  <video 
                    ref={videoRef}
                    className="w-full aspect-video"
                    poster="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=450&fit=crop"
                  >
                    <source src="/sample-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  
                  {/* Video Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <Button
                          size="sm"
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="bg-accent text-primary hover:bg-accent/90"
                        >
                          {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                        </Button>
                        <div className="flex items-center space-x-2">
                          <Volume2 className="h-4 w-4 text-white" />
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={volume}
                            onChange={(e) => setVolume(parseInt(e.target.value))}
                            className="w-20"
                          />
                        </div>
                      </div>
                      <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Sermon Details */}
              <Card>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl mb-2">{currentSermon.title}</CardTitle>
                      <p className="text-muted-foreground">{currentSermon.speaker}</p>
                      <p className="text-sm text-muted-foreground">
                        {currentSermon.date} • {currentSermon.duration}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <Heart className="h-4 w-4 mr-2" />
                        Save
                      </Button>
                      <Button variant="outline" size="sm">
                        <Share2 className="h-4 w-4 mr-2" />
                        Share
                      </Button>
                      <Button className="bg-accent text-primary hover:bg-accent/90" size="sm">
                        <Download className="h-4 w-4 mr-2" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <blockquote className="text-accent italic mb-4 text-lg">
                    {currentSermon.verse}
                  </blockquote>
                  <p className="text-muted-foreground leading-relaxed">
                    {currentSermon.description}
                  </p>
                </CardContent>
              </Card>

              {/* Comments Section */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-5 w-5 mr-2" />
                    Comments ({comments.length})
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Add Comment */}
                  <div className="space-y-4">
                    <Textarea
                      placeholder="Share your thoughts or testimony..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      className="bg-secondary/20"
                    />
                    <Button className="bg-accent text-primary hover:bg-accent/90">
                      Post Comment
                    </Button>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {comments.map((comment, index) => (
                      <div key={index} className="flex space-x-4">
                        <Avatar>
                          <AvatarFallback className="bg-secondary text-secondary-foreground">
                            {comment.avatar}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium">{comment.user}</span>
                            <span className="text-sm text-muted-foreground">{comment.time}</span>
                          </div>
                          <p className="text-muted-foreground">{comment.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Related Videos Sidebar */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Related Sermons</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {relatedVideos.map((video, index) => (
                    <div key={index} className="flex space-x-3 cursor-pointer group">
                      <div className="relative">
                        <img 
                          src={video.thumbnail}
                          alt={video.title}
                          className="w-32 h-20 object-cover rounded"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 rounded flex items-center justify-center">
                          <Play className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-medium text-sm mb-1 group-hover:text-accent transition-colors duration-200">
                          {video.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mb-1">{video.speaker}</p>
                        <p className="text-xs text-muted-foreground">
                          {video.duration} • {video.views} views
                        </p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}