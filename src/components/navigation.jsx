import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skill' },
  { id: 'contact', label: 'Contact' },
]

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [current, setCurrent] = useState('home')
  const bar = useRef(null)

  // Latar navbar + progress bar scroll
  useEffect(() => {
    let raf = 0
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const max = document.documentElement.scrollHeight - window.innerHeight
        if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`
        setScrolled(window.scrollY > 40)
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Menandai section yang sedang dilihat
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setCurrent(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    links.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color] duration-300 ${
        scrolled || open ? 'bg-ink/80 backdrop-blur-md border-line/60' : 'bg-transparent border-transparent'
      }`}
    >
      <div ref={bar} className="progress" aria-hidden="true" />
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6" aria-label="Navigasi utama">
        <a href="#home" className="flex items-center gap-3 text-xl font-bold">
          <span className="pulse-dot" aria-hidden="true" />
          Portofolio
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a href={`#${id}`} className="nav-link text-base font-medium" aria-current={current === id ? 'true' : undefined}>
                {label}
              </a>
            </li>
          ))}
        </ul>

        <button
          className="-mr-2 p-2 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      <div className={`grid transition-[grid-template-rows] duration-300 md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <ul className="overflow-hidden px-6">
          {links.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setOpen(false)}
                className="nav-link block py-3 text-lg font-medium"
                aria-current={current === id ? 'true' : undefined}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}

export default Navigation
