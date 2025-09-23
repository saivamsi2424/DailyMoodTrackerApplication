import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  const logoutClicked = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="main-container-navbar">
      <nav className="navbar-container">
        <div className="container-text">
          <h1 className="heading">Daily Mood Tracker</h1>
          <div className="routes-container">
            <Link to="/">
              <p className="home-route">Home</p>
            </Link>
            <Link to="/reports">
              <p className="reports-route">Reports</p>
            </Link>
            <button
              className="logout-button"
              type="button"
              onClick={logoutClicked}
            >
              Logout
            </button>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default withRouter(Header)
