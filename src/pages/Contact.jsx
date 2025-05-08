import React from "react";
import { Container, Row, Col, Form, Button, Card } from "react-bootstrap";
import Navbar from '../component/layout/Navbar';
import Footer from '../component/Footer';

const Contact = () => {
    return (
        <>
            <Navbar />
            <div style={{
                background: 'linear-gradient(to right, #F0FFF0, #E8F5E9)',
                color: '#1B5E20',
                paddingTop: '100px', // 👈 solve overlap with navbar
                minHeight: '100vh'
            }}>
                {/* Banner */}
                <div className="text-center py-5" style={{ background: 'linear-gradient(135deg, #AED581, #DCE775)' }}>
                <h2 className="fw-bold text-primary fs-1">Contact</h2>
                    {/* <p className="text-dark fs-5">Home &gt; Contact</p> */}
                   

                </div>

                {/* Info Cards */}
                <Container className="my-5">
                    <Row className="g-4 justify-content-center align-items-stretch">
                        <Col md={4}>
                            <Card className="h-100 shadow-sm text-center border-0" style={{ background: 'linear-gradient(to bottom right, #F1F8E9, #DCEDC8)' }}>
                                <Card.Body>
                                    <img src="https://img.icons8.com/ios-filled/50/388E3C/phone.png" alt="Phone" className="mb-3" />
                                    <h5 className="text-dark">Phone Number</h5>
                                    <p className="text-muted mb-0">(+91) 8386088930</p>
                                    <p className="text-muted">(+91) 8005507891</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 shadow-sm text-center border-0" style={{ background: 'linear-gradient(to bottom right, #FFFDE7, #FFF9C4)' }}>
                                <Card.Body>
                                    <img src="https://img.icons8.com/ios-filled/50/FFB300/email.png" alt="Email" className="mb-3" />
                                    <h5 className="text-dark">Email Address</h5>
                                    <p className="text-muted mb-0">info@luckbychance.com</p>
                                    <p className="text-muted">dineshbaghana@gmail.com</p>
                                </Card.Body>
                            </Card>
                        </Col>

                        <Col md={4}>
                            <Card className="h-100 shadow-sm text-center border-0" style={{ background: 'linear-gradient(to bottom right, #E1F5FE, #B3E5FC)' }}>
                                <Card.Body>
                                    <img src="https://img.icons8.com/ios-filled/50/0288D1/map-marker.png" alt="Location" className="mb-3" />
                                    <h5 className="text-dark">Location</h5>
                                    <p className="text-muted">Zone-1, GIFT SEZ, GIFT House, Block 12, Road 1-D,</p>
                                    <p className="text-muted"> Tec-City, Gandhinagar, Gujarat 382050</p>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                {/* Contact Form */}
                <Container className="pb-5">
                    <Card className="shadow-lg mx-auto border-0" style={{ maxWidth: "850px", background: 'linear-gradient(to bottom right, #F1F8E9, #DCEDC8)' }}>
                        <Card.Body>
                            <h4 className="mb-4 text-center text-success fw-bold">Get In Touch With Us</h4>
                            <Form>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Control type="text" placeholder="First Name" className="rounded-pill border-success shadow-sm" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control type="text" placeholder="Last Name" className="rounded-pill border-success shadow-sm" />
                                    </Col>
                                </Row>
                                <Row className="mb-3">
                                    <Col md={6}>
                                        <Form.Control type="email" placeholder="Email Address" className="rounded-pill border-success shadow-sm" />
                                    </Col>
                                    <Col md={6}>
                                        <Form.Control type="text" placeholder="Phone Number" className="rounded-pill border-success shadow-sm" />
                                    </Col>
                                </Row>
                                <Form.Group className="mb-4">
                                    <Form.Control as="textarea" rows={4} placeholder="Write Your Message" className="border-success shadow-sm" />
                                </Form.Group>
                                <div className="text-center">
                                    <Button variant="success" type="submit" className="px-5 rounded-pill shadow-sm">
                                        Submit to us »
                                    </Button>
                                </div>
                            </Form>
                        </Card.Body>
                    </Card>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default Contact;
