import React from "react";
import "./CardList.css";
import { Card } from "../card/Card";

export const CardList = ({togglePopup, restaurants }) => (
  <div className="Card_List">
    {restaurants &&
      restaurants.map(restaurnat => (
        <Card
          key={restaurnat.id}
          restaurnat={restaurnat}
          togglePopup={togglePopup}
          restaurnatId={restaurnat.id}
        />
      ))}
  </div>
);
