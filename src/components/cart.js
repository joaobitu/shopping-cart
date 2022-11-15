import React from "react";
import "../style/cart.css";

export const Cart = (props) => {
  const cartList = props.cartSelection.map((card, index) => {
    return (
      <div className="cart-item" key={index}>
        <h4>{card.name}</h4>
        <h4 className="price">{(card.price * card.amount).toFixed(2)} USD</h4>
        <input
          type="number"
          name="number"
          min="0"
          max="100"
          value={card.amount}
          id={index}
          onChange={(e) => props.changeCartAmount(e)}
        />
        <button onClick={() => props.deleteSelectedCard(index)}>Delete</button>
      </div>
    );
  });
  return (
    <div>
      <h1>Cart:</h1>

      <div id="cart-area">
        <div id="cart-choices">{cartList}</div>
        <div id="cart-pricing">Total: {props.totalPrice.toFixed(2)} USD</div>
      </div>
    </div>
  );
};
