import { Product } from "../../models/Product";
import "./CardProduct.scss";
import Rating from "./Rating";

interface CardProductProps {
  product: Product;
}

export default function CardProduct({ product }: CardProductProps) {
  const descriptionEllipses = () => {
    return `${product.description.substring(0, 16)}...`;
  };

  return (
    <div className="card-product col-3">
      <div className="img-product">
        <img src={product.thumbnail} alt={product.title} />
      </div>
      <div className="info-product row">
        <div className="col-8">
          <div className="all-info">
            <div className="title">{product.title}</div>
            <div className="description">{descriptionEllipses()}</div>
            <div className="rating">
              <Rating rating={product.rating} id={product.id ?? 0} />
            </div>
            <button className="amazyno-outline-button">
              Aggiungi al Carrello
            </button>
          </div>
        </div>
        <div className="price col-4">{product.price}$</div>
      </div>
    </div>
  );
}
