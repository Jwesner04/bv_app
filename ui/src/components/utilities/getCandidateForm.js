import React from 'react';
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Row, Form } from 'react-bootstrap';

import getElection from "./getElection"

const getCandidateForm = async () => {
    const queryParams = new URLSearchParams(window.location.search);

    const electionName = queryParams.get('election');

    let candidateForm;
    if (electionName) {
        const election = await getElection(electionName);

        if (election.names.length) {
            candidateForm = (
                <Row>
                    <Form>
                        {election.names.map((candidate, idx) => (
                            <div key={candidate} className="mb-3">
                                <Form.Check
                                    label={`${candidate}, ${election.parties[idx]}`}
                                    name="group1"
                                    type='radio'
                                    value={`${candidate}`}
                                    id={`check-api-${candidate}`}
                                />
                            </div>
                        ))}
                        <a className='btn btn-outline-dark btn-lg' href='/vote' role='button'>
                            Submit Vote
                        </a>
                    </Form>

                </Row>
            )
        }
    }

    return candidateForm;

}

export default getCandidateForm;