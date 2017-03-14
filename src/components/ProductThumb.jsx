import React from "react";

class ProductThumb extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {productDetails} = this.props
    const imagePath = `img/${productDetails.image}`
    return (
      <div className='flex-child'>
        <div>{productDetails.name}</div>
        <img src={imagePath} alt="{productDetails.name}"/>
      </div>
    );
  }
}
export default ProductThumb;