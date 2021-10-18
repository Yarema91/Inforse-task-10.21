import React, { useState, useCallback } from 'react';
import { connect } from "react-redux";
import { ModalWindow } from "../../pages";
import { addProdAction } from "../../../actions";

// import Form from 'react-bootstrap/Form';

const defaultFormValues = {
    imageUrl: '',
    name: '',
    count: '',
    width: '',
    height: '',
    weight: ''
};

//form function
const AddProduct = ({ prod, onAdd }) => {

    const [productInput, setProductInput] = useState(defaultFormValues);

    //handleChange
    const onChangeHandler = useCallback(
        ({ target: { name, value } }) => setProductInput(productInput => ({ ...productInput, [name]: value }), [] )
    );

    // // callback form
    // const onAdd1 = (e) => {
    //     console.log('onAdd1', onAdd1);
    //     // //validation
    //     // let isValide = (productInput.name !== '')
    //     //     && (productInput.count !== '') && (productInput.imageUrl !== '')
    //     //     && (productInput.width !== '') && (productInput.height !== '')
    //     //     && (productInput.weight !== '')

    //     // if (isValide) {
    //         e.preventDefault()

    //         // let newProd = buildNewProd(productInput) // create object

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
        <ModalWindow title='Add product' onHandleSubmit={(e) => onAdd(e, productInput, setProductInput)} >
            <form className="mb-3" action="create-form">
                <div>
                    <span>Add photo</span>
                    <input
                        className='input'
                        type="text"
                        text='name'
                        placeholder='url'
                        value={productInput.imageUrl || "" }
                        onChange={e => setProductInput({...productInput, imageUrl: e.target.value }) }
                        // onKeyPress={(e) => handleKeyPress(e.target.value)}
                    />
                </div>
                <div><span>Name</span>
                    <input
                        className='input'
                        type="text" text='name'
                        placeholder='name'
                    value={productInput.name || ""}
                    onChange={e => setProductInput({...productInput, name: e.target.value }) }
                    />
                </div>
                <div><span>Count</span>
                    <input
                        type="number"
                        className='input'
                        text='name'
                        placeholder='count'
                        value={productInput.count  || ""}
                    onChange={e => setProductInput({...productInput, count: e.target.value } )}
                    />
                </div>
                <div>
                    <span>Size</span>
                            <input
                                type="number"
                                className='input'
                                text='name'
                                placeholder='width' 
                                value={productInput.width || ""}
                                onChange={e => setProductInput({...productInput, width: e.target.value })}
                            />
                            <input
                                type="number"
                                className='input'
                                text='name'
                                placeholder='height'  
                                value={productInput.height || ""}
                                onChange={e => setProductInput({...productInput, height: e.target.value })} 
                            />
                            </div>
                        <div><span> Weight</span>
                            <input 
                            type="number" 
                            className='input' 
                            text='name' 
                            placeholder='weight'
                            value={productInput.weight || ""}
                            onChange={e => setProductInput({...productInput, weight: e.target.value })}
                            />
                            </div>
            </form>
        </ModalWindow>
    );
};

const mapStateToProps = ({ prods }) => {
    return { prods };
}

const mapDispatchToProps = (dispatch) => {
    return {
       
        onAdd: (e, productInput, setProductInput) => { 
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

            setProductInput({});

            return dispatch(addProdAction(newProd)) },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);
