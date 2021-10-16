const prodsLoaded = (newProds) => {
    return {
        type: 'PRODS_LOADED',
        payload: newProds
    }
};

export {
    prodsLoaded 
};
