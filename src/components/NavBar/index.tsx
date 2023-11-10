import {
    Route,
    BrowserRouter as Router,
    Routes
} from 'react-router-dom';
import { DescriptiveForm } from '../../pages/DescriptiveForm';
import { NumericForm } from '../../pages/NumericForm';
import { MockPage } from '../../pages/MockPage';
import { MockDescriptivePage } from '../../pages/MockDescriptivePage';
import { MockHistogram } from '../../pages/MockHistogram';

export const NavBar = () => {
    return (
        <div className="container">
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="collapse navbar-collapse">
                        <ul className='navbar-nav'>
                            <li className="nav-item active">
                                <a className="nav-link" href="/estatistica-app">
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
                            <li className="nav-item">
                                <a className="nav-link" href="/estatistica-app/histogram-mock">
                                    Histogram Mock
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>

                <Routes>
                    <Route path="/estatistica-app" element={<DescriptiveForm />} />
                    <Route path="/estatistica-app/numeric-form" element={<NumericForm />} />
                    <Route path="/estatistica-app/numeric-mock" element={<MockPage />} />
                    <Route path="/estatistica-app/descriptive-mock" element={<MockDescriptivePage />} />
                    <Route path='estatistica-app/histogram-mock' element={<MockHistogram />} />
                </Routes>
            </Router>
        </div>

    );
};
;

