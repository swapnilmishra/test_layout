import React from "react";

class ProductDesc extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {productDetails} = this.props
    const imagePath = `img/${productDetails.image}`
    return (
      <div>
        <div>{productDetails.name}</div>
        <img src={imagePath} alt="{productDetails.name}"/>
        <button onClick={this.handleAddToCart}> Add to cart</button>
      </div>
    );
  }

  handleAddToCart = () => {
    this.props.cb(this.props.productDetails)
  }
}
export default ProductDesc;