'use client'

import { useState } from 'react'
import Image from 'next/image'
import "@styles/home.css"

export default function Home() {
  const [input, setInput] = useState("")
  const handlerGantiNama = () => {
    setNama(input)
  }
  
  const [kosong, setKosong] = useState(true)
  const [nama, setNama] = useState('Andi Ichwan Farmawan')
  const handlerInput = (val) => {
    setInput(val)
    setKosong(val.trim() === '')
  }

  function enterButton(e) {
    if (e.key == "Enter") handlerGantiNama();
  }

  
  let content;
  if (kosong) {
    content = (
      <button className="cta active">
        <p>Disabled</p>
      </button>
    );
  } else {
    content = (
      <button className="cta" onClick={() => {
        handlerGantiNama();
      }}>
      <p>Ganti nama</p>
    </button>
    );
  }

  return (
    <>
      <div className='banner-container'>
        <div className='header-banner-wrapper'> 
          <div className='profile-header-banner'>
            <Image 
            src='/assets/profil.png'
            alt='picture'
            fill 
            objectFit='contain'
           />
          </div>
          <div className='content-header-banner'>
            <h1>{nama}</h1>
            <div className='bio-nim-header-banner'>
              <p>D121211025</p>
              <p>PMW A 2023 </p>
            </div>
          </div>
        </div>
        <div className='cta-banner-wrapper'>
          <input
            placeholder='Masukkan nama disini'
            onInput={(val) => handlerInput(val.target.value)}
            onKeyDown={(value) => {
              enterButton(value)
            }}
          ></input>
          {content}
        </div>
      </div>
    </>
  )
}