"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { useState } from 'react';

import icon from '../../../assets/icon.png'
import exit from '../../../assets/exit-icon.png'
import menu  from '../../../assets/menu-icon.png'


export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
 
  return ( 
    <div>
        <nav className="w-full bg-slate-50 fixed top-0 left-0 right-0 z-10 shadow-sm">
          <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
            <div>
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                {/* LOGO */}
                <Link href="/" className='max-w-full'>
                  <Image className='w-24' src={icon} />
                </Link>
                {/* HAMBURGER BUTTON FOR MOBILE */}
                <div className="md:hidden">
                  <button
                    className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                    onClick={() => setNavbar(!navbar)}
                  >
                    {navbar ? (
                      <Image src={exit} width={20} height={20} alt="logo" />
                    ) : (
                      <Image
                        src={menu}
                        width={20}
                        height={20}
                        alt="logo"
                        className="focus:border-none active:border-none"
                      />
                    )}
                  </button>
                </div>
              </div>
            </div>
            <div>
              <div
                className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                  navbar ? 'p-12 md:p-0 block' : 'hidden'
                }`}
              >
                <ul className="h-screen md:h-auto items-center justify-center md:flex ">
                    <Link  activeClassName="is-active"  href="/" onClick={() => setNavbar(!navbar)}>
                        <li>Inicio</li>
                    </Link >
                    <Link  activeClassName="is-active"  href="#jogos" onClick={() => setNavbar(!navbar)}>
                    <li>Jogos</li>
                  </Link >
                  <Link href="/#sobre" onClick={() => setNavbar(!navbar)}>
                  <li>Sobre</li>
                  </Link >
                  <Link  activeClassName="is-active"  href="/#contato" onClick={() => setNavbar(!navbar)}>
                  <li>Contato</li>
                  </Link >
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </div>
     
  );
}