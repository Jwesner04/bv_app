// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React from 'react'
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';

// Styles imported
import '../styles/Home.css';

// Images imported
import carouselImage1 from '../images/election-2020-5102700_1920.png';
import carouselImage2 from '../images/elections-1496436.png';
import carouselImage3 from '../images/ballot-4751566_1920.png';

const Home = () => {
    return (
        <Container fluid>
            <Row style={{ backgroundColor: '#F8F8FF' }}>
                <Col md={{ span: 8, offset: 2 }}>
                    <Carousel variant="dark" fade interval={3000} >
                        <Carousel.Item>
                            <img
                                src={carouselImage1}
                                alt="First slide"
                                width="100%"
                                height="500"
                            />
                            <Carousel.Caption >
                                <div className="transparent">
                                    <h2>Re-thinking The Way We Vote</h2>
                                    <p>In an age where technology has quickly adapted in the most sensitive areas of our lives,
                                        It makes sense to change the way we vote. Anyone could go to the voting site, and in a couple
                                        clicks submit their ballot. Think it's not safe or impossible to guarantee the integrity of elections?
                                        Quite the opposite. Read more in the About page to understand how a system like this would
                                        carry more integrity than the way we currently do things now.
                                    </p>
                                </div>

                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={carouselImage2}
                                alt="Second slide"
                                width="100%"
                                height="500"
                            />

                            <Carousel.Caption>
                                <div className="transparent">
                                    <h3>Imagine No More Paper Ballots Into A Box</h3>
                                    <p>It took one of the largest banks only 5 years to get
                                        80% of its customers to accept online banking.
                                        The positives of such a system outweighed
                                        the negatives. Today, there are procedures in place
                                        for identifying and recovering from fraudulent activity.
                                        Voting on a system that allows unchangable transactions
                                        and allowing anyone to become a validator on the system,
                                        brings accountability and safeguards to those who want to
                                        cheet.
                                    </p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                src={carouselImage3}
                                alt="Third slide"
                                width="100%"
                                height="500"
                            />

                            <Carousel.Caption>
                                <div className="transparent">
                                    <h2>Positioned To Make Voting Easy!</h2>
                                    <p>With a system as agile as this, it makes it easy to track discrepencies
                                        and redo an election rather quickly. Using the image processing available
                                        today, it is easy to identify a user using facial recognition against
                                        a valid U.S. ID, and ensuring double dippers are avoided. Being
                                        strategic in cutting back on paper waste also couldn't come at a better
                                        time.
                                    </p>
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
            </Row>
            <Row className="spacer15 bg-light"></Row>
            <Row style={{ backgroundColor: '#FFFAFA' }}>
                <Col>
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Vote Today</Card.Title>
                            <Card.Text>
                                It's as easy as selecting an Election Card and submitting your vote.
                            </Card.Text>
                            <a className='btn btn-outline-dark btn-lg' href='/vote' role='button'>Vote Here</a>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
                <Col>
                    <Card className="text-center">
                        <Card.Header></Card.Header>
                        <Card.Body>
                            <Card.Title>Create An Election</Card.Title>
                            <Card.Text>
                                Making it simple to host an election of any type.
                            </Card.Text>
                            <a className='btn btn-outline-dark btn-lg' href='/election' role='button'>Submit Election Here</a>
                        </Card.Body>
                        <Card.Footer className="text-muted"></Card.Footer>
                    </Card>
                </Col>
            </Row>
            <Row className="spacer15 bg-light"></Row>
        </Container >
    );
};

export default Home;