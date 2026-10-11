import Image from '../data/allData.js'
import Reveal from './reveal'
import useInView from '../hooks/useInView'

// Isi kartu respons API, diambil dari data yang sudah ada di website.
const rows = [
  ['name', 'Muhammad Adha Alfaridzi', 's'],
  ['university', 'Universitas Pamulang', 's'],
  ['major', 'Teknik Informatika', 's'],
  ['semester', 7, 'n'],
  ['focus', 'Back-end Development', 's'],
  ['stack', ['Go', 'TypeScript', 'Node.js', 'React'], 'a'],
  ['location', 'Tangerang', 's'],
]

const Str = ({ children }) => <span className="text-paper">"{children}"</span>

function ApiCard() {
  const [ref, seen] = useInView(0.35)
  const step = 140
  return (
    <div
      ref={ref}
      className={`${seen ? 'is-in' : ''} rounded-2xl border border-line bg-panel/70 shadow-2xl shadow-black/30 backdrop-blur`}
    >
      <div className="flex items-center justify-between border-b border-line px-5 py-3 font-mono text-sm">
        <span className="text-mist">GET /adha</span>
        <span className="ok-badge rounded-md bg-green-400/15 px-2 py-0.5 text-green-400" style={{ '--d': `${rows.length * step + 200}ms` }}>
          200 OK
        </span>
      </div>
      <pre className="overflow-x-auto px-5 py-5 font-mono text-sm leading-7 sm:text-[15px]">
        <code>
          <span className="text-mist">{'{'}</span>
          {rows.map(([key, val, type], i) => (
            <span key={key} className="code-line block pl-5" style={{ '--d': `${(i + 1) * step}ms` }}>
              <span className="text-foam">"{key}"</span>
              <span className="text-mist">: </span>
              {type === 's' && <Str>{val}</Str>}
              {type === 'n' && <span className="text-go">{val}</span>}
              {type === 'a' && (
                <>
                  <span className="text-mist">[</span>
                  {val.map((v, j) => (
                    <span key={v}>
                      <Str>{v}</Str>
                      {j < val.length - 1 && <span className="text-mist">, </span>}
                    </span>
                  ))}
                  <span className="text-mist">]</span>
                </>
              )}
              {i < rows.length - 1 && <span className="text-mist">,</span>}
            </span>
          ))}
          <span className="text-mist">{'}'}</span> <span className="caret" aria-hidden="true" />
        </code>
      </pre>
    </div>
  )
}

function Profile() {
  return (
    <>
      {/* Hero */}
      <section id="home" className="hero-glow relative flex min-h-screen items-center pt-24 pb-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <p className="enter mb-4 text-lg text-mist" style={{ '--d': '0ms' }}>Hi, nama saya</p>
            <h1 className="font-display text-[clamp(2rem,5.2vw,3.9rem)] leading-[1.08]">
              <span className="mask"><span style={{ '--d': '150ms' }}>Muhammad</span></span>
              <span className="mask"><span style={{ '--d': '260ms' }}>Adha</span></span>
              <span className="mask"><span style={{ '--d': '370ms' }}>Alfaridzi</span></span>
            </h1>
            <p className="enter mt-6 text-xl text-foam" style={{ '--d': '600ms' }}>Back-end Development</p>
            <div className="enter mt-10 flex flex-wrap gap-4" style={{ '--d': '750ms' }}>
              <a href="#contact" className="btn-go inline-block rounded-2xl bg-go px-8 py-3 font-semibold text-ink transition-colors">
                Hubungi saya
              </a>
              <a href="#skills" className="inline-block rounded-2xl border border-line px-8 py-3 font-semibold transition-colors hover:border-go hover:text-foam">
                Lihat skill
              </a>
            </div>
          </div>

          <div className="enter relative mx-auto w-full max-w-sm" style={{ '--d': '300ms' }}>
            <div className="morph absolute inset-4 bg-gradient-to-br from-go to-foam opacity-80" aria-hidden="true" />
            <img
              src={Image.MuhammadAdha}
              alt="Muhammad Adha Alfaridzi"
              className="drift relative z-10 h-auto w-full drop-shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Tentang */}
      <section id="about" className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <Reveal>
          <h2 className="mb-6 font-display text-3xl">Tentang saya</h2>
          <p className="text-lg leading-relaxed text-mist">
            Saya Mahasiswa Universitas Pamulang semester 7 program studi Teknik Informatika
            yang memiliki ketertarikan pada bidang back-end Development, ketertarikan pada
            bidang ini sudah berlangsung lebih dari 1 tahun.
          </p>
        </Reveal>
        <ApiCard />
      </section>
    </>
  )
}

export default Profile
