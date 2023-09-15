import React from "react";
import { multilanguage } from "redux-multilanguage";

const ShopColor = ({getSortParams,strings}) => {
  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-categorie-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    getSortParams("color",e.currentTarget.value);
  };

  const colors = [
    {
      name: "white",
    },
    {
      name: "black",
    },
    {
      name: "blue",
    },
    {
      name: "brown",
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['color']}</h4>
      <div className="sidebar-widget-wrapper sidebar-color-list">
        <ul>
          <li>
            <button value=""
              className="sidebar-categorie-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
              {strings['all_colors']}
              </span>
            </button>
          </li>

          {colors.map((color, i) => {
            return (
              <li key={i}>
                <button value={color.name}
                  className="sidebar-categorie-btn"
                  onClick={(e) => setActiveSort(e)}
                >
                  <span className="checkmark"></span>
                  <span className="category-title text-capitalize">
                    {color.name}
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

export default multilanguage(ShopColor);
