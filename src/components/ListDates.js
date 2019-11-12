import React from 'react'
import Date from './Date'

const ListDates = ({ citas, deleteDate }) => {

    //Imprimir mensaje en funcion de si hay citas o no
    //Con esto podemos revisar si este arreglo de objetos tiene algo
    const message = Object.keys(citas).length === 0 ? 'No hay citas' : 'Aqui puedes administrar tus citas'

  return (
    <div className="card mt-2 py-5">
      <div className="card-body">
  <h2 className="card-title text-center">{message}</h2>

        <div className="lista-citas">
          {citas.map(cita => (
            <Date 
            key={cita.id} 
            cita={cita} 
            deleteDate={deleteDate} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default ListDates
