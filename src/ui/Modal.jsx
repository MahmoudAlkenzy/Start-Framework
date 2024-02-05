import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import React, { Component } from 'react';
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default class Modall extends Component {
    state = { show: true };

    render() {
        return (
            <>
                <Modal
                    onHide={() => this.setState({ show: !this.state.show })}
                    {...this.props}
                    show={this.state.show === this.props.show}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    animation={false}
                >
                    <Modal.Body className="p-0">
                        <img
                            className="w-100"
                            src={this.props.img}
                            alt="port"
                        />
                    </Modal.Body>
                </Modal>
            </>
        );
    }
}
