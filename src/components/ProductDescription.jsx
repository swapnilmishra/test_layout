/**
 * Product description Component which takes data and show various details for the product
 */
import React from "react";

class ProductDesc extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {productDetails} = this.props
    const imagePath = `img/${productDetails.image}`
    return (
      <div className='product-details-container-outer'>
        <h1>{productDetails.name}</h1>
        <div className='product-details-container'>
          <div>
            <img src={imagePath} alt={productDetails.name} className="item-img"/>
          </div>
          <div className="product-details">
            <h3>{productDetails.measurement}</h3>
            <h2>${productDetails.price}</h2>
            <div className='product-details-summary'>{productDetails.desc}</div>
            <button onClick={this.handleAddToCart} className='add-to-cart button'> Add to cart</button>
          </div>
        </div>
      </div>
    );
  }

  handleAddToCart = () => {
    this.props.cb(this.props.productDetails)
  }
}

ProductDesc.propTypes = {
  productDetails : React.PropTypes.any.isRequired && React.PropTypes.object
}

export default ProductDesc;