import React, { Component } from 'react';

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';

export default class NavBar extends Component {
    state = { navPadding: 4 };
    navPosition = () => {
        if (window.scrollY < 50) this.setState({ navPadding: 4 });
        else this.setState({ navPadding: 2 });
    };
    componentDidMount() {
        document.addEventListener('scroll', this.navPosition);
    }
    componentWillUnmount() {
        document.removeEventListener('scroll', this.navPosition);
    }
    render() {
        return (
            <>
                <Navbar
                    sticky="top"
                    className={`  bg-main p-${this.state.navPadding} `}
                    data-bs-theme="dark"
                >
                    <Container className="px-5 ">
                        <Navbar.Brand>
                            <Link to="/" className="text-white fs-2 fw-bold">
                                START FRAMEWORK
                            </Link>
                        </Navbar.Brand>
                        <Navbar className="ms-auto text-uppercase  gap-3 fs-6 fw-bold text-decoration-none">
                            <NavLink to="about">About</NavLink>
                            <NavLink to="portfolio">Portfolio</NavLink>
                            <NavLink to="contact">Contact</NavLink>
                        </Navbar>
                    </Container>
                </Navbar>
            </>
        );
    }
}
