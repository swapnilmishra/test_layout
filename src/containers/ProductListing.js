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
        <ProductGrid products={this.products} addToCartCB={this.handleAddToCart} thumbClickCB={this.handleThumbClick}/>
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

  /**
   * @param filterBy : String
   * @param value : String
   * 
   */
  handleAddFilter = (filterBy, value) => {
    if (filterBy === "price") {
      priceFilters.add(value);
    }
    else if (filterBy === "brand") {
      brandFilters.add(value)
    }
    this.setProductStore()
  }

  handleRemoveFilter = (filterBy, value) => {
    let filteredProducts = DataStore.originalData;
    if (filterBy === "price") {
      priceFilters.delete(value);
    }
    else if (filterBy === "brand") {
      brandFilters.delete(value);
    }
    this.setProductStore()
  }
  
  /**
   * Brand filter takes precedence over price filter i.e whenever a brand filter is applied
   * filtering is done on originalData after which any other filter i.e price is applied
   */
  setProductStore(){
    let filteredProducts = DataStore.originalData;
    if(brandFilters.size > 0){
      filteredProducts = filterByBrand(filteredProducts, brandFilters);
    }
    if(priceFilters.size > 0 ){
      filteredProducts = filterByPrice(filteredProducts, priceFilters)
    }
    DataStore.setStore('products',filteredProducts)
  }

  handleAddToCart(productData){
    const store = DataStore.getStore()
    store.cartData.push(productData)
  }

  handleThumbClick = (productData) => {
    const store = DataStore.getStore()
    store.productPageData = productData
    this.props.showProductPage()
  }
}
export default ProductListing;
