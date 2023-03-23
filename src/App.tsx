
import {  useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { LoginUser } from "./models/LoginUser";
import HomePage from "./pages/homepage/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/loginpage/LoginPage";
import { AppContext } from "./store/AppStore";




function App() {
  const [loginUser, setLoginUser] = useState<LoginUser | undefined>(undefined);

  return (
    <AppContext.Provider
      value={{
        loginUser,
        setLoginUser,
      }}
    >
      <div className="app-main">
        <Router>
          <Routes>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />}></Route>
            </Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
