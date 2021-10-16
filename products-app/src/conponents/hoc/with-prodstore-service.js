import React from "react";
import { ProdstoreServiceConsumer } from "../prodstore-service-context";

const withProdstoreService = () => (Wrapped) => {
    return (props) => {
        return (
            <ProdstoreServiceConsumer >
                {
                    (prodstoreService) => {
                        return (<Wrapped {...props}
                            prodstoreService={prodstoreService} />);
                    }
                }
            </ProdstoreServiceConsumer>

        )

    }
};

export default withProdstoreService;