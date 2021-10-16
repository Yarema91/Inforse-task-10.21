
const initialState = {
    prods: [
        {
            id: 1,
            imageUrl: "some url here",
            name: "Product name",
            count: 4,
            size: {
                "width": 200,
                "height": 200
            },
            weight: "200g",
            comments: ["CommentModel", "CommentModel"]
        },
        {
            id: 2,
            imageUrl: "some url here2",
            name: "Product name2",
            count: 6,
            size: {
                "width": 400,
                "height": 400
            },
            weight: "400g",
            comments: ["CommentModel", "CommentModel"]
        },
    ]
};

const reducers = (state = initialState, action) => {
    switch (action.type) {
        case 'PRODS_LOADED':
            return {
                prods: action.payload
            };
        default:
            return state;
    }
};

export default reducers;
