// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import getWeb3 from "./getWeb3"
import getAccount from "./getAccount"
import getContract from "./getContract"

const setElection = async (electionName, electionType, electionStartDate, electionEndDate, candidates, numCandidates) => {
    let result = "";
    const numCandidatesLocal = numCandidates;

    // Verify candidates info before submitting election.
    // Valid Candidates are at least 2 and no more than 10.
    // Their are titles that have at least a matching pair.
    // Assumes the user intelligently inputs the rest. 
    // The candidate names will be checked in the setElection()
    // TODO: Add checks for types and parties.
    if (!(numCandidatesLocal > 1) || !(numCandidatesLocal <= 10)) {
        result = "Incorrect number of candidates (needs to be at least 2 and no more than 10 candidates)";
    }

    // Fetch data from server
    const web3Response = await getWeb3();
    const accountResponse = await getAccount(web3Response);
    const contractResponse = await getContract(web3Response, "ElectionStorage");

    // Verify Dates are valid - NOTE: a valid date will verify some end date in the future
    // and the start date checks that it is before end date.
    const startDate = new Date(electionStartDate);
    const endDate = new Date(electionEndDate);
    const today = new Date();
    if (!electionStartDate.trim()) {
        return "No Start Date given";
    }
    if (startDate.getTime() > endDate.getTime()) {
        return "Start Date must be less than or equal to the End Date."
    }
    if (!electionEndDate.trim()) {
        return "No End Date given";
    }
    if (today.getTime() >= endDate.getTime()) {
        return "End Date must be at least one day in the future."
    }

    // Verify Election field is valid - NOTE: a valid election name is
    // not blank and is unique (not found in the db). To create a unique
    // name, a election name with combine the following: "electionName + electionCount"
    // electionCount can be retrieved from the db first. Therefore, it is done so
    // someone could leave the name blank and an election could still submit.
    const electionId = await contractResponse.methods.getElectionCount().call();
    const fullElectionName = electionName.replace(/ /g, "_") + "_" + electionId.toString();

    // Verify somehow the Election doesn't already exist even with the unique hash above
    const electionNameExists = await contractResponse.methods.isElection(fullElectionName).call();
    if (electionNameExists) {
        return "Election name already exists. Please try again with a different name";
    }

    // Now that general election info has been verified, submit each candidate to the db
    // Will overwrite a candidate if the user inserts a candidate with the same name
    let names = [];
    let titles = [];
    let parties = [];
    let votes = [];
    let count = 0;
    for (let candidate of candidates) {
        names[count] = candidate.name;
        titles[count] = candidate.title;
        parties[count] = candidate.party;
        votes[count] = 0;
        count += 1;
    }

    await contractResponse.methods.setElection(
        fullElectionName,
        electionType,
        electionStartDate,
        electionEndDate,
        count,
        names,
        titles,
        parties,
        votes).send({ from: accountResponse[0], gas: '6000000' });

    result = await contractResponse.methods.getElection(fullElectionName).call();

    if (result.electionName !== fullElectionName) {
        return `Election with the name=${electionName} failed to submit`;
    }

    return result.electionName;
}

export default setElection;

