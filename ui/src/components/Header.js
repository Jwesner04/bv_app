// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container, Navbar, Nav, Form, FormControl, Button, Row } from 'react-bootstrap';

import Home from "../pages/Home";
import Election from "../pages/Election";
import ElectionResults from '../pages/ElectionResults';
import Vote from "../pages/Vote";
import VoteSub from "../pages/VoteSub";
import About from "../pages/About";
import NoPage from "../pages/NoPage";

const Header = () => {
    return (
        <header>
            <Container fluid>
                <Row>
                    <BrowserRouter>
                        <Navbar collapseOnSelect bg="dark" expand="lg" variant="dark" >
                            <Container fluid>
                                <Navbar.Brand as={Link} to="/home">Blockchain Voting Application</Navbar.Brand>
                                <Navbar.Toggle aria-controls="navbarScroll" />
                                <Navbar.Collapse id="navbarScroll">
                                    <Nav className="me-auto my-2 my-lg-1" style={{ maxHeight: '150px' }} navbarScroll>
                                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                        <Nav.Link as={Link} to="/election" >Election</Nav.Link>
                                        <Nav.Link as={Link} to="/vote" >Vote</Nav.Link>
                                        <Nav.Link as={Link} to="/about" >About</Nav.Link>
                                    </Nav>
                                    <Form className="d-flex">
                                        <FormControl type="search" placeholder="Search" className="me-2" aria-label="Search" />
                                        <Button variant="light">Search</Button>
                                    </Form>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/election" element={<Election />} />
                            <Route path="/vote" element={<Vote />} />
                            <Route path="/vote/election/*" element={<VoteSub />} />
                            <Route path="/vote/results/*" element={<ElectionResults />} />
                            <Route path="about" element={<About />} />
                            <Route path="*" element={<NoPage />} />
                        </Routes>
                    </BrowserRouter>
                </Row>
            </Container>
        </header >
    )
}

export default Header;