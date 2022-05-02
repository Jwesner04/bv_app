// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React from 'react'
import { Container, Row } from 'react-bootstrap';

import Header from "./components/Header"
import Footer from "./components/Footer";

export default function App() {
    return (
        <Container fluid style={{ minHeight: 'calc(100vh - 40px)' }}>
            <Row>
                <div>
                    <Header />
                </div>
                <div>
                    <Footer />
                </div>
            </Row>
        </Container>
    )
};

