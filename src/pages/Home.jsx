import React, { Component } from 'react';
import Hero from '../imgs/avataaars.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Home extends Component {
    render() {
        return (
            <section className="home text-white">
                <Container>
                    <Row className="justify-content-center gap-4  flex-column align-items-center">
                        <Col md={3}>
                            <img className="img-fluid" src={Hero} alt="hero" />
                        </Col>
                        <Col md={5} className=" text-center">
                            <div className="text-center heading mb-5 ">
                                <h2 className="fs-1 fw-bold">
                                    START FRAMEWORK
                                </h2>
                                <span className="">
                                    <FontAwesomeIcon icon={faStar} />
                                </span>
                            </div>
                            <p className="w-auto m-auto">
                                Graphic Artist - Web Designer - Illustrator
                            </p>
                        </Col>
                        <Col md={4}></Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
