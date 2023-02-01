// Za CSS celoga dokumenta za uporabla Tailwind CSS

import React from 'react'

// importanje useState za preklop med menuji, close logo pa menu za ikone, navLinks za izpis
import { useState } from 'react'
import {close, logo, menu} from '../assets'
import {navLinks} from '../constants';

const Navbar = () => {

  // useState za toggle menu, po defaulti false
  const [toggle, setToggle] = useState(false)


  return (

    // Tailwind css v classname 
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      {/* Logo z tailwind css classname */}
      <img src={logo} alt="hoobank" className='w-[150px] h-[105px]' />

      {/* Lista za navbar, sm:flex hidden (skrito na malih napravah) */}
      <ul 
      className='list-none 
      sm:flex hidden
      justify-end 
      items-center 
      flex-1'>

        {/* Izpis navLinks iz index.js iz constants. Funkcija map() za izpis ge sledi list <li> z keyon nav.id. Tomi sledi anchor tag <a> v keron pela na link #nav.id. V anchor tagi pa izpiše vse nav.title. */}
        {navLinks.map((nav, index) => (
          <li key={nav.id} 
          className={`font-poppins 
          font-normal 
          cursor-pointer
          text-[16px]
          text-white
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}>
            <a href={`#${nav.id}`}>

              {nav.title}
            </a>
          </li>
        ))}
      </ul>
      
      {/* Spodaj sledi div z menujon za menše naprave. V ton primeri se uporabi useState ge je menu po deafulti zapreti. Img se menja na toggle. Z onClick eventon se toggle spreminja s prejšnoga stanja. */}
      <div className='sm:hidden
      flex
      flex-1
      justify-end
      items-center'>
        <img 
          src={toggle ? close : menu}
          alt="menu"
          className='w-[28px] h-[28px]
          object-contain'
          onClick={() => setToggle((prev) => !prev)} />

        {/* CSS div-a za menu keri se odpre na toggle z animacijo sidebar */}
        <div className={`${toggle ? "flex" : "hidden"} p-6
         bg-black-gradient
         absolute
         top-20
         right-0
         mx-4
         my-2
         min-w-[140px]
         rounded-xl
         sidebar `}>
          
          {/* Skoraj copy paste od odzgoraj */}
          <ul 
            className='list-none 
            flex
            flex-col
            justify-end 
            items-center 
            flex-1'>
              {navLinks.map((nav, index) => (
                <li key={nav.id} 
                className={`font-poppins 
                font-normal 
                cursor-pointer
                text-[16px]
                text-white
                ${index === navLinks.length - 1 ? "mr-0" : "mb-4"}`}>
                  <a href={`#${nav.id}`}>
                    {nav.title}
                  </a>
                </li>
              ))}
          </ul>

        </div>

      </div>
    </nav>
  )
}

export default Navbar