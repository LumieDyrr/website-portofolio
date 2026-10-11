import { useEffect, useRef, useState } from 'react'

// Mengembalikan [ref, seen]. `seen` menjadi true sekali saat elemen masuk layar.
export default function useInView(threshold = 0.2) {
  const ref = useRef(null)
  const [seen, setSeen] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setSeen(true)
        io.disconnect()
      }
    }, { threshold })
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return [ref, seen]
}
