import React, { useState } from "react";
import {multilanguage} from 'redux-multilanguage'

const ShopCategorie = ({strings}) => {
  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-colors-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const categories = [
    {
      name: "jeux vidéos & consoles",
    },
    {
      name: "musiques",
    },
    {
      name: "livres",
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['category']}</h4>
      <div className="sidebar-widget-wrapper sidebar-categorie-list">
        <ul>
          <li>
            <button
              className="sidebar-colors-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
              {strings['all_categories']}
              </span>
            </button>
          </li>

          {categories.map((cat, i) => {
            return (
              <li key={i}>
                <button
                  className="sidebar-categorie-btn"
                  onClick={(e) => setActiveSort(e)}
                >
                  <span className="checkmark"></span>
                  <span className="category-title text-capitalize">
                    {cat.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default multilanguage(ShopCategorie);
