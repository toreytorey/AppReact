import React from 'react';
import {ProductCategoryRow} from './ProductCategoryRow.js';
import {ProductRow} from './ProductRow.js';


class ProductTable extends React.Component {
    render() {
      const filterText = this.props.filterText;
      const inStockOnly = this.props.inStockOnly;
      
      const rows = [];
      let lastCategory = null;
      
      this.props.products.forEach((product) => {
        if (product.name.indexOf(filterText) === -1) {
          return;
        }
        if (inStockOnly && !product.stocked) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(
            <ProductCategoryRow
              category = {product.category}
              key = {product.category} />
          );
        }
        rows.push(
          <ProductRow
            product = {product}
            key = {product.name} />
        );

        lastCategory = product.category;
      });
  
      return (
        <table className = "tableSecond">
          <thead>
            <tr>
              <th>Nazwa</th>
              <th>Cena</th>
              <th>(za)</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      );
    }
  }

  export {ProductTable};