import { useState } from "react";
import "./QuantityBar.scss";

interface QuantityBarProps {
  emitQuantity: (quantity: number) => void;
}

export default function QuantityBar() {
  const [count, setCount] = useState<number>(1);

  const removeQuantity = () => {
    if (count > 1) {
      const newCount = count - 1;
      setCount(newCount);
    }
  };

  const addQuantity = () => {
    const newCount = count + 1;
    setCount(newCount);
  };

  return (
    <div className="quantity-bar">
      <div onClick={removeQuantity}>-</div>
      <div className="quantity">{count}</div>
      <div onClick={addQuantity}>+</div>
    </div>
  );
}
