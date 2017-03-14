import React from "react";
import ReactDOM from "react-dom";
import productData from "./api/products";
import {AppContainer} from "react-hot-loader";
// AppContainer is a necessary wrapper component for HMR
import App from "containers/App";

const render = (Component, productData, sortBy) => {
  ReactDOM.render(
    <AppContainer>
      <Component
        productData={productData}
      />
    </AppContainer>,
    document.getElementById("root")
  );
};

function onSearch(value) {
  if (value.trim() == "") {
    render(App, productData);
  }
  const regex = new RegExp(value.toLowerCase(), "i");
  const data = productData.filter(project => {
    return regex.test(project.projectName.toLowerCase());
  });

  render(App, data);
}

function onSortBy(sortBy) {
  sortBy = sortBy;
  const data = _.sortBy(productData, function(project) {
    return project[sortBy];
  });
  render(App, data.reverse(), sortBy);
}

function clearSortResult(){
  render(App, productData);
}

// setTimeout(()=>{
  render(App, productData);
// },3000);

// render(App, undefined);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept("containers/App", () => {
    const NewApp = require("containers/App").default;
    render(NewApp,productData);
  });
}
