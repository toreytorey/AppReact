import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {FilterableProductTable} from './FilterableProductTable';


// class ProductCategoryRow extends React.Component {
//   render() {
//     const category = this.props.category;
//     return (
//       <tr>
//         <th colSpan="2"> 
//           {category}
//         </th>
//       </tr>
//     );
//   }
// }

// class ProductRow extends React.Component {
//   render() {
//     const product = this.props.product;
//     const name = product.stocked ?
//       product.name :
//       <span style={{color: 'red'}}>
//         {product.name}
//       </span>;

//     return (
//       <tr>
//         <td>{name}</td>
//         <td>{product.price}</td>
//       </tr>
//     );
//   }
// }

// class ProductTable extends React.Component {
//   render() {
//     const filterText = this.props.filterText;
//     const inStockOnly = this.props.inStockOnly;
    
//     const rows = [];
//     let lastCategory = null;
    
//     this.props.products.forEach((product) => {
//       if (product.name.indexOf(filterText) === -1) {
//         return;
//       }
//       if (inStockOnly && !product.stocked) {
//         return;
//       }
//       if (product.category !== lastCategory) {
//         rows.push(
//           <ProductCategoryRow
//             category={product.category}
//             key={product.category} />
//         );
//       }
//       rows.push(
//         <ProductRow
//           product={product}
//           key={product.name} />
//       );
//       lastCategory = product.category;
//     });

//     return (
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Price</th>
//           </tr>
//         </thead>
//         <tbody>{rows}</tbody>
//       </table>
//     );
//   }
// }

// class SearchBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
  
//   handleFilterTextChange(e) {
//     this.props.onFilterTextChange(e.target.value);
//   }
  
//   handleInStockChange(e) {
//     this.props.onInStockChange(e.target.checked);
//   }
  
//   render() {
//      return (
//       <form>
//         <input
//           type="text"
//           placeholder="Search..." 
//           value = {this.props.filterText}
//           onChange = {this.handleFilterTextChange} />
//         <p>
//           <input type="checkbox" 
//           checked = {this.props.inStockOnly} 
//           onChange = {this.handleInStockChange}/>
//           {' '}
//           Only show products in stock
//         </p>
//       </form>
//     );
//   }
// }

// class FilterableProductTable extends React.Component {
//   constructor(props) {
//     super(props);
//     //ustalenie pocz??tkowego stanu aplikacji
//     this.state = {
//       filterText: '', //stan: wyszukiwana fraza
//       inStockOnly: false //stan: warto???? zaznaczonego pola
//     };

//     this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
//     this.handleInStockChange = this.handleInStockChange.bind(this);
//   }
    
//   handleFilterTextChange(filterText) {
//     this.setState({
//       filterText: filterText
//     });
//   }
  
//   handleInStockChange(inStockOnly) {
//     this.setState({
//       inStockOnly: inStockOnly
//     })
//   }
  
//   render() {
//     return (
//       <div>
//         {/* wymaga stanu, aby filtrowa?? list?? produkt??w */}
//         <SearchBar
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//           onFilterTextChange = {this.handleFilterTextChange}
//           onInStockChange = {this.handleInStockChange}
//         />
//         {/* wymaga stanu, aby wy??wietla?? wyszukiwan?? fraz?? i warto???? zaznaczonego pola */}
//         <ProductTable
//           products={this.props.products} 
//           filterText={this.state.filterText}
//           inStockOnly={this.state.inStockOnly}
//         />
//       </div>
//     );
//   }
// }

const PRODUCTS = [
  {category: "Owoce", price: "10.50 z??", priceFor: "/ kg", stocked: true, name: "Truskawki"},
  {category: "Owoce", price: "15.90 z??", priceFor: "/ kg", stocked: true, name: "Arbuz"},
  {category: "Owoce", price: "1.50 z??", priceFor: "/ szt.", stocked: false, name: "Brzoskwinia"},
  {category: "Warzywa", price: "2.50 z??", priceFor: "/ szt.", stocked: true, name: "Og??rek"},
  {category: "Warzywa", price: "5.20 z??", priceFor: "/ kg", stocked: false, name: "Ziemniaki"},
  {category: "Warzywa", price: "8.40 z??", priceFor: "/ kg", stocked: true, name: "Ziemniaki Bio"},
  {category: "Warzywa", price: "4.60 z??", priceFor: "/ szt.", stocked: true, name: "Broku??y"},
  {category: "S??odycze", price: "1.99 z??", priceFor: "/ szt.", stocked: true, name: "Baton Mars"},
  {category: "S??odycze", price: "2.29 z??", priceFor: "/ szt.", stocked: false, name: "Baton KitKat"},
  {category: "S??odycze", price: "12.90 z??", priceFor: "/ kg", stocked: false, name: "Cukierki"},
  {category: "S??odycze", price: "14.60 z??", priceFor: "/ kg", stocked: true, name: "Ciastka"}
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById('root')
);

