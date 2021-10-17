// import Button from 'react-bootstrap/Button';
// import CardHeader from 'react-bootstrap/CardHeader';
// import DropdownMenu from '@restart/ui/esm/DropdownMenu';

import React from 'react';
import './shop-header.css';


const ShopHeader = ({  }) => {
  return (
    <header className="shop-header row">
    <a className="logo text-dark" href="#">Inforse-test</a>
    <a className="shopping-cart">
      <i className="cart-icon fa fa-shopping-cart" />
      {/* {numItems} items (${total}) */}
    </a>
  </header>
    // 
  );
};

export default ShopHeader;
