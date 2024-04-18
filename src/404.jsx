import {Link} from 'react-router-dom'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default function NotFound () {
  return (
    <div className="content min-vh-100 text-center">
    <h1 className="display-4 mt-5"><i className="fas fa-exclamation-triangle mr-2"></i>404 - Página no encontrada</h1>
      <p className="lead">Lo sentimos, la página que estás buscando no existe.</p>
      <Link to="/" className="btn btn-primary">Volver a la página principal</Link>

  </div>
  )
}
