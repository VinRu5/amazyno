
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import './App.scss';
import HomePage from "./pages/homepage/HomePage";
import Layout from "./pages/Layout";


function App() {

  return (
    <div className="container-fluid app-main">
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>} ></Route>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
