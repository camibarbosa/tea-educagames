"use client";
import Image from 'next/image';
import { useState } from 'react';

import palavras from '../../../assets/palavras.jpg'
import familia from '../../../assets/familia-img.jpg'
import emocoes from '../../../assets/emotions.jpg'
import almoco from '../../../assets/almoco-img.jpg'
import animais from '../../..//assets/animais.jpg'
import letras from '../../../assets/letras.jpg'
import sentidos from '../../../assets/sentidos.jpg'
import frutas from '../../../assets/frutas.jpg'

import Link from 'next/link';

function Card() {
    const [navbar, setNavbar] = useState(false);
    return (
        <div className='bg-slate-100'>
            <h2 id='jogos' className='text-center font-bold mt-20 text-3xl md:text-5xl font-dela text-sky-600'>Jogos</h2>
            <div className="flex items-center justify-center min-h-screen mx-auto container mt-20">
                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Card */}
                    <div id='membrosFamilia' className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={palavras} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Aprendendo o ABC</h5>
                             <Link href="/palavras" className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={familia} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Membros da família</h5>
                             <Link href='/familia' className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={almoco} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Hora do almoço!</h5>
                             <Link href='/almoco' className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={emocoes} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Emoções</h5>
                             <Link href='/emocoes' className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={frutas} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Frutas e suas cores</h5>
                             <Link href='/frutas' className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={letras} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Letras do alfabeto</h5>
                             <Link href='/letras' className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={sentidos} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Sentidos</h5>
                             <Link href="/corpo/humano" className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    {/* Card */}
                    <div className="card">
                        <div className="p-5 flex flex-col">
                            <div className="rounded-xl overflow-hidden">
                                <Image src={animais} />
                            </div>
                            <h5 className='text-md md:text-xl 
                             font-medium mt-3'>Animais</h5>
                             <Link href='/animais' className='text-center bg-orange-500 text-blue-100 py-4 rounded-lg font-semibold mt-4 hover:bg-blue-600 focus:scale-95 transition-all duration-200 ease-out'>Jogar agora</Link>
                        </div>
                    </div>
                    {/* end card */}
                    
                </div>
                {/* end grid */}
            </div>
        
        </div>
    );
}

export default Card;