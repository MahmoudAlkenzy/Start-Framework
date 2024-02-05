import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import img1 from '../imgs/6.jpg';
import img2 from '../imgs/5.jpg';
import img3 from '../imgs/4.jpg';
import Card from '../ui/Card';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default class Portfolio extends Component {
    render() {
        return (
            <section className="Portfolio py-5 ">
                <Container>
                    <div className="text-center heading mb-4  text-main">
                        <h2 className="fs-1 fw-bold ">PORTFOLIO COMPONENT</h2>
                        <span className="border-black">
                            <FontAwesomeIcon className="" icon={faStar} />
                        </span>
                    </div>
                    <Row className="g-4">
                        <Card img={img1} />
                        <Card img={img2} />
                        <Card img={img3} />
                        <Card img={img1} />
                        <Card img={img2} />
                        <Card img={img3} />
                    </Row>
                </Container>
            </section>
        );
    }
}
