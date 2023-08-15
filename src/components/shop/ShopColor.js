import React from "react";

const ShopColor = () => {
  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-categorie-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const colors = [
    {
      name: "blanc",
    },
    {
      name: "noir",
    },
    {
      name: "bleue",
    },
    {
      name: "brune",
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">couleurs</h4>
      <div className="sidebar-widget-wrapper sidebar-color-list">
        <ul>
          <li>
            <button
              className="sidebar-categorie-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
                toutes les couleurs
              </span>
            </button>
          </li>

          {colors.map((color, i) => {
            return (
              <li key={i}>
                <button
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

export default ShopColor;
