import { HeartHandshake, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <HeartHandshake className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold font-headline">BodiesBuddy</span>
          </div>
          <div className="text-center md:text-left text-sm text-muted-foreground mb-4 md:mb-0">
            <p>&copy; {new Date().getFullYear()} BodiesBuddy Inc. All rights reserved.</p>
            <p>Made with ❤️ for a healthier you.</p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Facebook"
            >
              <Facebook className="h-6 w-6" />
              <span className="sr-only">Facebook</span>
            </a>
            <a 
              href="#" 
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="h-6 w-6" />
              <span className="sr-only">Instagram</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
