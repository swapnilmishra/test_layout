import React from "react";

class ProductThumb extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {productDetails} = this.props
    const imagePath = `img/${productDetails.image}`
    return (
      <div className='flex-child' onClick={this.handleThumbClick}>
        <div>{productDetails.name}</div>
        <img src={imagePath} alt="{productDetails.name}"/>
        <button onClick={this.handleAddToCart}> Add to cart</button>
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