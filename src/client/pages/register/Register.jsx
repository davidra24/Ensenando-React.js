import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import RegisterList from '../../components/register/RegisterList';
import Loading from '../../components/loading/Loading';

class Register extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    data: [],
    loading: true,
    error: null
  };
  componentDidMount() {
    this.get();
  }
  get = async () => {
    const response = await fetch(this.props.api);
    const data = await response.json();
    if (response.status === 200) {
      this.setState({ loading: false, data: data });
      this.props.history.push('/');
    } else {
      this.setState({ loading: false, error: response.status });
    }
  };
  render() {
    return (
      <Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img className="Badges__logo" src={logo} alt="" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/new" className="btn btn-primary">
              Nuevo registro
            </Link>
          </div>
          <br />
          <div className="Badges__list">
            <div className="Badges__container">
              {this.state.loading && <Loading />}
              <RegisterList registers={this.state.data} />
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Register;
