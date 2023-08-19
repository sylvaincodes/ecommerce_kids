import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { save, load } from "redux-localstorage-simple";
import { Provider } from "react-redux";
import { fetchProducts } from "./redux/actions/productActions";
import rootReducer from "./redux/reducers/rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import "./assets/scss/style.scss";

// 👇️ IMPORTANT: use correct ID of your root element
// this is the ID of the div in your index.html file
const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

// 👇️ if you use TypeScript, add non-null (!) assertion operator
// const root = createRoot(rootElement!);

const products = [
  {
    id : 1,
    image: [
      "./assets/img/product/fashion/1.jpg",
      "./assets/img/product/fashion/2.jpg",
    ],
    name: "jacket kid",
    slug: "jacket-kid",
    price: "1000",
    discount: "0",
    new: true,
    collection: "bestsales",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  {
    id : 2,
    image: [
      "./assets/img/product/fashion/2.jpg",
      "./assets/img/product/fashion/1.jpg",
    ],
    name: "blazer man",
    slug: "blazer-man",
    price: "2000",
    discount: "10",
    new: false,
    collection: "bestsales",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  {
    id : 3,
    image: [
      "./assets/img/product/fashion/3.jpg",
      "./assets/img/product/fashion/4.jpg",
    ],
    name: "dress women",
    slug: "dress-women",
    price: "3000",
    discount: "10",
    new: true,
    collection: "newarrivals",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  {
    id : 4,
    image: [
      "./assets/img/product/fashion/4.jpg",
      "./assets/img/product/fashion/3.jpg",
    ],
    name: "boy women",
    slug: "boy-women",
    price: "3500",
    discount: "10",
    new: true,
    collection: "newarrivals",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  {
    id : 5,
    image: [
      "./assets/img/product/fashion/5.jpg",
      "./assets/img/product/fashion/6.jpg",
    ],
    name: "boy women",
    slug: "boy-women",
    price: "3500",
    discount: "10",
    new: true,
    collection: "newarrivals",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  {
    id : 7,
    image: [
      "./assets/img/product/fashion/6.jpg",
      "./assets/img/product/fashion/6.jpg",
    ],
    name: "boy women",
    price: "3500",
    discount: "10",
    new: true,
    collection: "newarrivals",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  {
    id : 8,
    image: [
      "./assets/img/product/fashion/7.jpg",
      "./assets/img/product/fashion/7.jpg",
    ],
    name: "boy women",
    slug: "boy-women",
    price: "3500",
    discount: "10",
    new: true,
    collection: "newarrivals",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  ,
  {
    id : 9,
    image: [
      "./assets/img/product/fashion/8.jpg",
      "./assets/img/product/fashion/8.jpg",
    ],
    name: "boy women",
    slug: "boy-women",
    price: "3500",
    discount: "10",
    new: true,
    collection: "bestsales",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
  ,
  {
    id : 10,
    image: [
      "./assets/img/product/fashion/9.jpg",
      "./assets/img/product/fashion/9.jpg",
    ],
    name: "boy women",
    slug: "boy-women",
    price: "3500",
    discount: "10",
    new: true,
    collection: "bestsales",
    rating: 3,
    shortDescription:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
    variation: [
      {
        color: "white",
        image: "/assets/img/product/fashion/1.jpg",
        size: [
          {
            name: "x",
            stock: 3,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 5,
          },
        ],
      },
      {
        color: "black",
        image: "/assets/img/product/fashion/8.jpg",
        size: [
          {
            name: "x",
            stock: 4,
          },
          {
            name: "m",
            stock: 7,
          },
          {
            name: "xl",
            stock: 9,
          },
          {
            name: "xxl",
            stock: 1,
          },
        ],
      },
      {
        color: "brown",
        image: "/assets/img/product/fashion/3.jpg",
        size: [
          {
            name: "x",
            stock: 1,
          },
          {
            name: "m",
            stock: 2,
          },
          {
            name: "xl",
            stock: 4,
          },
          {
            name: "xxl",
            stock: 0,
          },
        ],
      },
    ],
    saleCount: 54,
    category: ["fashion", "men"],
    tag: ["fashion", "men", "jacket", "full sleeve"],
  },
];

const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(thunk, save()))
);

// fetch products from json file
store.dispatch(fetchProducts(products));

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
