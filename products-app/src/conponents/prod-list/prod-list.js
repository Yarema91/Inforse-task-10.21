import React, { Component } from "react";
import ProdListItem from "../prod-list-item";
import { connect } from 'react-redux';
import { withProdstoreService } from "../hoc";
import { compose } from '../../utils';


import ListGroup from 'react-bootstrap/ListGroup';

class ProdList extends Component  {
    componentDidMount(){
        //1. reseve date
        const { prodstoreService } = this.props;
        const data = prodstoreService.getProds();
        console.log(data);

        //2. dispatch action to store
        this.props.prodsLoaded(data)

    }
    render(){
        const { prods } = this.props;
        return (
            <ul>
                <ListGroup variant="flush">
                {
                    prods.map((prod) => {
                        return (
                            <li key={prod.id}><ProdListItem  prod={prod}/></li>
                        )
                    })
                }
                  </ListGroup>
            </ul>
        )
    }
} 
const mapStateToProps = ({prods}) => {
    return { prods };
}

const mapDispatchToProps = (dispatch) => {
    return {
        prodsLoaded: (newProds) => {
            dispatch({
                type: 'PRODS_LOADED',
                payload: newProds
            })
        }
    }

}
export default compose(
    withProdstoreService(),
        connect(mapStateToProps, mapDispatchToProps))(ProdList);
