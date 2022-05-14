import { Link } from "react-router-dom"

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                
                <Link className="navbar-brand" to="/">Navbar</Link>
                
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="#">Link</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link disabled" to="/">Disabled</Link>
                        </li>
                    </ul>

                    <div className="dropdown">
                        <button className="btn btn-light dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            User
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
                            <li><Link className="dropdown-item" to="users">Dashboard</Link></li>
                            <li><Link className="dropdown-item" to="users/login">Login</Link></li>
                            <li><Link className="dropdown-item" to="users/logout">Logout</Link></li>
                            <li><Link className="dropdown-item" to="users/signup">Sign Up</Link></li>
                        </ul>
                    </div>
                    
                </div>
            </div>
        </nav>
    )
}