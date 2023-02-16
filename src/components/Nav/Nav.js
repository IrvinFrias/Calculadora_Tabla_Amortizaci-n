import './Nav.css';

const Nav = ({renderSeccion}) => {
    return(
        <nav className="navbar m-0 p-0">
            <div className="bg-red container-fluid">
                <div className="container py-2">
                    <a className="navbar-brand fs-1 fw-bold text-white ">Calculadora Financiera</a>
                </div>
            </div>

            <div className="container ">
                <ul className="d-flex nav-list">
                    <li className="nav-link active" onClick={renderSeccion}>Interés simple</li>
                    <li className="nav-link" onClick={renderSeccion}>Interés Complejo</li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;