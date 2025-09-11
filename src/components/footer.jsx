import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: '#https://github.com/LumieDyrr',
      label: 'GitHub'
    },
    {
      icon: Linkedin,
      href: '#',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      href: '#',
      label: 'Email'
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <div className="text-2xl font-bold gradient-text">
                Portfolio
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Apa itu website bagus!! yang penting logic aplikasinya jalan EAAAA!!!
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Quick Links</h3>
              <div className="space-y-2">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="block text-muted-foreground hover:text-primary transition-colors"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Let's Connect</h3>
              <div className="flex space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="p-2 rounded-lg bg-muted/50 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-all duration-200"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                Always open to discussing new opportunities and interesting projects.
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Modern Developer. All rights reserved.
            </div>

            <div className="flex items-center space-x-1 text-muted-foreground text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-500 fill-current animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>

            <button
              onClick={scrollToTop}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Back to top ↑
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;