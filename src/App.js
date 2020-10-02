import React, { useEffect, useState } from "react";
import { CardList } from "./components/cardList/CardList";
import { Popup } from "./components/popup/Popup";

import './App.css';

function App() {

  const [restaurants, setRestaurants] = useState([]);
  const [menus, setMenus] = useState([]);
  const [restaurant, setRestaurant] = useState({});
  const [menu, setMenu] = useState([]);
  const [showPopup, setShowPopup] = useState(false);



  const fetchRestaurantById = async restaurantId => {
    setRestaurant(restaurants.find(res=> res.restaurant_id === restaurantId));

    setMenu(menus.filter(menu => (menu.IdOfRestaurant === restaurantId)));

    setShowPopup(!showPopup);
  };

  const fetchRestaurants = async () => {
    const food =[
      {
        "Id": 2,
        "Title": "Tempura friterad torskfilé",
        "IdOfRestaurant": 1,
        "Ingredients": "Koktpotatis & dansk remouladsås",
        "Price": 125
      },
      {
        "Id": 3,
        "Title": "Caesarsallad med haloumi & avokado",
        "IdOfRestaurant": 1,
        "Ingredients": "No ingredients found!",
        "Price": 125
      },
      {
        "Id": 3,
        "Title": "Färsk pasta linguine Rökt bacon spenat vitlök vittvin & grädde",
        "IdOfRestaurant": 2,
        "Ingredients": "No ingredients found!",
        "Price": 125
      },
      {
        "Id": 3,
        "Title": "Valfri Napolitansk Pizza",
        "IdOfRestaurant": 2,
        "Ingredients": "No ingredients found!",
        "Price": 125
      },
      {
        "Id": 3,
        "Title": "Diwines valfri högrev burgare",
        "IdOfRestaurant": 1,
        "Ingredients": "Med klassisk tillbehör.",
        "Price": 125
      },
    ]
    setMenus(food);
    const restaurnats = [
      {
        "restaurant_id": 1,
        "restaurant_name": "Diwine",
        "phone": "098378103",
        "address": "Stockholm",
      },
      {
        "restaurant_id": 2,
        "restaurant_name": "Ilmolo",
        "phone": "078378103",
        "address": "Stockholm",
      }
    ];
    setRestaurants(restaurnats);
 /*    try {
      const resp = await fetch("http://localhost:5000/api/allfood/", {
        method: "GET"
      });
      const data = await resp.json();
      console.log(data);
      setRestaurants(data);
    } catch (err) {
      console.error(err);
    } */
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <div className="App">
        <CardList
        restaurants={restaurants}
        togglePopup={fetchRestaurantById}
      />
       {showPopup && (
        <Popup
          closePopup={() => setShowPopup(!showPopup)}
          restaurant={restaurant}
          menu ={menu}
        />
      )}
    </div>
  );
}

export default App;
