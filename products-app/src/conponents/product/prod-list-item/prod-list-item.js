import React, { Fragment } from "react";

import Button from 'react-bootstrap/Button';


const prodListItem = ({ prod, onDeleteProd }) => {
    const { id, imageUrl, name, count, size, weight, comments } = prod;
        // "id": 1,
        // "imageUrl": "some url here",
        // "name": "Product name",
        // "count": 4,
        // "size": {
        //     "width": 200,
        //     "height": 200
        //     },
        // "weight": "200g",
        // "comments": ["CommentModel", "CommentModel"]
   
    return (
        <Fragment>
            <span>{ id }</span>
            <span> { name }</span>
            <span> count: { count }  </span>
            <Button 
            onClick={()=> onDeleteProd(id)}
            >Х</Button>
        </Fragment>
    )
}

export default prodListItem;
