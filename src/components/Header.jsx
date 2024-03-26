import { useState, useEffect } from "react"
import TypeWriter from "./TypeWriter"

const Header = () => {
  const [firstComplete,setFirstComplete] = useState(false);
  const text = 'Quienes estan destinados a ser'
  const text2 = `Siempre acaban siendo.`

  //este useEffect es para que se ejecute el segundo TypeWriter
  useEffect(()=>{
    const timer = setTimeout(()=>{
      setFirstComplete(true);
    },text.length * 100)
    return()=>clearTimeout(timer)
  },[])
  
  return (

    
    <>
      <header className="header centrar">
          <div className="header-image">
            <img loading="lazy" className='sombra animate__animated animate__zoomIn' src='/img/cover.webp' alt="img-cover" />
          </div>
      </header>
      
        <div className="frase">
          <TypeWriter text={text} speed={1}/>
          {firstComplete && <TypeWriter text={text2} speed={1} />}
          
        </div>
      
      {/* <div  className='header-img centrar animate__animated animate__fadeInUp'>
      </div> */}
    </>
  )
}

export default Header