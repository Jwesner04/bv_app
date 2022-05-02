// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React, { useState } from 'react';
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Container, Row, Col, Form, Button, Card, Dropdown } from 'react-bootstrap';
// References to Icons: https://icons.getbootstrap.com/
import { PlusSquareFill, TrashFill } from 'react-bootstrap-icons';

// Styles imported
import '../styles/Election.css';
// References: https://unsplash.com/s/photos/election
import headingImage from '../images/josh-carter-yQvcqyIm79U-unsplash.jpg';

import setElection from '../components/utilities/setElection';
import ElectionType from '../data/ElectionType.json';
import CandidateTitles from '../data/CandidateTitleType.json';
import CandidateParty from '../data/CandidatePartyType.json';


/************************************************************************
 * Election() : page is used to submit an election to the blockchain
 * @param None
 * @return Election Component used for returning to the "Election" page
 ****/
const Election = () => {
    const [enableCandidateForm, setCandidateForm] = useState(false);
    const [candidates, setCandidates] = useState([]);
    const [numCandidates, setNumCandidates] = useState(0);
    const [displayCandidateList, setCandidateDisplayList] = useState([]);
    const [electionName, setElectionName] = useState('');
    const [electionType, setElectionType] = useState('');
    const [electionStartDate, setElectionStartDate] = useState('');
    const [electionEndDate, setElectionEndDate] = useState('');
    const [candidateName, setCandidateName] = useState('');
    const [candidateTitle, setCandidateTitle] = useState('');
    const [candidateParty, setCandidateParty] = useState('');

    const addCandidate = () => {
        // set candidate accordingly and push back to a setCandidates
        const candidate = { name: candidateName, title: candidateTitle, party: candidateParty }
        setNumCandidates(numCandidates + 1);
        // error check fields
        if (!candidate.name.trim()) {
            alert("WARNING: Candidate needs a name. Candidate not added");
            return;
        }

        setCandidates([...candidates, candidate]);

        // collapse candidate form
        setCandidateForm(!enableCandidateForm);

        setCandidateDisplayList([...displayCandidateList,
        <Dropdown.ItemText key={candidate.name}>
            {candidate.name} : {candidate.title} : {candidate.party} < TrashFill type="submit" />
        </Dropdown.ItemText>]);
    }

    const displayCandidates = () => {
        // References: https://react-bootstrap.github.io/components/dropdowns/#dark-dropdowns
        return (
            <Dropdown>
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="dark">
                    Submitted Candidates
                </Dropdown.Toggle>

                <Dropdown.Menu variant="dark">
                    {displayCandidateList.map((item, index) => (
                        <div key={index}>
                            {item}
                        </div>))}
                </Dropdown.Menu>
            </Dropdown>
        )
    }

    const candidateForm = () => {
        return (
            enableCandidateForm && (
                <Card>
                    <Card.Body>
                        <Form.Group className="mb-3">
                            <Form.Label>Candidate Name</Form.Label>
                            <Form.Control placeholder="Candidate Name" onChange={(e) => { setCandidateName(e.target.value) }} />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Candidate Title</Form.Label>
                            <Form.Select onChange={(e) => { setCandidateTitle(e.target.value) }}>
                                {CandidateTitles.titles.map((item) => (
                                    <option key={item.key}>
                                        {item.title}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Candidate Party</Form.Label>
                            <Form.Select onChange={(e) => { setCandidateParty(e.target.value) }}>
                                {CandidateParty.parties.map((item) => (
                                    <option key={item.key}>
                                        {item.party}
                                    </option>
                                ))}
                            </Form.Select>
                        </Form.Group>
                        <Button variant="dark" onClick={() => { addCandidate() }}>Add</Button>
                    </Card.Body>
                </Card>
            )
        );
    }

    const saveElection = async () => {

        const result = await setElection(electionName, electionType, electionStartDate, electionEndDate, candidates, numCandidates);

        if (result) {
            window.location.href = '/vote'
        }
    }

    // References: https://cavotes.org/types-elections
    return (
        <Container fluid style={{ backgroundColor: '#EFEBE9' }}>
            <Row style={{ backgroundImage: `url(${headingImage})`, color: '#212529' }} className="heading" >
                <Col>
                    <h3 className="textOverride">Create Election</h3>
                </Col>
            </Row>
            <Row className="spacer15"></Row>
            <Row className="spacer15"></Row>
            <Row>
                <Col>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label>Election Name</Form.Label>
                                    <Form.Control placeholder="Election Name" onChange={(e) => { setElectionName(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Election Type</Form.Label>
                                    <Form.Select onChange={(e) => { setElectionType(e.target.value) }}>
                                        {ElectionType.types.map((item) => (
                                            <option key={item.key}>
                                                {item.type}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Election Start Date</Form.Label>
                                    <Form.Control type="date" placeholder="Start Date" onChange={(e) => { setElectionStartDate(e.target.value) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>Election End Date</Form.Label>
                                    <Form.Control type="date" placeholder="End Date" onChange={(e) => { setElectionEndDate(e.target.value) }} />
                                </Form.Group>
                                <Card className="CandidateForm">
                                    <Card.Body style={{ width: '27rem' }}>
                                        <Form.Group className="mb-3">
                                            <Form.Label>Add Candidate <PlusSquareFill type="submit" onClick={() => { setCandidateForm(!enableCandidateForm) }} /> </Form.Label>
                                            {candidateForm()}
                                        </Form.Group>
                                        {displayCandidates()}
                                    </Card.Body>
                                </Card>
                                <Button size="lg" variant="outline-dark" onClick={saveElection} style={{ marginRight: '10px' }}>Submit Election</Button>
                            </Form >
                        </Card.Body >
                    </Card >
                </Col >
            </Row >
            <Row className="spacer15"></Row>
            <Row className="spacer15"></Row>
        </Container >
    );

}

export default Election;