import { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebook,
    faLinkedinIn,
    faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {
    render() {
        return (
            <footer>
                <div className="bg-main text-white py-5">
                    <Container>
                        <Row>
                            <Col md={4}>
                                <div className="inner text-center">
                                    <h2>LOCATION</h2>
                                    <p>2215 John Daniel Drive</p>
                                    <span>Clark, MO 65243</span>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="inner text-center">
                                    <h2>AROUND THE WEB</h2>
                                    <ul className="list-unstyled mt-4 d-flex gap-4 justify-content-center ">
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faFacebook}
                                            />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon
                                                icon={faLinkedinIn}
                                            />
                                        </li>
                                        <li>
                                            <FontAwesomeIcon icon={faGlobe} />
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                            <Col md={4}>
                                <div className="inner text-center">
                                    <h2>ABOUT FREELANCER</h2>
                                    <p>
                                        Freelance is a free to use, licensed
                                        Bootstrap theme created by Route
                                    </p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className="inner bg-dark text-white py-3 text-center">
                    <p>Copyright © Your Website 2021</p>
                </div>
            </footer>
        );
    }
}
