import React from "react";
import { multilanguage } from "redux-multilanguage";

const ShopSize = ({strings,getSortParams}) => {
  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-size-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    getSortParams("size",e.currentTarget.value);
  };

  const sizes = [
    {
      name: "xmall",
      slug : "x"
    },
    {
      name: "medium",
      slug : "m"
    },
    {
      name: "large",
      slug : "l"
    },
    {
      name: "extra large",
      slug : "xl"
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['size']}</h4>
      <div className="sidebar-widget-wrapper sidebar-size-list">
        <ul>
          <li>
            <button value=""
              className="sidebar-size-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
              {strings['all_sizes']}
              </span>
            </button>
          </li>

          {sizes.map((size, i) => {
            return (
              <li key={i}>
                <button value={size.slug}
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

export default multilanguage(ShopSize);
