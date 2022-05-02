// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React, { useState, useEffect } from 'react';
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Container, Row, Col, Card } from 'react-bootstrap';
import getElection from '../components/utilities/getElection';

// Styles imported

// Reference: https://atomizecode.com/docs/react/grid
const ElectionResults = () => {
    const [election, setElection] = useState([]);

    useEffect(() => {
        getElectionStats();
    }, []);


    const getElectionStats = async () => {
        const queryParams = new URLSearchParams(window.location.search);
        const electionName = queryParams.get('election');

        if (electionName) {
            const electionLocal = await getElection(electionName);
            if (electionLocal) {
                setElection(electionLocal);
            }
            else {
                alert("Election Not Found");
            }

        }
    }

    const displayCandidateInfo = () => {
        let electionLocal;
        if (election.names) {
            electionLocal = (<div>
                {election.names.map((item, idx) => (
                    <Card.Text key={idx} style={{ paddingBottom: '1px' }}>
                        Candidate Name: {item} <br></br>
                        Title: {election.titles[idx]} <br></br>
                        Party: {election.parties[idx]} <br></br>
                        Votes: {election.votes[idx]} <br></br>
                    </Card.Text>))}
            </div>)
        }

        return electionLocal;
    }

    return (
        <Container fluid>
            <Row className="spacer15" style={{ backgroundColor: '#EEEEEE' }}></Row>
            <Row style={{ backgroundColor: '#EEEEEE' }}>
                <Col>
                    <Card style={{ backgroundColor: '#CFD8DC' }}>
                        <Card.Header as="h5">Election Name: {election.electionName}</Card.Header>
                        <Card.Body>
                            <Card.Title>Election Info: {election.electionType}</Card.Title>
                            <Card.Text>
                                Unique Id: {election.electionId} <br></br>
                                Start Date: {election.startDate} <br></br>
                                End Date: {election.endDate}<br></br>
                            </Card.Text>
                            {displayCandidateInfo()}
                            <div style={{ paddingTop: '10px' }}>
                                <a className='btn btn-outline-dark btn-lg' href={'/vote'} role='button' >
                                    Go Back To Voting Page
                                </a>
                            </div>
                        </Card.Body>

                    </Card>
                </Col >

            </Row>
            <Row className="spacer15" style={{ backgroundColor: '#EEEEEE' }}></Row>
        </Container >
    );

}

export default ElectionResults;