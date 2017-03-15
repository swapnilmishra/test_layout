/**
 * This is a filter component which can be used any where to populate set of filters which checkbox. Required parameters are given below via proptypes validation
 *
 Filter.propTypes = {
  data : React.PropTypes.any.isRequired,
  addFilter : React.PropTypes.any.isRequired,
  removeFilter : React.PropTypes.any.isRequired,
  filterValues: function(props, propName, componentName) {
    if (!props.data.values) {
      return new Error(
        `This component requires value to be passed into data object`
      );
    }
  }
}
 *  
 */

import React from "react";

class Filter extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let key=0;
    return (
      <div>
        <h4 className='filter-name'>{this.props.data.name}</h4>
        {this.props.data.values.map(item => {
            return (
                <div key={key++} className='checkbox'>
                  <input type='checkbox' value={item} onChange={this.handleFilterClick}/>
                  <span></span>
                  <span className='checkbox-label'>{item}</span>
                </div>
            )
        })}
      </div>
    );
  }

  handleFilterClick = (evt) => {
    if(evt.target.checked) {
        this.props.addFilter(this.props.data.name,evt.target.value)
    }
    else {
        this.props.removeFilter(this.props.data.name,evt.target.value)
    }
  }
}

Filter.propTypes = {
  data : React.PropTypes.any.isRequired,
  addFilter : React.PropTypes.any.isRequired,
  removeFilter : React.PropTypes.any.isRequired,
  filterValues: function(props, propName, componentName) {
    if (!props.data.values) {
      return new Error(
        `This component requires value to be passed into data object`
      );
    }
  }
}


export default Filter;
