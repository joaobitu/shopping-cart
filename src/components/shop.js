import React, { useState, useEffect } from "react";
import "../style/shop.css";

export const Shop = (props) => {
  const [cardList, setCardList] = useState([]);
  const fetchItems = async () => {
    const cards = await fetch(
      "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=Blue-Eyes"
    );
    const cardsResult = await cards.json();
    console.log(cardsResult.data);
    setCardList(cardsResult.data);
  };
  useEffect(() => {
    fetchItems();
  }, []);

  const properDisplay = cardList.map((card, index) => {
    return (
      <div className="card" key={index}>
        <h4>{card.name}</h4>
        <img src={card.card_images[0].image_url} alt={card.name} />
        <h3>
          Price: {(card.card_prices[0].cardmarket_price * 10).toFixed(2)} USD
        </h3>
        <button
          onClick={() =>
            props.addToCart(
              card.name,
              card.card_images[0].image_url_small,
              card.card_prices[0].cardmarket_price * 10,
              index,
              1
            )
          }
        >
          add To Cart
        </button>
      </div>
    );
  });

  return (
    <div>
      <h1>Shop</h1>
      <div id="card-container">{properDisplay}</div>
    </div>
  );
};
