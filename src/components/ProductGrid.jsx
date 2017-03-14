import React from "react";
import ProductThumb from 'components/ProductThumb.jsx'

class ProductGrid extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='flex-container'>
        {this.getGridItems(this.props.products)}
      </div>
    );
  }

  getGridItems(data) {
    return data.map(function(productDetails){
      return <ProductThumb productDetails={productDetails} />
    })
  }
}
export default ProductGrid;
