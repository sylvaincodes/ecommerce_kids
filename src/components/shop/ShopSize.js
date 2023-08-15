import React from "react";

const ShopSize = () => {
  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-size-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const sizes = [
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
      <h4 className="title">tailles</h4>
      <div className="sidebar-widget-wrapper sidebar-size-list">
        <ul>
          <li>
            <button
              className="sidebar-size-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
                toutes les couleurs
              </span>
            </button>
          </li>

          {sizes.map((size, i) => {
            return (
              <li key={i}>
                <button
                  className="sidebar-size-btn"
                  onClick={(e) => setActiveSort(e)}
                >
                  <span className="checkmark"></span>
                  <span className="category-title text-capitalize">
                    {size.name}
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

export default ShopSize;
