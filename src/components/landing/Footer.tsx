import { HeartHandshake, Facebook, Instagram, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-secondary/30 via-background to-secondary/20 border-t border-border/50 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5"></div>
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 opacity-50"></div>
      
      <div className="relative container mx-auto px-4 sm:px-6 py-12 sm:py-16">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12">
          {/* Brand Section */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <HeartHandshake className="h-8 w-8 sm:h-10 sm:w-10 text-primary transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
              </div>
              <span className="text-2xl sm:text-3xl font-bold font-headline bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                BodiesBuddy
              </span>
            </div>
            <p className="text-muted-foreground text-base sm:text-lg max-w-md leading-relaxed">
              Transform your fitness journey with AI-powered personalization, intuitive tracking, and personalized coaching.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://www.facebook.com/profile.php?id=61572638618320" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
              <a 
                href="https://www.instagram.com/bodies_buddy/" 
                target="_blank"
                rel="noopener noreferrer"
                className="group relative p-2.5 rounded-xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-primary/25"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
              <h3 className="font-bold text-lg sm:text-xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
                Quick Links
              </h3>
            </div>
            <ul className="space-y-3">
              {[
                { href: '#features', label: 'Features' },
                { href: '#screenshots', label: 'Screenshots' },
                { href: '#testimonials', label: 'Testimonials' },
                { href: '#contact', label: 'Contact' }
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-2 text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1"
                  >
                    <div className="w-1.5 h-1.5 bg-primary/50 rounded-full group-hover:bg-primary transition-colors duration-300"></div>
                    <span className="text-sm sm:text-base font-medium">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="relative border-t border-border/50 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <div className="text-center sm:text-left space-y-1">
              <p className="text-sm text-muted-foreground font-medium">
                &copy; {new Date().getFullYear()} BodiesBuddy Inc. All rights reserved.
              </p>
              <p className="text-sm text-muted-foreground">
                Built by{" "}
                <a 
                  href="https://codenies-new.vercel.app/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 font-semibold hover:underline transition-all duration-300 hover:scale-105 inline-block"
                >
                  Codenies Solutions
                </a>
              </p>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-sm text-muted-foreground font-medium flex items-center justify-center sm:justify-end space-x-2">
                <span>Made with</span>
                <HeartHandshake className="h-4 w-4 text-primary animate-pulse" />
                <span>for a healthier you.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
