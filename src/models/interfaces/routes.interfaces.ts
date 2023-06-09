import React from "react";

export interface IRoute {
    component: React.ComponentType<any>;
    Layout?: React.ComponentType<any>;
    layoutProps?: any;
}