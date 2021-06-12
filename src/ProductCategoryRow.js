import React from 'react';


class ProductCategoryRow extends React.Component {
    render() {
      const category = this.props.category;
      return (
        <tr>
          <th colSpan="3"> 
            {category}
          </th>
        </tr>
      );
    }
  }

  export {ProductCategoryRow};
