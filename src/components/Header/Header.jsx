import React from 'react'
import { IconContext } from 'react-icons'
import { Link, useNavigate } from 'react-router-dom'
import { CiCirclePlus } from "react-icons/ci";

export default function Header() {
    const navigate = useNavigate()
  return (
    <header className={`flex justify-between items-center px-4 h-[50px] `}>
    <h1 className="text-2xl font-sans font-bold text-white">Tasks</h1>
    <nav className="flex items-center gap-4">
      <Link to={"/"} className="text-white font-sans">
        All Tasks
      </Link>
      <IconContext.Provider value={{ className: "add-icon" }}>
        <button onClick={() => navigate("/add")}>
          <CiCirclePlus />
        </button>
      </IconContext.Provider>
    </nav>
  </header>
  )
}
