export function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="/estatistica-app/descriptive-form">
                            Formulário descritivo
                        </a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/estatistica-app/numeric-form">
                            Formulário numérico
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/estatistica-app/numeric-mock">
                            Numeric Mock
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/estatistica-app/descriptive-mock">
                            Descriptive Mock
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
