import React from "react";
import ProductGrid from "components/ProductGrid.jsx";
import Filter from "components/Filter.jsx";

class ProductListing extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { filters } = this.props.productData;
    return (
      <div>
        {this.createProductFilters(filters)}
        <ProductGrid products={this.props.productData.products} />
      </div>
    );
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

  handleAddFilter(filterBy,value){
    console.log('Add filter')
    console.log(filterBy,value)
  }

  handleRemoveFilter(filterBy,value){
    console.log('Remove filter')
    console.log(filterBy,value)
  }
}
export default ProductListing;
