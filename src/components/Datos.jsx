import DatosNombres from "./DatosNombres"
import DatosFecha from "./DatosFecha"

const Datos = ({datosVisible, datosFechaVisible}) => {
  return (
    <div className='datos-nombres'>
      <DatosNombres datosVisible={datosVisible} />
      <DatosFecha datosFechaVisible={datosFechaVisible}/>
    </div>
  )
}

export default Datos