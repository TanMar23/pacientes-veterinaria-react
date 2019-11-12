import React, { Component } from 'react'
import uuid from 'uuid'

const stateInicial = {
    cita: {
      //Aqui el valor tiene que ser el mismo que pusiste en el name de los inputs.
      mascota: '',
      humano: '',
      fecha: '',
      hora: '',
      sintomas: ''
    },
    error: false
  }

export default class NewDate extends Component {
  state = { ...stateInicial }

  //Aqui se crean los metodos que usare para manejar la informacion escrita por el usuario

  //Cuando el usuario escribe en los inputs
  handleChange = e => {
    //Colocar lo que el usuario escribe en el state
    this.setState({
      cita: {
        ...this.state.cita,
        //Destructuring
        [e.target.name]: e.target.value
      }
    })
  }


  //Cuando el usuario envia el formulario
  handleSubmit = e => {
    //Para que no recargue la pagina
    e.preventDefault()

    //Extraer valores del state
    const { mascota, humano, fecha, hora, sintomas } = this.state.cita

    //Validar que los campos esten llenos
    if (mascota === '' || humano === '' || fecha === '' || hora === '' || sintomas === '') {
      this.setState({
        error: true
      })
      //Usamos return para detener la ejecucion
      return
    }

    //Generar objeto con los datos
    const newDate = {...this.state.cita}
    newDate.id = uuid()

    //Agregar la cita al state de App
    this.props.createNewDate(newDate)

    //Colocar en el state el stateInicial
    this.setState({
        ...stateInicial
    })
  }


  render() {

    //Extraer valor del state
    const { error } = this.state

    return (
      <div className="card mt-5 py-5">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">Llenar formulario para crear una nueva cita</h2>

        { error ? <div className="alert alert-danger mt-2 mb-5 text-center"> Todos los campos son obligatorios </div>: null }

          {/* Empieza form group */}
          <form onSubmit={this.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Mascota</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="mascota"
                  value={this.state.cita.mascota}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Nombre Humano</label>
              <div className="col-sm-8 col-lg-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Humano"
                  name="humano"
                  value={this.state.cita.humano}
                  onChange={this.handleChange}
                />
              </div>
            </div>

            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Fecha</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="date"
                  className="form-control"
                  name="fecha"
                  value={this.state.cita.fecha}
                  onChange={this.handleChange}
                />
              </div>

              <label className="col-sm-4 col-lg-2 col-form-label">Hora</label>
              <div className="col-sm-8 col-lg-4">
                <input
                  type="time"
                  className="form-control"
                  placeholder="Nombre Mascota"
                  name="hora"
                  value={this.state.cita.hora}
                  onChange={this.handleChange}
                />
              </div>
            </div>


            <div className="form-group row">
              <label className="col-sm-4 col-lg-2 col-form-label">Sintomas</label>
              <div className="col-sm-8 col-lg-10">
                <textarea
                  className="form-control"
                  name="sintomas"
                  placeholder="Describe los Sintomas"
                  value={this.state.cita.sintomas}
                  onChange={this.handleChange}></textarea>
              </div>
            </div>

            <input type="submit" className="py-3 mt-2 btn btn-success btn-block" value="Agregar Nueva Cita" />
          </form>
          {/* Acaba form group */}
        </div>
      </div>
    )
  }
}
