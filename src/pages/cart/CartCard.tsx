import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Product } from "../../models/Product";
import "./CartCard.scss";


interface CartCardProps {
    product: Product
}

export default function CartCard({ product }: CartCardProps) {
  const [quantity, setQuantity] = useState<number>(0);

  return (
    <div className="row align-items-center cart-card">
      <div className="col-3">
        <div className="img-cart">
          <img
            src="https://images.pexels.com/photos/267482/pexels-photo-267482.jpeg?auto=compress&cs=tinysrgb&w=400"
            alt=""
          />
        </div>
      </div>
      <div className="col-6">
        <div className="product-name">Nome del prodotto</div>
        <div className="quantity">
          <button className="amazyno-outline-button">+</button>
          <input
            type="number"
            name="quantity"
            className="quantity-input"
            value={quantity}
            onChange={(event) => setQuantity(parseInt(event.target.value))}
          />
          <button className="amazyno-outline-button">-</button>
        </div>
      </div>
      <div className="col-3">
        <div className="price-section">
          <div className="price">45.00 $</div>
          <FontAwesomeIcon icon={faTrash} className="trash"/>
        </div>
      </div>
    </div>
  );
}
