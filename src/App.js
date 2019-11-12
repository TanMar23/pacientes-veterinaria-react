import React, { Component } from 'react'
import './bootstrap.min.css'
import Header from './components/Header'
import NewDate from './components/NewDate'
import ListDates from './components/ListDates'


class App extends Component {
  state = {
    citas: []
  }


//Para guardar las citas en el local storage utilizare los ciclos de vida de react

//Cuando la aplicacion carga
componentDidMount(){
  const citasLS = localStorage.getItem('citas')
  if (citasLS){
    this.setState({
      citas: JSON.parse(citasLS)
    })
  }
}

//Cuando eliminamos o agregamos una nueva cita
componentDidUpdate(){
  localStorage.setItem('citas', JSON.stringify(this.state.citas))
}

  createNewDate = data => {
    //Copiar el state actual
    const citas = [...this.state.citas, data]

    //Agregar el nuevo state
    this.setState({
      citas
    })
  }


  //Para eliminar las citas del state
  deleteDate = id => {
    //Tomar una copia del state   
    const citasActuales = [...this.state.citas]

    //Utilizar filter, para sacar el elemento @id del arreglo
    const citas = citasActuales.filter(cita => cita.id !== id)

    //Actualizar el state
   this.setState({
     citas
   })
  }


  render() {
    return (
      <div className="container">
        <Header titulo="Administrador Pacientes Veterinaria" />
        <div className="row">
          <div className="col-md-10 mx-auto">
            <NewDate createNewDate={this.createNewDate}/>
          </div>

          <div className="mt-5 col-md-10 mx-auto">
            <ListDates
            citas={this.state.citas}
            deleteDate={this.deleteDate}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default App
