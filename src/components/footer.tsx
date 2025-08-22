import { Cross, Twitter, MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent">
                <Cross className="h-6 w-6 text-primary" />
              </div>
              <span className="text-2xl font-bold">
                Deeper Life Media Archive
              </span>
            </div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Preserving and sharing the eternal truths of God's word through digital media, 
              making Biblical teachings accessible to believers worldwide.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-primary">
                <Twitter className="h-4 w-4 mr-2" />
                Follow Us
              </Button>
              <Button variant="outline" size="sm" className="border-primary-foreground/30 text-primary-foreground hover:bg-accent hover:text-primary">
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {['About Us', 'Sermons', 'Live Events', 'Contact', 'Support'].map((link) => (
                <li key={link}>
                  <a 
                    href="#" 
                    className="text-primary-foreground/80 hover:text-accent transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">info@deeperlifemedia.org</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+234 803 304 4054</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-primary-foreground/60 text-sm">
              © 2024 Deeper Life Bible Church. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-primary-foreground/60 hover:text-accent text-sm transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}