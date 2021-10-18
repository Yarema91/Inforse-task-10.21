import React from "react";
import { Route, Switch } from "react-router-dom";
import ShopHeader from "../shop-header/shop-header";
import {HomePage, CardPage } from "../pages";
// import { withProdstoreService } from '../hoc';

// import Card from 'react-bootstrap/Card';
// import ListGroup from 'react-bootstrap/ListGroup';



const App = () => {
    // console.log(prodstoreService.getProds());
    return  (
        <main role="main">
        <ShopHeader />
        <Switch>
            <Route path="/" 
            component={ HomePage }
            exact />
             <Route path="/card/:id" 
            component={ CardPage }
            />
        </Switch>
        </main>
    )
    // <div>
    //     <Card style={{ width: '18rem' }}>
    //        <ListGroup variant="flush">
    //         <ListGroup.Item>Cras justo odio</ListGroup.Item>
    //          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
    //         <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
    //        </ListGroup>
    //     </Card>
    // </div>
    ; 
};

export default  App;
