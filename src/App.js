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
    setRestaurant(restaurants.find(res=> res.Restaurant_Id === restaurantId));

    setMenu(menus.filter(menu => (menu.IdOfRestaurant === restaurantId)));

    console.log(restaurant)

    setShowPopup(!showPopup);
  };

    const fetchDishes = async () => {


     try {
      const resp =  await fetch("http://localhost:5000/api/allfood/", {
        method: "GET"
      });
      const data =  await resp.json();
      console.log(data);
      setMenus(data);
    } catch (err) {
      console.error(err);
    } 


  }
  const fetchRestaurants = async () => {

    try {
     const resp =  await fetch("http://localhost:5000/api/allRestaurants/", {
       method: "GET"
     });
     const data =  await resp.json();
     console.log(data);
     setRestaurants(data);
   } catch (err) {
     console.error(err);
   } 
 }

  useEffect(() => {
    fetchRestaurants();
    fetchDishes();
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
