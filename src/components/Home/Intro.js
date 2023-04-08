import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
const Intro = () => {
    return (
        <>
            <Row xs={1} md={2} className="g-4">

                <Col>
                    <Card style={{
                        backgroundColor: "#35175b",
                        margin: "4rem 0rem 2rem 6rem",
                        opacity: "0.7",
                        height: "20rem"
                    }}>
                        <Card.Body style={{ color: "white" }}>
                            <Card.Title style={{ color: "#cd5ff7", fontWeight: "bold", fontSize: "2rem" }}>Preface</Card.Title>
                            <Card.Text className='white text-md' style={{ fontSize: "1.5rem" }}>
                                I fell in love with programming and I have at least learnt Something, I think.....<br />
                                something more than Zero in<br />
                                <b className="purple" style={{ fontSize: "1.5rem" }}> C++, Javascript, React, Recoil and PostgresSQL. </b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} xl={6} className="myAvtar">
                    <Tilt style={{ marginTop: "-4rem" }}>
                        <img src={myImg} className="img-fluid" alt="avatar" />
                    </Tilt>
                </Col>
                <Row>
                    <Col md={12} className="home-about-social">
                        <h1>FIND ME ON</h1>
                        <p>
                            Feel free to <span className="purple">connect </span>with me
                        </p>
                        <ul className="home-about-social-links">
                            <li className="social-icons">
                                <a
                                    href="https://github.com/abhigupta010"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <AiFillGithub />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.linkedin.com/in/abhishek-gupta-0884811a9/"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour  home-social-icons"
                                >
                                    <FaLinkedinIn />
                                </a>
                            </li>
                            <li className="social-icons">
                                <a
                                    href="https://www.instagram.com/abhiabhidot"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="icon-colour home-social-icons"
                                >
                                    <AiFillInstagram />
                                </a>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Row>
        </>
    )
}
export default Intro;