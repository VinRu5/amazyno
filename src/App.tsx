
import {  useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import { LoginUser } from "./models/LoginUser";
import CartPage from "./pages/cart/CartPage";
import HomePage from "./pages/homepage/HomePage";
import Layout from "./pages/Layout";
import LoginPage from "./pages/loginpage/LoginPage";
import ProductPage from "./pages/product/ProductPage";
import { AppContext } from "./store/AppStore";
import storageApp from "./store/StorageApp";




function App() {
  const [loginUser, setLoginUser] = useState<LoginUser | undefined>(undefined);


  useEffect(()=> {
    const authUser = storageApp.getUser();

    if (authUser) {
      setLoginUser(authUser);
    }
   
  },[])

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
              <Route index element={<HomePage />}/>
              <Route path="cart" element={<CartPage />}/>
              <Route path="products/:id" element={<ProductPage />}/>
            </Route>
          </Routes>
        </Router>
      </div>
    </AppContext.Provider>
  );
}

export default App;
