/**
 * ProductGrid creates grid of product which are passed into it.
 * It internally used ProductThumb component to render an item of grid
 */
import React from "react";
import ProductThumb from 'components/ProductThumb.jsx'

class ProductGrid extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='product-grid-container'>
        {this.getGridItems(this.props.products)}
      </div>
    );
  }

  getGridItems(data) {
    let key = 0;
    return data.map((productDetails) => {
      return <ProductThumb productDetails={productDetails} key={key++} addToCartCB={this.props.addToCartCB} thumbClickCB={this.props.thumbClickCB}/>
    })
  }
}

ProductGrid.propTypes = {
  products : React.PropTypes.any.isRequired && React.PropTypes.array,
  thumbClickCB : React.PropTypes.any.isRequired,
  addToCartCB : React.PropTypes.any.isRequired
}

export default ProductGrid;
