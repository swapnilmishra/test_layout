/**
 * This is the starting file of our app and things boot from here
 * DataStore is responsible for keeping the data and triggering re-render
 */
import React from "react";
import ReactDOM from "react-dom";
import { AppContainer } from "react-hot-loader";
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

// Show product listing page first
render("productlisting");

// subscribe to data store so that whenever it changes we get a callback
DataStore.subscribe(function() {
  render(DataStore.currentPage);
});

// Used to render a page by name to integrate navigation buttons of Nav header
// i.e Browse,Cart and to view product details page
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
