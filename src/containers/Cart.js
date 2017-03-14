import React from "react";
import ProductGrid from "components/ProductGrid.jsx";

class Cart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <ProductGrid products={this.props.cartData}/>
      </div>
    );
  }
}
export default Cart;
