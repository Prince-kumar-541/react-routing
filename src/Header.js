import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link className="nav-link active opacity" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active opacity" to="/about">About</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active opacity" to="/services">Services</Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link active opacity" to="/contact">Contact</Link>
                    </li>

                  </ul>
                  {/* <form className="d-flex" role="search">
                    <input className="form-control me-2 search1" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-light bg-success search1" type="submit">Search</button>
                  </form> */}
                </div>
              </div>
            </nav>
        </div>
    )
}
export default Header;