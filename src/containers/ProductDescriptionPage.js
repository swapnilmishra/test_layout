/**
 * Container for viewing the product description page
 */
import React from "react";
import ProductDesc from 'components/ProductDescription.jsx'
import Navbar from "components/Navbar.jsx";
import DataStore from "store/datastore";

class Product extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {cartDataLength } = this.props;
    return (
      <div>
        {/*
          Creating navbar
        */}
        <Navbar>
          <div className='navbar-actions'>
            <div className='nav-button-outer cart-button'>
              {cartDataLength ? <span className='cart-badge'>{cartDataLength}</span> : ''}
              <a
              href="javascript:void(0)"
              className="button nav-button"
              onClick={() => this.props.setPage("cart")}
            >Cart</a>
            </div>
            <div className='nav-button-outer'>
              <a
                href="javascript:void(0)"
                className="button nav-button"
                onClick={() => this.props.setPage("productlisting")}
              >Browse</a>
            </div>
          </div>
        </Navbar>
        <ProductDesc cb={this.handleAddToCart} productDetails={this.props.productDetails}/>
      </div>
    );
  }

  /**
   * @param {Object} productData 
   * 
   * This function handles addCart functionality.
   * It takes the details which are passed to it and pushes
   * the date in store which triggers re-render.
   */
  handleAddToCart(productData){
    const store = DataStore.getStore();
    const temp = store.cartData.concat([]);
    temp.push(productData);
    DataStore.setStore("cartData", temp);
  }
}
export default Product;
