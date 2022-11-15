import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Nav } from "./components/navigation";
import { Home } from "./components/home";
import { About } from "./components/about";
import { Shop } from "./components/shop";
import { Cart } from "./components/cart";

const App = () => {
  const [cartItemsAmount, setCartItemsAmount] = useState(0);
  const [cartSelection, setCartSelection] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addCardToSelection = (name, url, price, index, amount) => {
    setCartItemsAmount(cartItemsAmount + 1);
    setCartSelection(
      cartSelection.concat({
        name: name,
        url: url,
        price: price,
        index: index,
        amount: amount,
      })
    );
  };

  useEffect(() => {
    displayTotalPrice();
  });

  const displayTotalPrice = () => {
    let total = 0;
    cartSelection.forEach((element) => {
      total += element.price * element.amount;
    });
    setTotalPrice(total);
  };
  const changeCartAmount = (e) => {
    const changedSelection = [...cartSelection];
    changedSelection[e.target.id].amount = e.target.value;
    setCartSelection(changedSelection);
  };
  const removeCardfromSelection = (index) => {
    setCartItemsAmount(cartItemsAmount - 1);
    const newList = cartSelection
      .slice(0, index)
      .concat(cartSelection.slice(index + 1, cartSelection.length));

    setCartSelection(newList);
  };

  return (
    <BrowserRouter>
      <div id="main-container">
        <Nav cartCounter={cartItemsAmount} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/shop"
            element={<Shop addToCart={addCardToSelection} />}
          />
          <Route
            path="/cart"
            element={
              <Cart
                cartSelection={cartSelection}
                deleteSelectedCard={removeCardfromSelection}
                changeCartAmount={changeCartAmount}
                totalPrice={totalPrice}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;

/*
Alright Lets think about making this app! again this isnt too complicated, or at least it shouldnt be!

we have 4 pages that ought to be selected wich you're on from the Nav element.
each page should link to the specific routes location
the navBar should be fixed independetly from what route we are currently on.

The Home and About pages just need some boilerplate content


The Shop area needs to display some item options
each item has its specific price
each item has an "add to cart" option
this add to cart option should add up the chosen item into the cartList

the shop section needs to display all the chosen items, 
it needs to have a total, wich ads up the selected item, 
you should also be able to delete items from the cart. 

*/
