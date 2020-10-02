import React from "react";
import "./Card.css";

export const Card = ({togglePopup, restaurnat }) => {
  return (
    <div
      className="Card"
      onClick={() => {
        togglePopup(restaurnat.Restaurant_Id);
      }}
    >
      <h2> {restaurnat.Restaurant_Name} </h2>
    </div>
  );
};
