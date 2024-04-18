import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleLinkClick = () => {
    setIsNavOpen(false);
  };

  return (
    <div className='col-md-9'>
      <hr className='line' />
      <nav className='navbar text-white '>
        <div className='container-fluid'>
          <div className='d-flex' role='search'>
            <Link to='/' className='link-light text-decoration-none' onClick={handleLinkClick} >
              <h1>juliomartinezweb.es</h1>
            </Link>
          </div>
        </div>
      </nav>

      <nav className='navbar navbar-expand-lg navbar-light'>
        <div className='container-fluid'>
          <button
            className='navbar-toggler bg-white'
            type='button'
            onClick={() => setIsNavOpen(!isNavOpen)}
            aria-expanded={isNavOpen ? 'true' : 'false'}
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`} id='navbarNav'>
            <ul className='navbar-nav mx-auto'>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  aria-current='page'
                  to='/blog'
                  onClick={handleLinkClick}
                >
                  Blog
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  to='/about'
                  onClick={handleLinkClick}
                >
                  Sobre mi
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  to='/proyectos'
                  onClick={handleLinkClick}
                >
                  Proyectos
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  className='nav-link text-white'
                  tabIndex='-1'
                  to='/cursos'
                  onClick={handleLinkClick}
                >
                  Cursos
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
