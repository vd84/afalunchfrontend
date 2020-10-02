import React from "react";
import "./Card.css";

export const Card = ({togglePopup, restaurnat }) => {
  return (
    <div
      className="Card"
      onClick={() => {
        togglePopup(restaurnat.restaurant_id);
      }}
    >
      <h2> {restaurnat.restaurant_name} </h2>
    </div>
  );
};
