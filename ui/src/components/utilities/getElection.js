// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import getWeb3 from "./getWeb3"
import getContract from "./getContract"

const getElection = async (electionName) => {

    // Fetch data from server
    const web3Response = await getWeb3();
    const contractResponse = await getContract(web3Response, "ElectionStorage")

    // fetch elections
    const election = await contractResponse.methods.getElection(electionName).call();

    return election;
}

export default getElection;