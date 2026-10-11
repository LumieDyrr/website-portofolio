import { Github, Linkedin, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Github, href: 'https://github.com/LumieDyrr', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/muhammad-adha-alfaridzi', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:muhammadadhaanbu@gmail.com', label: 'Email' },
]

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skill' },
  { id: 'contact', label: 'Contact' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <footer className="border-t border-line/60">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <div className="font-display text-2xl text-go">Portfolio</div>
            <p className="leading-relaxed text-mist">
              Apa itu website bagus!! yang penting logic aplikasinya jalan EAAAA!!!
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className="block text-mist transition-colors hover:text-foam">
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Let's Connect</h3>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-lg bg-panel p-2 text-mist transition-all duration-200 hover:-translate-y-1 hover:bg-go hover:text-ink"
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                </a>
              ))}
            </div>
            <p className="text-sm text-mist">
              Always open to discussing new opportunities and interesting projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line/60 pt-8 md:flex-row">
          <div className="text-sm text-mist">© {currentYear} Muhammad Adha Alfaridzi. All rights reserved.</div>
          <button onClick={scrollToTop} className="text-sm text-mist transition-colors hover:text-foam">
            Back to top ↑
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
