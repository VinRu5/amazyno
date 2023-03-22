import { useEffect, useState } from "react";
import { Product } from "../../models/Product";
import { productService } from "../../services/productService";
import CardProduct from "./CardProduct";
import Loader from "./Loader";
import "./ProductsList.scss";

export default function ProductsList() {
  const [loading, setLoading] = useState<boolean>(false);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadAllProducts() {
      setLoading(true);
      try {
        const allProducts = await productService.getAll();
        setProducts(allProducts);
      } catch (e) {
        console.log(e);
      } finally {
        setLoading(false);
      }
    }
    loadAllProducts();
  }, []);

  return (
    <>
      {loading && <Loader />}

      {!loading && (
        <div className="products container">
          <div className="row">
            {products.map((product) => (
              <CardProduct key={product.id} product={product} />
            ))}
          </div>
        </div>
      )}
    </>
  );
}
