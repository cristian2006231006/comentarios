import React from 'react'

const header = ({autor,titulo,ficha,centro}) => {
    const headerStyles = {
        backgroundColor:`rgba(0,0,0,0)`,
        color:`rgba(255, 215, 0)`
    }
    const autorStyles = {
        backgroundColor:`rgba(0,0,0,0)`,
        color:`rgba(250, 128, 114)`
    }
    const fichaStyles = {
        backgroundColor:`rgba(0,0,0,0)`,
        color:`rgba(0, 255, 0)`
    }
    const centroStyles = {
        backgroundColor:`rgba(0,0,0,0)`,
        color:`rgba(0, 0, 205)`
    }
  return (
    <header style={headerStyles}>
    <div className='container'>
        {titulo}
        <p style={autorStyles}>Autor:{autor}</p>
        <p style={fichaStyles}>Ficha:{ficha}</p>
        <p style={centroStyles}>Centro:{centro}</p>
    </div>
    </header>
  )
}

export default header