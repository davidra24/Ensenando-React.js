import React, { Component, Fragment } from 'react';
import logo from '../../images/logo.png';
import Register from '../../components/register/Register';
import RegisterForm from '../../components/register/RegisterForm';
import Loading from '../../components/loading/Loading';

class RegisterEdit extends Component {
  state = {
    loading: true,
    error: null,
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

  handleSubmit = async e => {
    e.preventDefault();
    this.put();
  };

  put = async () => {
    this.setState({ loading: true });
    const response = await fetch(
      `${this.props.api}/${this.props.match.params.id}`,
      {
        method: 'PUT',
        body: JSON.stringify(this.state.form),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    if (response.status === 200) {
      this.setState({ loading: false });
      this.props.history.push('/');
    } else {
      this.setState({ loading: false, error: response.status });
    }
  };

  componentDidMount() {
    this.get();
  }

  get = async () => {
    const response = await fetch(
      `${this.props.api}/${this.props.match.params.id}`
    );
    const data = await response.json();
    await console.log(data);

    if (response.status === 200) {
      this.setState({ loading: false, form: data });
    } else {
      this.setState({ loading: false, error: response.status });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="BadgeEdit__hero">
          <img
            className="BadgeEdit_hero-image img-fluid"
            src={logo}
            alt="Logo de la U"
          />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-6">
              <Register
                nombre={this.state.form.nombre || 'NOMBRE'}
                apellido={this.state.form.apellido || 'APELLIDO'}
                correo={this.state.form.correo || 'CORREO ELECTRÓNICO'}
                telefono={this.state.form.telefono || 'TELÉFONO'}
              />
              {this.state.loading && <Loading />}
            </div>
            <div className="col-6">
              <h1>Editar registro</h1>
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

export default RegisterEdit;
