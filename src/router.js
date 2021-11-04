import React from "react";
import Loadable from "react-loadable";

const Loading = () => {
    return <div className="vnt-loading"></div>;
}

const NotFound = Loadable({
    loader: () => import("./components/notfound"),
    loading: Loading,
});

export const appRoutes = [
    // 404
    {
        path: "/404",
        name: "NotFound",
        component: NotFound,
        exact: false,
    },
];
