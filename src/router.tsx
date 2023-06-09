import React from 'react';
import { createHashRouter } from "react-router-dom";
import Posts from './posts';
import About from './about';
import Users from './users';
import Template from './template'

const Router = createHashRouter([
    {
        path: "/",
        element: <Template><Posts /></Template>,
    },
    {
        path: "/About",
        element: <Template><About /></Template>,
    },
    {
        path: "/Users/:UserId",
        element: <Template><Users /></Template>,
    },
]);

export default Router;