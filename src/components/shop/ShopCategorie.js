import React, { useState } from "react";
import {multilanguage} from 'redux-multilanguage'

const ShopCategorie = ({strings,getSortParams}) => {

  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-categories-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    getSortParams("category",e.currentTarget.value);
  };

  const categories = [
    {
      name: "gaming",
    },
    {
      name: "fashion",
    },
    {
      name: "livres",
    }, 
    {
      name: "computer",
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['category']}</h4>
      <div className="sidebar-widget-wrapper sidebar-categorie-list">
        <ul>
          <li>
            <button value=""
              className="sidebar-categories-btn active"
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
                <button value={cat.name}
                  className="sidebar-categories-btn"
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
