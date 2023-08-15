import React from 'react'

const ShopTag = () => {
  const setActiveSort = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  const tags = [
    {
      name: "hommes",
    },
    {
      name: "femmes",
    },
    {
      name: "enfants",
    },
    {
      name: "noel",
    },
  ];

  return (
    <div className="sidebar-widget">
      <h4 className="title">etiquettes</h4>
      <div className="sidebar-widget-wrapper sidebar-tag-list">
        <ul>
          <li>
            <button
              className="sidebar-tag-btn active"
              onClick={(e) => setActiveSort(e)}
            >
              <span className="checkmark"></span>
              <span className="category-title text-capitalize">
                tous les étiquettes
              </span>
            </button>
          </li>

          {tags.map((tag, i) => {
            return (
              <li key={i}>
                <button
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

export default ShopTag