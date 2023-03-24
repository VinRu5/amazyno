import { useEffect, useState } from "react";
import { Cart } from "../../models/Cart";
import { cartService } from "../../services/cartService";
import { useAppContext } from "../../store/AppStore";
import "./CartPage.scss";
import CartCard from "./CartCard";

export default function CartPage() {
  const [load, setLoad] = useState<boolean>(false);
  const [cart, setCart] = useState<Cart>();

  const { loginUser } = useAppContext();

  useEffect(() => {
    async function getUserCart(userId: number) {
      setLoad(true);

      try {
        const cart = await cartService.getUserCart(userId);

        if (cart) {
          setCart(cart);
          console.table(cart.products)
        }
      } catch (e) {
        console.log(e);
      } finally {
        setLoad(false);
      }
    }

    if(loginUser) {
        if(loginUser.id) {

            getUserCart(loginUser.id);
        }
    }

  }, []);

  return (
    <div className="cart-container row">
      <div className="col-8">
        <section className="product-delivery">
          {!cart ? (
            <div>Carrello vuoto</div>
          ) : (
            cart.products.map((product) => <CartCard key={product.id} product={product} />)
          )}
        </section>
      </div>
      <div className="col-4">
        <section className="payment">Payment</section>
      </div>
    </div>
  );
}
