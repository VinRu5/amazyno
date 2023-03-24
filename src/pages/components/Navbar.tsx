import {
  faCaretDown,
  faCartShopping,
  faRightToBracket,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router-dom";
import Searchbar from "../../components/Searchbar";
import { useAppContext } from "../../store/AppStore";
import "./Navbar.scss";

export default function Navbar() {
  const { loginUser } = useAppContext();

  return (
    <nav className="custom-navbar">
      <div className="left-nav">
        <div className="logo-img">
          <img src="/assets/full-logo.png" alt="logo" />
        </div>
        <div className="categories">
          <span>Categorie</span>
          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <div className="search-bar">
        <Searchbar />
      </div>
      <div className="right-nav">
        {loginUser === undefined && (
          <NavLink to={"/login"} className="login">
            
              <span>Login</span>
              <FontAwesomeIcon icon={faRightToBracket} />
          
          </NavLink>
        )}

        {loginUser !== undefined && (
          <>
            <div className="account">
              <FontAwesomeIcon icon={faUser} />
              <span>Account</span>
            </div>
            <NavLink to={"/cart"} className="cart">
              <FontAwesomeIcon icon={faCartShopping} />
              <span>Carrello</span>
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}
