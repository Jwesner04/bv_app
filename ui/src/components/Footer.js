// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React from 'react';

// References: https://mdbootstrap.com/docs/b5/react/navigation/footer/
import { Container, Row } from 'react-bootstrap'

// References: https://icons.getbootstrap.com/
import { Facebook, Twitter, Google, Instagram, Linkedin, Github } from 'react-bootstrap-icons';

// References: https://react-bootstrap.github.io/components/cards/#header-and-footer
const Footer = () => {
    return (
        <footer>
            <Container fluid>
                <Row className=" text-center text-muted p-3" style={{ backgroundColor: '#212529' }}>
                    <section className='mb-4'>
                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#3b5998' }}
                            href='#!'
                            role='button'
                        >
                            <Facebook />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#55acee' }}
                            href='#!'
                            role='button'
                        >
                            <Twitter />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#dd4b39' }}
                            href='#!'
                            role='button'
                        >
                            <Google />
                        </a>
                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#ac2bac' }}
                            href='#!'
                            role='button'
                        >
                            <Instagram />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#0082ca' }}
                            href='https://www.linkedin.com/in/jonathan-wesner-81063668/'
                            role='button'
                        >
                            <Linkedin />
                        </a>

                        <a
                            className='btn btn-primary btn-floating m-1'
                            style={{ backgroundColor: '#333333' }}
                            href='https://github.com/jwesner04'
                            role='button'
                        >
                            <Github />
                        </a>
                    </section>
                    <p>
                        © 2022 Copyright: Blockchain Voting Application
                    </p>
                </Row>
            </Container >
        </footer>
    );
}

export default Footer;