import React from "react";
import { useParams } from 'react-router-dom';


const CardPage = ({ props }) => {

    let { id } = useParams();
    console.log('id', id);
    console.log('props', props);

    return (
        <div>
            {/* {id} */}
            Card Page
        </div>
    )
}

export default CardPage;
