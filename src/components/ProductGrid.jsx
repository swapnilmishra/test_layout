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
    let key = 0;
    return data.map(function(productDetails){
      return <ProductThumb productDetails={productDetails} key={key++}/>
    })
  }
}
export default ProductGrid;
