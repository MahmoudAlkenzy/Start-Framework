import React, { Component } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './ui/Layout';
import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Home from './pages/Home';

const router = createBrowserRouter([
    {
        element: <Layout />,
        path: '/',
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'about',
                element: <About />,
            },
            {
                path: 'portfolio',
                element: <Portfolio />,
            },
            {
                path: 'contact',
                element: <Contact />,
            },
        ],
    },
]);

export default class App extends Component {
    render() {
        return <RouterProvider router={router} />;
    }
}
