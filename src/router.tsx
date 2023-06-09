import React from 'react';
import { createBrowserRouter } from "react-router-dom";
import Posts from './posts';
import About from './about';
import Template from './template'

const Router = createBrowserRouter([
    {
        path: "/",
        element: <Template><Posts /></Template>,
    },
    {
        path: "/About",
        element: <Template><About /></Template>,
    },
]);

export default Router;