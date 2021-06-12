import React from 'react';
import {ProductTable} from './ProductTable.js';
import {SearchBar} from './SearchBar';



class FilterableProductTable extends React.Component {
    constructor(props) {
      super(props);
      //ustalenie początkowego stanu aplikacji
      this.state = {
        filterText: '', //stan: wyszukiwana fraza
        inStockOnly: false //stan: wartość zaznaczonego pola
      };
  
      this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
      this.handleInStockChange = this.handleInStockChange.bind(this);
    }
      
    //Obłsuga zdarzenia - wpisywanego tekstu
    handleFilterTextChange(filterText) {
      this.setState({
        filterText: filterText
      });
    }
    
    //Obłsuga zdarzenia - zaznaczonego checkboxa
    handleInStockChange(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      })
    }
    
    render() {
      return (
        <div className = "tableCSS">
          <h2>Cennik:</h2>
          {/* wymaga stanu, aby filtrować listę produktów */}
          <SearchBar
            filterText = {this.state.filterText}
            inStockOnly = {this.state.inStockOnly}
            onFilterTextChange = {this.handleFilterTextChange}
            onInStockChange = {this.handleInStockChange}
          />
          {/* wymaga stanu, aby wyświetlać wyszukiwaną frazę i wartość zaznaczonego pola */}
          <ProductTable
            products = {this.props.products} 
            filterText = {this.state.filterText}
            inStockOnly = {this.state.inStockOnly}
          />
        </div>
      );
    }
  }

  export {FilterableProductTable};