import React from 'react';
// Reference: https://react-bootstrap.github.io/layout/grid/
import { Row, Form } from 'react-bootstrap';

import getElection from "./getElection"
import setVote from "./setVote"

class CandidateFormClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            candidateForm: "",
            candidateChoice: "",
            electionName: ""
        };
    }

    async submitVote() {
        alert(`${this.state.candidateChoice}`)
        const { electionName } = this.state;
        const candidateChoice = this.state;
        console.log(electionName);
        const result = await setVote(electionName, candidateChoice);

        if (result) {
            alert("Vote Submitted Sucessfully!")
        }
    }

    handleCandidateChange = (e) => {
        alert(e.target.value);
        this.setState({ candidateChoice: e.target.value });
    }

    async componentWillUnmount() {
        alert("HERE")
        const electionName = this.state;
        const candidateChoice = this.state;
        console.log(electionName);
        const result = await setVote(electionName, candidateChoice);

        if (result) {
            alert("Vote Submitted Sucessfully!")
        }
    }

    async componentDidMount() {
        const queryParams = new URLSearchParams(window.location.search);
        const electionName = queryParams.get('election');

        if (electionName) {
            const election = await getElection(electionName);

            if (election.names.length) {
                const candidateForm = (
                    <Row>
                        <Form>
                            {election.names.map((candidate, idx) => (
                                <div key={candidate} className="mb-3">
                                    <Form.Check
                                        id={idx}
                                        value={candidate}
                                        name="group1"
                                        label={`${candidate}, ${election.parties[idx]}`}
                                        type='radio'
                                        onChange={this.handleCandidateChange}
                                    />
                                </div>
                            ))}
                            <a className='btn btn-outline-dark btn-lg' href={'/vote/results/?election=' + election.electionName} role='button'>
                                Submit Vote
                            </a>
                        </Form>
                    </Row>
                )

                this.setState({ candidateForm });
            }
            else {
                const candidateForm = (<Row>This election is not valid. Ensure the correct election
                    name in URL matches the election name of the Card.</Row>);
                this.setState({ candidateForm });
            }

            this.setState({ electionName });
        }
    }

    render() {
        const { candidateForm } = this.state;

        return candidateForm;
    }
}

export default CandidateFormClass;