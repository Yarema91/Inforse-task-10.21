import React, { Component } from "react";
import ProdListItem from "../prod-list-item";
import { connect } from 'react-redux';
import { withProdstoreService } from "../../hoc";
import { compose } from '../../../utils';
import { deleteProd } from "../../../actions";


import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';

import AddProduct from "../add-product";

const ProdList = ({ prods, onDeleteProd }) => {
    console.log(prods);
    return (
        <ul>
            <ListGroup variant="flush">
                <Card style={{ width: '18rem' }}>
                    <Card.Header>
                        <AddProduct />
                        <SplitButton
                            variant="outline-secondary"
                            title="Sort"
                            id="segmented-button-dropdown-2"
                            // alignRight
                        >
                            <Dropdown.Item href="#">By name</Dropdown.Item>
                            <Dropdown.Item href="#">By count</Dropdown.Item>
                            <Dropdown.Divider />
                        </SplitButton>
                    </Card.Header>
                    <ListGroup variant="flush">
                        {
                            prods.map((prod) => {
                                return (
                                    <li key={prod.id}>
                                        <ListGroup.Item>
                                            <ProdListItem prod={prod}
                                            onDeleteProd={()=> onDeleteProd(prod.id)} 
                                            />
                                        </ListGroup.Item>
                                    </li>
                                )
                            })
                        }
                    </ListGroup>
                </Card>
            </ListGroup>
        </ul>
    )
}

class ProdListContainer extends Component {
    componentDidMount() {
        //1. reseve date
        const { prodstoreService, prodsLoaded } = this.props;
        const data = prodstoreService.getProds();
        console.log(data);

        //2. dispatch action to store
        this.props.prodsLoaded(data)

    }
    render() {
        const { prods, onDeleteProd, onAddProd } = this.props;
        return (
            < ProdList prods={prods} onDeleteProd={onDeleteProd}  />
        )
    }
}

const mapStateToProps = ({ prods }) => {
    return { prods };
}

const mapDispatchToProps = (dispatch) => {
    return {
        prodsLoaded: (newProds) => {
            dispatch({
                type: 'PRODS_LOADED',
                payload: newProds
            })
        },
        onDeleteProd: (id) => dispatch(deleteProd(id)),
        // onAddProd: (newProd) => dispatch(addNewProd(id))
        
    }
};

export default compose(
    withProdstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(ProdListContainer);
