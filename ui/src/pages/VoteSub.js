// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import React, { useState, useEffect } from 'react';
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Container, Row, Form, Button } from 'react-bootstrap';

import getElection from "../components/utilities/getElection"
import setVote from "../components/utilities/setVote"

import '../styles/VoteSub.css';

// Reference: https://atomizecode.com/docs/react/grid
const VoteSub = () => {
    const [candidateChoice, setCandidateChoice] = useState(0);
    const [candidateForm, setCandidateForm] = useState([]);
    const [electionName, setElectionName] = useState("");
    const [firstEntry, setFirstEntry] = useState(true);
    const [submitVoteFlag, setSubmitVoteFlag] = useState(false);

    useEffect(() => {
        const getElectionFromUrl = async () => {
            if (firstEntry) {
                const queryParams = new URLSearchParams(window.location.search);
                const electionNameLocal = queryParams.get('election');

                let candidateFormLocal;
                if (electionNameLocal) {
                    const election = await getElection(electionNameLocal);

                    if (election.names.length) {
                        candidateFormLocal = (
                            <Row>
                                <Form>
                                    {election.names.map((candidate, idx) => (
                                        <div key={idx} className="mb-3">
                                            <Form.Check
                                                id={idx}
                                                value={idx}
                                                name="group1"
                                                label={`${candidate}, ${election.parties[idx]}`}
                                                type='radio'
                                                onChange={handleCandidateChange}
                                            />
                                        </div>
                                    ))}
                                    <Button size="lg" variant="outline-dark" onClick={handleSubmit} style={{ marginRight: '10px' }}>Submit Vote</Button>
                                    <a className='btn btn-outline-dark btn-lg' href={'/vote/results/?election=' + election.electionName} role='button' >
                                        View Results
                                    </a>
                                </Form>
                            </Row>
                        )
                    }
                }
                else {
                    candidateFormLocal = (<Row>This election is not valid. Ensure the correct election
                        name in URL matches the election name of the Card.</Row>);
                }
                setCandidateForm(candidateFormLocal);
                setElectionName(electionNameLocal);

            }
            setFirstEntry(false);
        }

        getElectionFromUrl();
    }, [candidateForm, firstEntry, candidateChoice]);

    useEffect(() => {
        if (submitVoteFlag === true) {
            const submitVote = async () => {
                const result = await setVote(electionName, candidateChoice);
                if (result > 0) {
                    alert("VOTE SUBMITTED! CONGRATULATIONS!!")
                    window.location.href = '/vote/results/?election=' + electionName;
                }
            }
            submitVote();


        }
        setSubmitVoteFlag(false);

    }, [candidateChoice, submitVoteFlag, electionName])

    const handleCandidateChange = (e) => {
        setCandidateChoice(e.target.value)
    }

    const handleSubmit = () => {
        setSubmitVoteFlag(true);
    }

    return (
        <Container fluid style={{ backgroundColor: '#EFEBE9' }}>
            <Row>
                <Row className="spacer15"></Row>
                {candidateForm}
                <Row className="spacer15"></Row>
            </Row>
        </Container >
    );

}

export default VoteSub;