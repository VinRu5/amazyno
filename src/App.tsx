
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import Layout from "./pages/Layout";


function App() {

  return (
    <div className="container-fluid app-main">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
