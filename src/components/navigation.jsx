import { useState, useEffect } from 'react';

const Navigation = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const scroll = () => {
      if (window.scrollY > 150) {
        setActive(true)
      };
      setActive(false)
    };
    window.addEventListener("scroll", scroll);
    return () => {
      window.removeEventListener("scroll", scroll)
    };
  }, []);

  return (
    <div className='navbar h-20 py-4 flex items-center justify-between border-white rounded-xl'>
      <div className='logo'>
        <h1 className='ml-5 text-xl font-bold bg-slate text-slate p-1 md:bg-transparent md:text-white '>Portofolio abal-abal</h1>
      </div>
      <ul className={`menu flex item-center gap-9 mr-20 sm:static fixed left-1/2 -translate-x-1/2 md:-translate-x-0 md:opacity-100 ${active ? "top-0 opacity-100" : "-top-10 opacity-0"}`}>
        <li>
          <a href='#' className='text-lg font-medium hover:opacity-50'>Home</a>
        </li>
        <li>
          <a href='#about' className='text-lg font-medium hover:opacity-50'>about</a>
        </li>
        <li>
          <a href='#skills' className='text-lg font-medium hover:opacity-50'>Skill</a>
        </li>
        <li>
          <a href='#contact' className='text-lg font-medium hover:opacity-50'>contact</a>
        </li>
      </ul>
    </div>
  )
};

export default Navigation
