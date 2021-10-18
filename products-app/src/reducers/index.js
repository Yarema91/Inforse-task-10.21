
const initialState = {
    prods: [
        // {
        //     id: 4,
        //     imageUrl: "some url here",
        //     name: "Product4",
        //     count: 4,
        //     size: {
        //         "width": 200,
        //         "height": 200
        //     },
        //     weight: "200g",
        //     comments: ["CommentModel", "CommentModel"]
        // }
        // {
        //     id: 2,
        //     imageUrl: "some url here2",
        //     name: "Product name2",
        //     count: 6,
        //     size: {
        //         "width": 400,
        //         "height": 400
        //     },
        //     weight: "400g",
        //     comments: ["CommentModel", "CommentModel"]
        // }
    ]
};

const reducers = (state = initialState, action) => {
    // console.log(action.type);

    switch (action.type) {
        case 'PRODS_LOADED':
            return {
                prods: action.payload
            };
        case 'DELETE_PROD':
            const prodId = action.payload;
            return {
                ...state,
                prods: [...state.prods.filter(prod => prod.id !== prodId)]
            };
        case 'ADD_PROD':
            // const addNewProd = action.payload;
            console.log(action.payload);
            // console.log('added ');
            return {
                ...state, 
                prods: [ ...state.prods, action.payload  ]
            };  
           
        default:
            return state;
    }
};

export default reducers;
