/**
 * Cart container is what is responsible for showing the cart UI.
 * It uses ProductGrid to show the items which are there in cart
 */
import React from "react";
import ProductGrid from "components/ProductGrid.jsx";
import Navbar from "components/Navbar.jsx";
import DataStore from "store/datastore";

class Cart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return this.props.cartData.length > 0
      ? <div>
        {this.createNavBar()}
          <ProductGrid
            addToCartCB={this.handleAddToCart}
            thumbClickCB={this.handleThumbClick}
            products={this.props.cartData}
          />
        </div>
      : <div>
        {this.createNavBar()}
        <div className='no-cart-data'>
          <h4>No cart data to show for the moment</h4>
        </div>
      </div>;
  }

  createNavBar = () => {
    return (
      <Navbar>
        <div className="navbar-actions">
          <div className="nav-button-outer">
            <a
              href="javascript:void(0)"
              className="button nav-button"
              onClick={() => this.props.setPage("productlisting")}
            >
              Browse
            </a>
          </div>
        </div>
      </Navbar>
    );
  };

  handleAddToCart(productData) {
    const store = DataStore.getStore();
    const temp = store.cartData.concat([]);
    temp.push(productData);
    DataStore.setStore("cartData", temp);
  }

  handleThumbClick = productData => {
    const store = DataStore.getStore();
    store.productPageData = productData;
    this.props.showProductPage();
  };
}

Cart.propTypes = {
  cartData : React.PropTypes.any.isRequired && React.PropTypes.array

}

export default Cart;
