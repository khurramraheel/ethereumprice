import React, { Component } from "react";
import "./css/demo.css";
// import '../favicon.ico';
import "./css/style.css";
import "./css/animate-custom.css";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from '../../Redux/Actions/authActions'
import { clearErrors } from '../../Redux/Actions/errorActions'
import { Redirect } from 'react-router-dom'


class Login extends Component {
  state = {
    email: "",
    password: "",
    msg:null
   
  };

  static propTypes = {
    isAuthenticated: PropTypes.bool,
    error: PropTypes.object.isRequired,
    login: PropTypes.func.isRequired,
    clearErrors: PropTypes.func.isRequired
  };

  componentDidUpdate(prevProps) {
    const { error } = this.props;

    if (error !== prevProps.error) {
      //check for register error
      if (error.id === "LOGIN_FAIL") {
        this.setState({ msg: error.msg.msg });
      } else {
        this.setState({ msg: null });
      }
    }
  }

  handleChange = (evt) => {
      this.setState({
          [evt.target.name]: evt.target.value
      })
  }

  handleLogin = e => {
    e.preventDefault();
    const token = localStorage.getItem('token')
    const { email, password } = this.state;

    const user = {
      email,
      password
    }
    this.props.login(user);
    
    if(token) {
      return this.props.history.push('/')
    }
    
  };
  render() {
    console.log(this.state);
    return (
      <div className="container">
         { this.state.msg ? <div class="alert alert-danger" role="alert">
         {this.state.msg}
        </div>: null}
        <header>
          <h1>Login Form</h1>
        </header>
        <section>
          <div id="container_demo">
            <a className="hiddenanchor" id="toregister" />
            <a className="hiddenanchor" id="tologin" />
            <div id="wrapper">
              <div id="login" className="animate form">
                <form onSubmit = { this.handleLogin } autoComplete="on">
                  <h1>Log in</h1>
                  <p>
                    <label htmlFor="email" className="uname" data-icon="u">
                      {" "}
                      Your email {" "}
                    </label>
                    <input
                      id="email"
                      name="email"
                      required="required"
                      type="email"
                      placeholder=" mymail@mail.com"
                      onChange = { this.handleChange }
                    />
                  </p>
                  <p>
                    <label
                      htmlFor="password"
                      className="youpasswd"
                      data-icon="p"
                    >
                      {" "}
                      Your password{" "}
                    </label>
                    <input
                      id="password"
                      name="password"
                      required="required"
                      type="password"
                      placeholder="eg. X8df!90EO"
                      onChange = { this.handleChange }
                    />
                  </p>
                  <p className="keeplogin">
                    <input
                      type="checkbox"
                      name="loginkeeping"
                      id="loginkeeping"
                      value="loginkeeping"
                    />
                    <label htmlFor="loginkeeping">Keep me logged in</label>
                  </p>
                  <p className="login button">
                    <input type="submit" value="Login" />
                  </p>
                  <p className="change_link">
                    Not a member yet ?
                    <a href="/register" className="to_register">
                      Join us
                    </a>
                  </p>
                </form>
              </div>

            
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error
});
export default connect(mapStateToProps, { login, clearErrors })(Login);
