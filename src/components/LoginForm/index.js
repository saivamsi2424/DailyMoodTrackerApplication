import {Component} from 'react'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showErrorMsg: false,
    errorMsg: '',
    showPassword: false,
  }

  updateUsername = event => {
    this.setState({username: event.target.value})
  }

  renderUsernameField = () => {
    const {username} = this.state
    return (
      <div className="label-input-container">
        <label className="label" htmlFor="username">
          USERNAME
        </label>
        <input
          className="input-field"
          type="text"
          value={username}
          id="username"
          placeholder="Username"
          onChange={this.updateUsername}
        />
      </div>
    )
  }

  updatePassword = event => {
    this.setState({password: event.target.value})
  }

  renderPasswordField = () => {
    const {password, showPassword} = this.state
    const typeValue = showPassword ? 'text' : 'password'
    return (
      <div className="label-input-container">
        <label className="label" htmlFor="password">
          PASSWORD
        </label>
        <input
          className="input-field"
          type={typeValue}
          value={password}
          id="password"
          placeholder="Password"
          onChange={this.updatePassword}
        />
      </div>
    )
  }

  changeTheShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  renderShowPassword = () => (
    <div className="show-password-container">
      <input
        type="checkbox"
        id="showpassword"
        onChange={this.changeTheShowPassword}
      />
      <label className="showpassword-label" htmlFor="showpassword">
        Show Password
      </label>
    </div>
  )

  validateUserFailed = errorMessageFromRequest => {
    this.setState({showErrorMsg: true, errorMsg: errorMessageFromRequest})
  }

  validateUserSuccess = jwtToken => {
    console.log('user ok')
    const {history} = this.props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  validateUser = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {
      username,
      password,
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.validateUserSuccess(data.jwt_token)
    } else {
      this.validateUserFailed(data.error_msg)
    }
  }

  render() {
    const {errorMsg, showErrorMsg} = this.state
    const errorMsgValue = showErrorMsg ? errorMsg : ''
    return (
      <div className="main-container">
        <div className="card-container">
          <h1 className="heading-login">Daily Mood Tracker</h1>
          <form onSubmit={this.validateUser}>
            {this.renderUsernameField()}
            {this.renderPasswordField()}
            {this.renderShowPassword()}
            <button className="login-button" type="submit">
              Login
            </button>
            <p className="error-message">{errorMsgValue}</p>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(LoginForm)
