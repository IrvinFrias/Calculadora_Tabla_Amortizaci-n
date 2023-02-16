import './Nav.css';

const Nav = ({renderSeccion, seccion}) => {
    return(
        <nav className="navbar m-0 p-0">
            <div className="bg-red container-fluid">
                <div className="container py-2">
                    <a className="navbar-brand fs-1 fw-bold text-white ">Calculadora Financiera</a>
                </div>
            </div>
            <div className="bg-custom container-fluid">
                <div className="container">
                    <ul className="d-flex nav-list">
                        <li className={seccion.interesSimple ? "nav-link active": "nav-link"} onClick={renderSeccion}>Interés simple</li>
                        <li className={seccion.interesComplejo? "nav-link active": "nav-link"}onClick={renderSeccion}>Interés Complejo</li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default Nav;