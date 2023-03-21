import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Searchbar.scss";

export default function Searchbar() {


    const handleSearch = () => {
        console.log('Search')
    }


  return (
    <div className="search-box">
      <input
        type="text"
        name="search"
        className=""
        placeholder="Cerca Prodotto"
      />
      <div onClick={handleSearch}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size="lg" />
      </div>
    </div>
  );
}
