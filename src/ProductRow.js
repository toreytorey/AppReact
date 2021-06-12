import React from 'react';
import './index.css';


class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span class = "productUnavailable">
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
          <td>{product.priceFor}</td>
        </tr>
      );
    }
  }

  export {ProductRow};