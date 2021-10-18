import React, { useState, useCallback } from 'react';
import { connect } from "react-redux";
import { ModalWindow } from "../../pages";
import { addProdAction } from "../../../actions";

// import Form from 'react-bootstrap/Form';

const defaultFormValues = {
    imageUrl: '',
    name: '',
    count: '',
    size: {
        width: '',
        height: ''
    },
    weight: ''
};

//form function
const AddProduct = ({ prod, onAdd }) => {

    // const onHandleSubmit = () => {
    //     console.log('add');
    //     // console.log('chrecer', productTemplate);
    // }
    // // const { imageUrl, name, count, size, weight} = prod;

    const [productInput, setProductInput] = useState(defaultFormValues);

    //handleChange
    const onChangeHandler = useCallback(
        ({ target: { name, value } }) => setProductInput(productInput => ({ ...productInput, [name]: value }), [])
    );

    

    //callback form
    // const onAdd1 = (e) => {
    //     console.log('onAdd1', onAdd1);
    //     // //validation
    //     // let isValide = (productInput.name !== '')
    //     //     && (productInput.count !== '') && (productInput.imageUrl !== '')
    //     //     && (productInput.width !== '') && (productInput.height !== '')
    //     //     && (productInput.weight !== '')

    //     // if (isValide) {
    //         e.preventDefault()

    //         let newProd = buildNewProd(productInput) // create object

    //         //close modal?
    //         setProductInput({
    //             imageUrl: '',
    //             name: '',
    //             count: '',
    //             width: '',
    //             height: '',
    //             weight: ''

    //         })
    //     // }  else {
    //     //     e.preventDefault()
    //     //     alert('error .. ')
    //     // }
    // }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            onAdd(e)
        }
    }

    return (
        <ModalWindow title='Add product' onHandleSubmit={(e) => onAdd(e, productInput)} >
            <form className="mb-3" action="create-form">
                <div>
                    <span>Add photo</span>
                    <input
                        className='input'
                        type="text"
                        text='name'
                        placeholder='url'
                        value={productInput.imageUrl}
                        onChange={e => setProductInput({...productInput, imageUrl: e.target.value })}
                        // onKeyPress={(e) => handleKeyPress(e.target.value)}
                    />
                </div>
                <div><span>Name</span>
                    <input
                        className='input'
                        type="text" text='name'
                        placeholder='name'
                    value={productInput.name}
                    onChange={e => setProductInput({...productInput, name: e.target.value })}
                    />
                </div>
                <div><span>Count</span>
                    <input
                        type="number"
                        className='input'
                        text='name'
                        placeholder='count'
                        value={productInput.count}
                    onChange={e => setProductInput({...productInput, count: e.target.value })}
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
    );
};



// const mapStateToProps = ({ cartItems }) => {
//     return {
//         items: cartItems
//     }
// }
const mapStateToProps = ({ prods }) => {
    return { prods };
}


const mapDispatchToProps = (dispatch) => {
    return {
       
        onAdd: (e, productInput) => { 
            // e.preventDefault();
            const buildNewProd = ( productInput) => {
                if (productInput) {
                    const newProd = {
                        id: Math.random().toString(36).substr(2, 9),
                        imageUrl: productInput.imageUrl,
                        name: productInput.name,
                        count: productInput.count,
                        width: productInput.width,
                        height: productInput.height,
                        weight: productInput.weight,
                        comments: []
                    }
                    return newProd;
                }
            }

            let newProd = buildNewProd(productInput);// create object

            return dispatch(addProdAction(newProd)) },
    }
};
// const mapDispatchToProps = ({addNewProd}) => {
//     return {
//         // onAdd: (id) => {
//         //     console.log(`add ${id}`);
//         // }
//     onAdd: addProdAction,

//     }
        
// }


export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
