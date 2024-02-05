import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class About extends Component {
    render() {
        return (
            <section className="about d-flex flex-column justify-content-center align-items-center text-white ">
                <Container className="px-5">
                    <div className="text-center heading mb-4 ">
                        <h2 className="fs-1 fw-bold ">ABOUT COMPONENT</h2>
                        <span className="border-black">
                            <FontAwesomeIcon className="" icon={faStar} />
                        </span>
                    </div>
                    <Row className="px-5">
                        <Col md={6}>
                            <p>
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </Col>
                        <Col md={6}>
                            <p>
                                Freelancer is a free bootstrap theme created by
                                Route. The download includes the complete source
                                files including HTML, CSS, and JavaScript as
                                well as optional SASS stylesheets for easy
                                customization.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </section>
        );
    }
}
