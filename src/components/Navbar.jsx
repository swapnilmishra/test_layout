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
export default Navbar;
