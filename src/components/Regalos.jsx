import React from 'react'
import useScrollVisible from '../hooks/useScrollVisible'
import '../styles/regalos.css'

const Regalos = () => {
  const sobreContentVisible = useScrollVisible('sobreContent')
  const barraContentVisible = useScrollVisible('barraContent')
  return (
    <div className='regalos'>
      <h2 className='regalos-title'>¿No sabes qué Regalarnos?</h2>
      <div className="regalos-cards">
        <div id='sobreContent' className={`regalos-card sombra ${sobreContentVisible && 'animate__animated animate__zoomIn'}`}>
          <h3 className='regalos-card-title'>Sobres Regalo</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className ="icon icon-tabler icon-tabler-mail" width="60" height="60" viewBox="0 0 24 24" strokeWidth="0.5" stroke="#bea77b" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
              <path d="M3 7l9 6l9 -6" />
            </svg>
          </div>
          <div  className='regalos-card-content regalo-card-sobre'>
            <p>
              Es la tradición de regalar dinero en un 
            </p>
            <p>sobre a los novios.</p>
            <p>
              El sobre, los novios te lo proporcionan el día de la boda para tu mayor comodidad.
            </p>
          </div>
        </div>

        <div id='barraContent' className={`regalos-card sombra ${barraContentVisible && 'animate__animated animate__zoomIn'}`}>
          <h3 className='regalos-card-title'>Mesa de Regalos</h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-gift" width="60" height="60" viewBox="0 0 24 24" strokeWidth="0.5" stroke="#bea77b" fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
              <path d="M3 8m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" />
              <path d="M12 8l0 13" />
              <path d="M19 12v7a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-7" />
              <path d="M7.5 8a2.5 2.5 0 0 1 0 -5a4.8 8 0 0 1 4.5 5a4.8 8 0 0 1 4.5 -5a2.5 2.5 0 0 1 0 5" />
            </svg>
          </div>
          <div className='regalos-card-content'>
            <p>Liverpool</p>
            <p className='regalos-card-item'>Numero de evento:<span>51407974</span></p>
          </div>
          <div className='regalos-card-button'>
            <button className='regalos-card-button'><a target='_blank' href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51407974">Ir a Mesa de Regalos</a></button>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Regalos