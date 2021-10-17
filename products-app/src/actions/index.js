const prodsLoaded = (newProds) => {
    return {
        type: 'PRODS_LOADED',
        payload: newProds
    }
};


export const deleteProd = (prodId) => {
    return {
        type: "DELETE_PROD",
        payload: prodId
    }
};

export {
    prodsLoaded 
};
