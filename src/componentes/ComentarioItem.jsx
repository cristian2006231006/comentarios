import {React,useState} from 'react'

const ComentarioItem = ({comentario,calificacion}) => {
    //manejo de estados de un comentario

    const[ Comment , setComentario] = useState(comentario)
    const[ Rating , setRating]= useState(calificacion)

    const cambiarRating = () => {
        setRating((prev)=> prev+1)
    }
  return (
    <div className='card'>ComentarioItem
    <div className='num-display'>{calificacion}</div>
    <div className='text-display'>{Comment}</div>
    <button onClick={cambiarRating}>
        cambiar calificacion</button>
    </div>
  )
}

export default ComentarioItem