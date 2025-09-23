import {Redirect, Route} from 'react-router-dom'
import Cookies from 'js-cookie'

const ProtectedRoute = props => {
  const token = Cookies.get('jwt_token')
  return token !== undefined ? <Route {...props} /> : <Redirect to="/login" />
}

export default ProtectedRoute
