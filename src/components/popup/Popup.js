import React from "react";
import "./Popup.css";

export const Popup = ({ closePopup, restaurant, menu }) => {
    
  return (
    <div className="popup">
      <div className="popup_inner">
        <button className="Button" onClick={closePopup}>
          &times;
        </button>
        <h2>{restaurant.restaurant_name}</h2>
        <div className="restaurantInfo">
          <p> Address:</p>
          <p> {restaurant.address} </p>
          <p> Phone number:</p>
          <p> {restaurant.phone} </p>
        </div>
        <h2> Lunch Meny</h2>
        <div className="restaurantInfo">
            {menu &&
            menu.map((item, key) => {
                return (
                    <div>
                        <h3 key={key}> {item.Title} </h3>
                        <p key={key}> {item.Ingredients} </p>
                        <h3 key={key}> {item.Price} </h3>
                    </div>
                );
            })}
          </div>
      </div>
    </div>
  );
};
