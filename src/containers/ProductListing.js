import React from "react";
import ProductGrid from "components/ProductGrid.jsx";
import Filter from "components/Filter.jsx";
import { filterByPrice, filterByBrand } from "utils/filter";
import DataStore from "store/datastore";

const priceFilters = new Set();
const brandFilters = new Set();

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
    this.products = this.props.products;
  }
  render() {
    const { filters } = this.props;
    return (
      <div>
        {this.createProductFilters(filters)}
        <ProductGrid products={this.products} />
      </div>
    );
  }

  shouldComponentUpdate(nextProps) {
    return this.props.products !== nextProps.products;
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.products !== nextProps.products) {
      this.products = nextProps.products;
    }
  }

  createProductFilters(data) {
    let key = 0;
    return data.map(filter => {
      return (
        <Filter
          data={filter}
          key={key++}
          addFilter={this.handleAddFilter}
          removeFilter={this.handleRemoveFilter}
        />
      );
    });
  }

  handleAddFilter = (filterBy, value) => {
    let filteredProducts;
    if (filterBy === "price") {
      priceFilters.add(value);
    } else if (filterBy === "brand") {
      brandFilters.add(value);
      filteredProducts = filterByBrand(DataStore.originalData, brandFilters);
      DataStore.setStore("products", filteredProducts);
    }
  };

  handleRemoveFilter = (filterBy, value) => {
    let filteredProducts;
    if (filterBy === "price") {
      priceFilters.delete(value);
      if (priceFilters.size > 0) {
        DataStore.setStore(
          "products",
          filterByPrice(this.products, priceFilters)
        );
      }
    } else if (filterBy === "brand") {
      brandFilters.delete(value);
      if (brandFilters.size > 0) {
        filteredProducts = filterByBrand(DataStore.originalData, brandFilters);
        DataStore.setStore("products", filteredProducts);
      }
    }
  };
}
export default ProductListing;
