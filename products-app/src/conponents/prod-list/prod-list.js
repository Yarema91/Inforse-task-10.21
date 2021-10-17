import React, { Component } from "react";
import ProdListItem from "../prod-list-item";
import { connect } from 'react-redux';
import { withProdstoreService } from "../hoc";
import { compose } from '../../utils';


import ListGroup from 'react-bootstrap/ListGroup';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import SplitButton from 'react-bootstrap/SplitButton';
import { ModalWindow } from "../pages";


class ProdList extends Component {
    componentDidMount() {
        //1. reseve date
        const { prodstoreService, prodsLoaded } = this.props;
        const data = prodstoreService.getProds();
        console.log(data);

        //2. dispatch action to store
        this.props.prodsLoaded(data)

    }
    render() {
        const { prods } = this.props;
        return (
            <ul>
                <ListGroup variant="flush">
                    <Card style={{ width: '18rem' }}>
                        <Card.Header>
                            <ModalWindow  title='Add product'>
                                <form action="create-form">
                        <div>
                            <span>Add photo</span>
                            <input
                                className='input'
                                type="text"
                                text='name'
                                placeholder='url'
                                // value={this.state.inputNewProd}
                                // onChange={e => this.setInputNewProd(e.target.value)}
                            />
                        </div>
                         <div><span>Name</span>
                            <input
                                className='input'
                                type="text" text='name'
                                placeholder='name'
                                // value={this.state.inputNewProd}
                                // onChange={e => this.setInputNewProd(e.target.value)}
                            />
                        </div> 

                        <div><span>Count</span>
                            <input
                                type="number"
                                className='input'
                                text='name'
                                placeholder='count'
                                // value={this.state.inputNewProd}
                                // onChange={e => this.setInputNewProd(e.target.value)}
                            />
                        </div> 

                        {/* <div><span>Size</span>
                            <input
                                type="number"
                                className='input'
                                text='name'
                                placeholder='width' 
                                value={this.state.inputNewProd}
                                onChange={e => this.setInputNewProd(e.target.value)}
                            />
                            <input
                                type="number"
                                className='input'
                                text='name'
                                placeholder='height'
                                
                            />
                            </div>

                        <div><span> Weight</span>
                            <input 
                            type="number" 
                            className='input' 
                            text='name' 
                            placeholder='weight'
                            value={this.state.inputNewProd}
                            onChange={e => this.setInputNewProd(e.target.value)} 
                            />
                            </div> */}
                    </form> 
                    </ModalWindow>
                            <SplitButton
                                variant="outline-secondary"
                                title="Sort"
                                id="segmented-button-dropdown-2"
                                alignRight
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
                                                <ProdListItem prod={prod} />
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
        }
    }

}
export default compose(
    withProdstoreService(),
    connect(mapStateToProps, mapDispatchToProps))(ProdList);
