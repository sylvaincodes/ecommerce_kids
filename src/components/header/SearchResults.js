import React from "react";
import { Suspense } from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const SearchResults = ({ query, deferredQuery }) => {
  return (
    <Fragment>
      {query ? (
        <div className="row search-results-container">
          <Suspense fallback={<h2>Loading...</h2>}>
            <div className="search-results">
              <ul>
                <li>
                  <Link>PS4 slim 6 1000gb</Link>
                </li>
                <li>
                  <Link>PS5 1 Terra Noir</Link>
                </li>{" "}
                <li>
                  <Link>PS3 Beige Slim Full</Link>
                </li>
              </ul>
            </div>
          </Suspense>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
};

export default SearchResults;
