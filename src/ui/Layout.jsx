import { Outlet } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer';
import React, { Component } from 'react';

export default class Layout extends Component {
    render() {
        return (
            <>
                <NavBar />
                <Outlet />
                <Footer />
            </>
        );
    }
}
