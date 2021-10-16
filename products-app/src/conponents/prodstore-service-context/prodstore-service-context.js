import React from "react";

const {
    Provider: ProdstoreServiceProvider,
    Consumer: ProdstoreServiceConsumer
} = React.createContext();
// console.log('Provider');

export {
    ProdstoreServiceProvider,
    ProdstoreServiceConsumer
};
