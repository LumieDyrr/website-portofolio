import { useState } from 'react'
import { Mail, Phone, MapPin, Send, Check } from 'lucide-react'
import Reveal from './reveal'
import { track } from '../hooks/spotlight'

const contactInfo = [
  { icon: Mail, title: 'Email', value: 'UcupKnalpot@gmail.com', href: 'mailto:UcupKnalpot@gmail.com' },
  { icon: Phone, title: 'Phone', value: '+62 85157767445', href: 'tel:+62 85157767445' },
  { icon: MapPin, title: 'Location', value: 'Tangerang, Tng', href: '#contact' },
]

const field =
  'w-full rounded-lg border border-line bg-ink/60 px-4 py-3 text-paper placeholder:text-mist/60 transition-colors focus:border-go focus:outline-none focus:ring-2 focus:ring-go/40'
const label = 'mb-2 block text-sm font-medium text-mist'

const ContactSection = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [sent, setSent] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSent(false)
    // TODO: hubungkan ke layanan pengiriman (mis. EmailJS / Formspree). Saat ini hanya simulasi.
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setFormData({ name: '', email: '', subject: '', message: '' })
    setIsSubmitting(false)
    setSent(true)
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal className="mb-16 text-center">
          <h2 className="font-display text-3xl md:text-4xl">Get In Touch</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-1">
            {contactInfo.map((info, i) => (
              <Reveal key={info.title} delay={i * 100}>
                <div onMouseMove={track} className="spot rounded-xl border border-line bg-panel/60 p-6">
                  <div className="flex items-center gap-4">
                    <div className="rounded-lg bg-go/15 p-3 text-go">
                      <info.icon size={24} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="mb-1 font-semibold text-mist">{info.title}</h3>
                      <a href={info.href} className="break-all transition-colors hover:text-foam">{info.value}</a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}

            <Reveal delay={300}>
              <div className="rounded-xl border border-line bg-panel/60 p-6">
                <h3 className="mb-4 font-semibold">Let's Connect</h3>
                <p className="text-sm leading-relaxed text-mist">
                  I'm always interested in hearing about new opportunities,
                  interesting projects, or just having a conversation about
                  the latest in web development. Karena aplikasi yang baik adalah yang penting jalan
                </p>
              </div>
            </Reveal>
          </div>

          <Reveal delay={150} className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-xl border border-line bg-panel/60 p-8">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className={label}>Name</label>
                  <input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="Your name" className={field} />
                </div>
                <div>
                  <label htmlFor="email" className={label}>Email</label>
                  <input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="your.email@example.com" className={field} />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className={label}>Subject</label>
                <input id="subject" name="subject" type="text" value={formData.subject} onChange={handleInputChange} placeholder="What's this about?" className={field} />
              </div>
              <div>
                <label htmlFor="message" className={label}>Message</label>
                <textarea id="message" name="message" required rows={6} value={formData.message} onChange={handleInputChange} placeholder="Tell me about your project or just say hello..." className={`${field} resize-none`} />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-go flex w-full items-center justify-center gap-2 rounded-lg bg-go px-6 py-3 font-semibold text-ink transition-opacity disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <span className="h-4 w-4 animate-spin rounded-full border-2 border-ink border-t-transparent" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>

              <p role="status" className={`flex items-center gap-2 text-sm text-green-400 transition-opacity duration-500 ${sent ? 'opacity-100' : 'opacity-0'}`}>
                <Check size={16} /> Message sent! Thank you, I'll get back to you soon.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
