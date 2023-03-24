import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Product } from "../../models/Product";
import { productService } from "../../services/productService";
import BoxDelivery from "../components/BoxDelivery";
import Divider from "../components/Divider";
import Loader from "../components/Loader";
import QuantityBar from "../components/QuantityBar";
import Rating from "../components/Rating";
import "./ProductPage.scss";

export default function ProductPage() {
  const [load, setLoad] = useState<boolean>(false);
  const [product, setProduct] = useState<Product>();

  const params = useParams();
  const productId = Number(params.id);

  useEffect(() => {
    async function getProduct(id: number) {
      setLoad(true);
      try {
        const product = await productService.getById(id);

        if (product) {
          setProduct(product);
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoad(false);
      }
    }

    getProduct(productId);
  }, []);

  return (
    <>
      {load ? (
        <Loader />
      ) : !product ? (
        <div>Nessn Prodotto</div>
      ) : (
        <div className="product-container">
          <div className="row">
            <div className="col-6">
              <div className="img-container">
                <img src={product?.images[0]} alt={product?.title} />
              </div>
              <div className="img-list">
                <div className="row">
                  {product.images.map((image, index) => (
                    <div key={index} className="col-3">
                      <div className="img-mini-container">
                        <img src={image} alt={`photo${index}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="info-product">
                <h1 className="title">{product?.title}</h1>
                <div className="description">{product?.description}</div>
                <Rating id={product!.id!} rating={product!.rating} />
                <Divider />
                <h2 className="title">{product?.price}$</h2>
                <Divider />
                <QuantityBar />
                <div className="spacer">
                  <button className="amazyno-button">
                    Aggiungi al carrello
                  </button>
                </div>
                <BoxDelivery />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
