import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR
import ProductListing from "containers/ProductListing";
import Cart from "containers/Cart";
import ProductPage from "containers/ProductPage";
import DataStore from 'store/datastore';


const render = (page) => {
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

render("productlisting");

DataStore.subscribe(function(){
  debugger;
  render("productlisting")
})

function setPage(page) {
  render(page);
}

function getComponentToBeRendered(page) {
  if (page === "productpage") {
    return <ProductPage products={DataStore.getStore().products}/>;
  } else if (page === "cart") {
    return <Cart cartData={DataStore.getStore().cartData}/>;
  } else {
    return <ProductListing products={DataStore.getStore().products} filters={DataStore.getStore().filters}/>;
  }
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("containers/ProductListing", () => {
    render("productpage", productData);
  });
}
