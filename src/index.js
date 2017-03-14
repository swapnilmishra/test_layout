import React from "react";
import ReactDOM from "react-dom";
import productData from "./api/products";
import { AppContainer } from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR
import ProductListing from "containers/ProductListing";
import Cart from "containers/Cart";
import ProductPage from "containers/ProductPage";

const render = (page, productData, sortBy) => {
  ReactDOM.render(
    <div>
      <a href="javascript:void(0)" onClick={() => setPage("productlisting")}>
        {" "}ProductListing
      </a>
      <a href="javascript:void(0)" onClick={() => setPage("cart")}> Cart</a>
      <a href="javascript:void(0)" onClick={() => setPage("productpage")}>
        {" "}ProductPage
      </a>
      <AppContainer>
        {getComponentToBeRendered(page)}
      </AppContainer>
    </div>,
    document.getElementById("root")
  );
};

render("productlisting", productData);

function setPage(page) {
  render(page);
}

function getComponentToBeRendered(page) {
  if (page === "productpage") {
    return <ProductPage />;
  } else if (page === "cart") {
    return <Cart />;
  } else {
    return <ProductListing productData={productData} />;
  }
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("containers/ProductListing", () => {
    render("productpage", productData);
  });
}
