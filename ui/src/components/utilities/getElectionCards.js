// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React from 'react';

import getElectionNames from "./getElectionNames"
import getElection from "./getElection"

import { Col, Card } from 'react-bootstrap';

const getElectionCards = async () => {
    const cardColorPalette = ['#FFEBEE', '#E8EAF6', '#E1F5FE', '#E0F2F1', '#E0F7FA', '#F1F8E9', '#FFF8E1', '#FFF3E0', '#FBE9E7', '#EFEBE9'];
    let currentColor = 0;
    const electionNames = await getElectionNames();

    let cards = [];
    if (electionNames.length > 0) {
        for (let electionName of electionNames) {
            if (currentColor > cardColorPalette.length) {
                currentColor = 0;
            }

            const election = await getElection(electionName);
            cards.push([
                <Col key={election.electionName}>
                    <a href={'/vote/election/?election=' + election.electionName} role='button' style={{ textDecoration: 'none', color: '#212121' }}>
                        <Card style={{ backgroundColor: `${cardColorPalette[currentColor]}` }}>
                            <Card.Header as="h5">Election Name: {election.electionName}</Card.Header>
                            <Card.Body>
                                <Card.Title>Election Info: {election.electionType}</Card.Title>
                                <Card.Text>
                                    Unique Id: {election.electionId} <br></br>
                                    Start Date: {election.startDate} <br></br>
                                    End Date: {election.endDate}<br></br>
                                </Card.Text>
                                <a className='btn btn-outline-dark btn-sm' href={'/vote/election/?election=' + election.electionName} role='button' style={{ marginRight: '10px' }}>
                                    Vote
                                </a>
                                <a className='btn btn-outline-dark btn-sm' href={'/vote/results/?election=' + election.electionName} role='button' >
                                    View Results
                                </a>
                            </Card.Body>
                        </Card>
                    </a>
                </Col >
            ]);

            currentColor += 1;
        }
    }

    return cards;
}

export default getElectionCards;