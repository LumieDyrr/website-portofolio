import { listTools } from '../data/allData'
import Reveal from './reveal'
import { track } from '../hooks/spotlight'

function Tools() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <h1 className="text-center font-display text-3xl">Tools yang dikuasai</h1>
      </Reveal>
      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {listTools.map((tool, i) => (
          <Reveal key={tool.id} delay={(i % 4) * 90}>
            <div onMouseMove={track} className="spot flex items-center gap-4 rounded-xl border border-line bg-panel/60 p-4">
              <img src={tool.gambar} alt={tool.nama} className="w-14 rounded-lg bg-white/10 p-2" />
              <div>
                <h2 className="font-semibold">{tool.nama}</h2>
                <p className="text-sm text-mist">{tool.ket}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export default Tools
