import React from "react";
import ProductDesc from 'components/ProductDescription.jsx'

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ProductDesc cb={this.handleAddToCart} productDetails={this.props.productDetails}/>
      </div>
    );
  }

  handleAddToCart(productData){
    const store = DataStore.getStore()
    store.cartData.push(productData)
  }
}
export default Product;
