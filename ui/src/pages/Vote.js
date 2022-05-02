// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React, { useState, useEffect } from 'react';
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Container, Row, CardGroup, Card, Button } from 'react-bootstrap';

import headingImage from '../images/pexels-cottonbro-4669109.jpg';

import getElectionCards from '../components/utilities/getElectionCards';

// Styles imported
import '../styles/Vote.css';

// Reference: https://atomizecode.com/docs/react/grid
const Vote = () => {
    const [cards, setCards] = useState([]);

    useEffect(() => {
        displayElectionCards();
    }, []);


    const displayElectionCards = async () => {
        const cardsLocal = await getElectionCards();
        if (cardsLocal.length) {
            setCards(cardsLocal);
        }
    }

    return (
        <Container fluid style={{ backgroundColor: '#EFEBE9' }}>
            <Row>
                <div
                    className='p-4 text-center  bg-image img-fluid w-100'
                    style={{ backgroundImage: `url(${headingImage})` }}
                >
                    <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)' }}>
                        <div className='d-flex justify-content-center align-items-center h-100'>
                            <div className='text-white'>
                                <h1 className='mb-3'>Vote Today</h1>
                                <h4 className='mb-3'>Ready to vote? Click an Election Card to get started!</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
            <Row className="spacer15"></Row>
            <Row className="spacer15"></Row>
            <Row>
                <CardGroup>
                    <Card className="text-center" style={{ backgroundColor: '#D7CCC8', marginRight: '50px' }}>
                        <Card.Header className="h4">Reload Election Cards Here!</Card.Header>
                        <Card.Body>
                            <Card.Title>Election Card Description</Card.Title>
                            <Card.Text className="h6">
                                Election cards are selectable items that will direct you to a special
                                election site allowing you to choose a candidate to vote for.
                            </Card.Text>
                            <Button size="lg" variant="outline-dark" onClick={async () => await displayElectionCards()}>Reload Election Cards</Button>
                        </Card.Body>
                        <Card.Footer className="text-muted">Updated a few seconds ago</Card.Footer>
                    </Card>
                    <Card className="text-center" style={{ backgroundColor: '#D7CCC8' }}>
                        <Card.Header className="h4">Don't See Election Cards?</Card.Header>
                        <Card.Body>
                            <Card.Title>Try Creating Your Own</Card.Title>
                            <Card.Text className="h6">
                                If cards are not displaying below, this means no elections are available at this time.
                                Try coming back later or create your own election.
                            </Card.Text>
                            <a className='btn btn-outline-dark btn-lg' href='/election' role='button'>
                                Create Your Own Election Here
                            </a>
                        </Card.Body>
                        <Card.Footer className="text-muted">Make it happen!</Card.Footer>
                    </Card>

                </CardGroup>
            </Row>
            <Row className="spacer15"></Row>
            <Row className="spacer15"></Row>
            <Row xs={1} md={3} className="g-4 style={{ backgroundColor: '#B2DFDB' }}">
                {cards.map((item, index) => (
                    <div key={index}>
                        {item}
                    </div>))}
            </Row>
            <Row className="spacer15"></Row>
            <Row className="spacer15"></Row>
        </Container >
    );

}

export default Vote;