import React from 'react'
import { listTools } from '../data/allData'

function Tools() {
  return (
    <div className='tools mt-20 mb-10'>
      <h1 className='text-3xl/snug font-bold mb-3 text-center' id='skills'>Tools yang dikuasai</h1>
      <div className='tools-box mt-10 grid grid-cols-4 gap-4 m-10'>
        {listTools.map((tool) => {
          return (
            <div className='flex items-center gap-2 p-3 border border-zinc-400 rounded-md hover:bg-zinc-700 group' key={tool.id}>
              <img src={tool.gambar} alt='Tools Image' className='w-14 bg-zinc-700 p-1 group-hover:bg-zinc-900' />
              <div>
                <h1>{tool.nama}</h1>
                <p>{tool.ket}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Tools