import Searchbar from '../../components/Searchbar';
import './Navbar.scss';
import logo from "/assets/full-logo.png";

export default function Navbar() {
    return (
      <nav className="custom-navbar">
        <div className="left-nav">
          <div className="logo-img">
            <img src="/assets/full-logo.png" alt="logo" />
          </div>
          <div className="categories">Categorie</div>
        </div>
        <div className="search-bar">
            <Searchbar/>
        </div>
        <div className="right-nav">
          <div className="account">Account</div>
          <div className="cart">Carrello</div>
        </div>
      </nav>
    );
}