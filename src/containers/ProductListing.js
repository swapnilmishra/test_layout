import React from "react";
import ProductGrid from 'components/ProductGrid.jsx'

class ProductListing extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
       <ProductGrid products={this.props.productData.products}/>
      </div>
    );
  }
}
export default ProductListing;
