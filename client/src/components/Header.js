import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
     <nav className="border-b-2 border-tertiary bg-primary px-6 py-3 flex justify-between ">
      <h1 className="font-bold text-xl text-secondary">Kayitare Audax</h1>
      <div className="space-x-4 text-white">
        <Link to="/">Home</Link>
        <a href='#about'>About</a>
        <a href='#skills'>Skills</a>
        <a href='#courses'>Courses</a>
        <a href='#experience'>Experience</a>
        <a href='#projects'>Projects</a>
      </div>
    </nav>
  )
}

export default Header