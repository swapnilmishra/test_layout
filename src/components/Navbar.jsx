/**
 * Navbar Component just renders whatever is passed into children. It has its own style and can be extended further to have few defaults.
 * 
 */
import React from "react";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
        <nav className='top-navbar'>
            {this.props.children}
        </nav>
    )
  }
}

Navbar.propTypes = {
  children : React.PropTypes.any.isRequired
}

export default Navbar;
