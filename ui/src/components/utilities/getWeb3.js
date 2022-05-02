// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import Web3 from "web3";

const getWeb3 = async () => {
    let web3;

    const provider = new Web3.providers.HttpProvider('http://localhost:8545');
    web3 = new Web3(provider);

    return web3;
}

export default getWeb3;