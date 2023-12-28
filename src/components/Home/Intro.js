import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import PortfolioImage from "../../Assets/PortfolioImage.JPG";
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
                        margin: "2rem 1rem 0rem 1rem",
                        opacity: "0.7",
                        height: "auto"
                    }}>
                        <Card.Body style={{ color: "white" }}>
                            <Card.Title style={{ color: "#cd5ff7", fontWeight: "bold", fontSize: "2rem" }}>Preface</Card.Title>
                            <Card.Text className='white text-md' style={{ fontSize: "1.5rem" }}>
                                I fell in love with programming and I have at least learnt Something, I think.....<br />
                                something more than Zero in<br />
                                <b className="purple" style={{ fontSize: "1.5rem" }}>Javascript, React, Recoil, Redux and PostgresSQL.... </b>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3} xl={6} className="myAvtar">
                    <Tilt style={{ marginTop: "-1rem",width:"10rem",height:"10rem",borderRadius:"50%" }}>
                        <img src={PortfolioImage} className="img-fluid" alt="avatar" style={{ marginTop: "9%",marginLeft:"67%",width:"10rem",height:"10rem",borderRadius:"50%" }}/>
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
                                    href="https://www.instagram.com/dustyproffessor"
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