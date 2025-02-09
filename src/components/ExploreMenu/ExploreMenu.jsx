/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  // New state to track the clicked image
  const [activeImage, setActiveImage] = useState(null);

  const handleImageClick = (itemName) => {
    setActiveImage((prev) => (prev === itemName ? null : itemName)); // Toggle active image
    setCategory((prev) => (prev === itemName ? "All" : itemName)); // Update category
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="explore-menu-list-item"
            onClick={() => handleImageClick(item.menu_name)}
          >
            <img
              src={item.menu_image}
              alt={item.menu_name}
              style={{
                border:
                  activeImage === item.menu_name ? "4px solid tomato" : "none",
                padding: activeImage === item.menu_name ? "2px" : "0",
              }}
            />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
