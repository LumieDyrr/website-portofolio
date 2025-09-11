import React from 'react'
import { listProject } from '../data/allData'

const Project = () => {
  return (
    <div className='project mt-25 py-10'>
      <h1 className='text-3xl font-bold text-center m-5'>project</h1>
      <p className='text-center opacity-40 text-xl mb-5'>Berikut project yang telah saya buat.</p>
      <div className='project-box mt-10 grid grid-cols-3 gap-4'>
        {listProject.map((Project) => {
          return (
            <div className='m-10' key={Project.id}>
              <img src={Project.gambar} alt='Project Image'></img>
              <div>
                <h1>{Project.nama}</h1>
                <p>{Project.desk}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Project