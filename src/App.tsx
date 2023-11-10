/*import "./App.css";
import { NavBar } from "./components/NavBar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
    </div>
  );
}

export default App;*/
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from 'react-router-dom';
import { NumericForm } from './pages/NumericForm';
import { DescriptiveForm } from './pages/DescriptiveForm';
const App = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/estatistica-app/numeric-form">Numeric Form</Link></li>
          <li><Link to="/estatistica-app">Descriptive Form</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/estatistica-app/numeric-form" element={<NumericForm />} />
        <Route path="/estatistica-app" element={<DescriptiveForm />} />
      </Routes>
    </Router>
  );
};

export default App;