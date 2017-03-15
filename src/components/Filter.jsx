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
export default Filter;
