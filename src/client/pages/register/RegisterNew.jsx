import React, { Component, Fragment } from 'react';
import Header from '../../components/header/Header';
import RegisterForm from '../../components/register/RegisterForm';
import Register from '../../components/register/Register';

class RegisterNew extends Component {
  state = {
    error: null,
    loading: false,
    form: {
      nombre: '',
      apellido: '',
      correo: '',
      telefono: ''
    }
  };
  handleChange = e => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value
      }
    });
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ loading: true });
    this.post();
  };
  post = async () => {
    const response = await fetch(this.props.api, {
      method: 'POST',
      body: JSON.stringify(this.state.form),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (response.status === 200) {
      this.setState({ loading: false });
      this.props.history.push('/');
    } else {
      this.setState({ loading: false, error: response.status });
    }
  };
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Register
                nombre={this.state.form.nombre || 'NOMBRE'}
                apellido={this.state.form.apellido || 'APELLIDO'}
                correo={this.state.form.correo || 'CORREO ELECTRÓNICO'}
                telefono={this.state.form.telefono || 'TELÉFONO'}
              />
            </div>
            <div className="col-6">
              <h1>Nuevo Estudiante</h1>
              <RegisterForm
                onChange={this.handleChange}
                onSubmit={this.handleSubmit}
                formValues={this.state.form}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default RegisterNew;
