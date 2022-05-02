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

const setVote = async (electionName, candidateChoice) => {
    // Fetch data from server
    const web3Response = await getWeb3();
    const accountResponse = await getAccount(web3Response);
    const contractResponse = await getContract(web3Response, "ElectionStorage");


    await contractResponse.methods.updateVoteCount(electionName, candidateChoice).send({ from: accountResponse[0], gas: '6000000' });
    const voteCount = await contractResponse.methods.getVoteCount(electionName, candidateChoice).call();

    return voteCount;
}

export default setVote;