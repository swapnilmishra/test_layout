import React from "react";

class ProductThumb extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {productDetails} = this.props
    const imagePath = `img/${productDetails.image}`
    return (
      <div className='product-preview' onClick={this.handleThumbClick}>
        <img className='product-img' src={imagePath} alt="{productDetails.name}"/>
        <div className='product-details'>{productDetails.name}</div>
        <div>{productDetails.measurement}</div>
        <h4>$ {productDetails.price}</h4>
        <button onClick={this.handleAddToCart} className='add-to-cart button'> Add to cart</button>
      </div>
    );
  }

  handleAddToCart = (evt) => {
    evt.stopPropagation()
    this.props.addToCartCB(this.props.productDetails)
  }

  handleThumbClick = (evt) => {
    evt.stopPropagation()
    this.props.thumbClickCB(this.props.productDetails)
  }
}
export default ProductThumb;