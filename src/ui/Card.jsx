import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import Modal from './Modal';

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
import React, { Component } from 'react';

export default class Card extends Component {
    state = { show: false };
    render() {
        return (
            <>
                <Col
                    md={4}
                    onClick={() => this.setState({ show: !this.state.show })}
                >
                    <div className="card-inner rounded-2 overflow-hidden bg-body-secondary">
                        <img
                            className="img-fluid"
                            src={this.props.img}
                            alt="portfolio-img"
                        />
                        <div className="card-layer d-flex justify-content-center align-items-center">
                            <FontAwesomeIcon
                                className="display-1  text-white"
                                icon={faPlus}
                            />
                        </div>
                    </div>
                </Col>
                <Modal show={this.state.show} img={this.props.img} />
            </>
        );
    }
}
