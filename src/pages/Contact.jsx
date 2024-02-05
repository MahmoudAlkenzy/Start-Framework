import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';

export default class Contact extends Component {
    state = { userName: '', userAge: '', userEmail: '', userPassword: '' };
    render() {
        return (
            <section className="py-5">
                <div className="text-center heading mb-5 text-main">
                    <h2 className="fs-1 fw-bold">CONATCT SECTION</h2>
                    <span className="">
                        <FontAwesomeIcon icon={faStar} />
                    </span>
                </div>
                <Container>
                    <form className="w-50 mx-auto d-flex flex-column gap-5">
                        <div className="position-relative">
                            <input
                                value={this.state.userName}
                                placeholder="userName"
                                type="text"
                                className="z-1 position-relative"
                                onChange={(e) =>
                                    this.setState({ userName: e.target.value })
                                }
                            />
                            <label
                                className={`position-absolute start-0 bottom-${
                                    this.state.userName.length ? '100' : '0'
                                } z-0`}
                                htmlFor=""
                            >
                                UserName:
                            </label>
                        </div>
                        <div className="position-relative">
                            <input
                                value={this.state.userAge}
                                placeholder="userAge"
                                type="number"
                                className="z-1 position-relative"
                                name=""
                                onChange={(e) =>
                                    this.setState({ userAge: e.target.value })
                                }
                            />
                            <label
                                className={`position-absolute start-0 bottom-${
                                    this.state.userAge.length ? '100' : '0'
                                } z-0`}
                                htmlFor=""
                            >
                                userAge:
                            </label>
                        </div>
                        <div className="position-relative">
                            <input
                                value={this.state.userEmail}
                                placeholder="userEmail"
                                type="text"
                                className="z-1 position-relative"
                                name=""
                                onChange={(e) =>
                                    this.setState({ userEmail: e.target.value })
                                }
                            />
                            <label
                                className={`position-absolute start-0 bottom-${
                                    this.state.userEmail.length ? '100' : '0'
                                } z-0`}
                                htmlFor=""
                            >
                                userEmail:
                            </label>
                        </div>
                        <div className="position-relative">
                            <input
                                value={this.state.userPassword}
                                placeholder="userPassword"
                                className="z-1 position-relative"
                                type="password"
                                name=""
                                onChange={(e) =>
                                    this.setState({
                                        userPassword: e.target.value,
                                    })
                                }
                            />
                            <label
                                className={`position-absolute start-0 bottom-${
                                    this.state.userPassword.length ? '100' : '0'
                                } z-0`}
                                htmlFor=""
                            >
                                userPassword:
                            </label>
                        </div>
                    </form>
                </Container>
            </section>
        );
    }
}
