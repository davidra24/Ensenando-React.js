import React, { Component } from 'react';
import Loading from '../../components/loading/Loading';
import RegisterDetails from '../../components/register/RegisterDetails';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class BadgeDetailsContainer extends Component {
  MySwal = withReactContent(Swal);
  state = {
    loading: false,
    data: [],
    error: null
  };
  componentDidMount() {
    this.get();
  }
  handleDelete = e => {
    this.MySwal.fire({
      title: '¿Está seguro?',
      text: '¿Está seguro que desea eliminar este registro?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#0068D9',
      confirmButtonText: 'Sí',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.value) {
        this.remove();
      }
    });
  };
  remove = async e => {
    this.setState({ loading: true, error: null });
    try {
      const response = await fetch(
        `${this.props.api}/${this.props.match.params.id}`
      );
      if (response.status === 200) {
        this.setState({ loading: false });
        this.props.history.push('/');
      }
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };
  get = async () => {
    const response = await fetch(
      `${this.props.api}/${this.props.match.params.id}`
    );
    const data = await response.json();
    if (response.status === 200) {
      this.setState({ loading: false, data: data });
    } else {
      this.setState({ loading: false, error: response.status });
    }
  };
  render() {
    if (this.state.loading) {
      return <Loading />;
    }
    if (this.state.error) {
      return <h3>{this.state.error}</h3>;
    }
    return (
      <RegisterDetails
        handleDelete={this.handleDelete}
        register={this.state.data}
      />
    );
  }
}

export default BadgeDetailsContainer;
