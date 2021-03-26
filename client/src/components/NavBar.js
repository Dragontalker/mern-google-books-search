import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Google Book Searchs</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" style={{ textDecoration: 'none'}}>
                                <h6 style={{ paddingLeft: 13 }}>Search</h6>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/saved" style={{ textDecoration: 'none'}}>
                                <h6 style={{ paddingLeft: 13 }}>Saved</h6>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
};

export default NavBar;