import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Video, Heart, Radio, Music, BookOpen, Users } from 'lucide-react';

export function FeaturesSection() {
  const features = [
    {
      icon: Video,
      title: 'Archived Sermons',
      description: 'Access thousands of digitized sermons from Pastor W.F. Kumuyi and other church leaders, searchable by topic, date, or Bible passage.',
      gradient: 'from-accent/20 to-secondary/20'
    },
    {
      icon: Heart,
      title: 'Personal Playlists',
      description: 'Create and organize your favorite messages, build custom study collections, and share spiritual content with fellow believers.',
      gradient: 'from-secondary/20 to-accent/20'
    },
    {
      icon: Radio,
      title: 'Live Streaming',
      description: 'Join live services, special events, and Bible study sessions from anywhere in the world with HD video and audio quality.',
      gradient: 'from-primary/20 to-secondary/20'
    },
    {
      icon: Music,
      title: 'Worship Music',
      description: 'Enjoy a rich collection of hymns, praise songs, and worship music from Deeper Life Bible Church choirs and musicians.',
      gradient: 'from-accent/20 to-primary/20'
    },
    {
      icon: BookOpen,
      title: 'Bible Study Resources',
      description: 'Access study guides, sermon notes, and teaching materials that complement each message for deeper spiritual growth.',
      gradient: 'from-secondary/20 to-primary/20'
    },
    {
      icon: Users,
      title: 'Community Features',
      description: 'Connect with other believers, share testimonies, prayer requests, and participate in online fellowship groups.',
      gradient: 'from-primary/20 to-accent/20'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Everything You Need for 
            <span className="block text-accent">Spiritual Growth</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover a comprehensive digital library designed to nurture your faith journey 
            with authentic Biblical teachings and community connections.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/60 backdrop-blur-sm hover:bg-card/80"
              >
                <CardHeader className="text-center pb-4">
                  <div className={`mx-auto w-16 h-16 rounded-full bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="h-8 w-8 text-accent" />
                  </div>
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-accent transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}