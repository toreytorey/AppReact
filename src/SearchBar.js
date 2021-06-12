import React from 'react';


class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
      this.props.onFilterTextChange(e.target.value);
    }
    
    handleInStockChange(e) {
      this.props.onInStockChange(e.target.checked);
    }
    
    render() {
       return (
        <form>
          <input
            type = "text"
            placeholder = "Wyszukaj..." 
            value = {this.props.filterText}
            onChange = {this.handleFilterTextChange} />
          <p>
            <input type = "checkbox" 
            checked = {this.props.inStockOnly} 
            onChange = {this.handleInStockChange}/>
            {' '}
            Pokaż jedynie dostępne produkty
          </p>
        </form>
      );
    }
  }

export {SearchBar};