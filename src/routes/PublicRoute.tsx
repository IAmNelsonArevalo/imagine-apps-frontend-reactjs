import React from "react";
/** Interfaces & Types */
import { IRoute } from "models/interfaces/routes.interfaces";

const PublicRoute: React.FC<IRoute> = ({ component, layoutProps, Layout }) => {
    /** Variables */
    const Component = component;
    return (
        <React.Fragment>
            {
                Layout ? (
                    <Layout {...layoutProps}>
                        <Component />
                    </Layout>
                ) : (
                    <Component />
                )
            }
        </React.Fragment>
    );
}

export default PublicRoute;