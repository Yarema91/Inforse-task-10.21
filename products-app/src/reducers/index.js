
const initialState = {
    prods: []
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
