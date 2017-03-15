import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR
import ProductListing from "containers/ProductListing";
import Cart from "containers/Cart";
import ProductPage from "containers/ProductDescriptionPage";
import DataStore from "store/datastore";

const render = page => {
  ReactDOM.render(
    <div>
      <AppContainer>
        {getComponentToBeRendered(page)}
      </AppContainer>
    </div>,
    document.getElementById("root")
  );
};

render("productlisting");

DataStore.subscribe(function() {
  render(DataStore.currentPage);
});

function setPage(page) {
  DataStore.currentPage = page;
  render(page);
}

function getComponentToBeRendered(page) {
  if (page === "productpage") {
    return (
      <ProductPage
        productDetails={DataStore.getStore().productPageData}
        cartDataLength={DataStore.getStore().cartData.length}
        setPage={setPage}
      />
    );
  } else if (page === "cart") {
    return <Cart cartData={DataStore.getStore().cartData} setPage={setPage} showProductPage={() => setPage("productpage")}/>;
  } else {
    return (
      <ProductListing
        products={DataStore.getStore().products}
        filters={DataStore.getStore().filters}
        showProductPage={() => setPage("productpage")}
        setPage={setPage}
        cartDataLength={DataStore.getStore().cartData.length}
      />
    );
  }
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("containers/ProductListing", () => {
    render("productpage", productData);
  });
}
