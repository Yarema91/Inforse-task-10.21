// import Button from 'react-bootstrap/Button';
// import CardHeader from 'react-bootstrap/CardHeader';
// import DropdownMenu from '@restart/ui/esm/DropdownMenu';

import React from 'react';
import { Link } from 'react-router-dom';
import './shop-header.css';


const ShopHeader = () => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark"  href="#" >Inforse-test</div>
      </Link>
    </header>
  );
};

export default ShopHeader;
