import React from 'react'
import { multilanguage } from 'redux-multilanguage';

const ShopTag = ({getSortParams, strings}) => {
  const setActiveSort = (e) => {
    const allButton = document.querySelectorAll(".sidebar-tag-btn");
    allButton.forEach((element) => {
      element.classList.remove("active");
    });
    e.currentTarget.classList.toggle("active");
    getSortParams("tag",e.currentTarget.value);
  };

  const tags = [
    {
      name: "men",
    },
    {
      name: "women",
    },
    {
      name: "kids",
    },
    {
      name: "noel",
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">{strings['tag']}</h4>
      <div className="sidebar-widget-wrapper sidebar-tag-list">
        <ul>
          <li>
            <button value=""
              className="sidebar-tag-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
              {strings['all_tags']}
              </span>
            </button>
          </li>

          {tags.map((tag, i) => {
            return (
              <li key={i}>
                <button value={tag.name}
                  className="sidebar-tag-btn"
                  onClick={(e) => setActiveSort(e)}
                >
                  <span className="checkmark"></span>
                  <span className="category-title text-capitalize">
                    {tag.name}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default multilanguage(ShopTag)