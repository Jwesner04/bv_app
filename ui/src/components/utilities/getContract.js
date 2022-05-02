// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
import map from "../../artifacts/deployments/map.json"

const getContract = async (web3, contractName) => {
    // -------------------------
    // Get contract
    // ---
    const contract = contractName

    // -------------------------
    // Get network provider and web3 instance.
    // ---
    const web3Local = web3

    // -------------------------
    // Get the current chain id
    // ---
    const chainIdTemp = parseInt(await web3Local.eth.getChainId())

    var chainId = 0;
    if (chainIdTemp === 42) {
        chainId = 42;
    }
    if (chainIdTemp === 1337) {
        chainId = "dev"
    }

    // -------------------------
    // Get the contract
    // Get the address of the most recent deployment from the deployment map
    // ---
    let contractAddress
    try {
        contractAddress = map[chainId][contract][0]
    } catch (e) {
        console.log(`Couldn't find any deployed contract "${contract}" on the chain "${chainId}".`)
        return undefined
    }

    // -------------------------
    // Load the artifact with the specified address
    // ---
    let contractArtifact
    try {
        contractArtifact = await import(`../../artifacts/deployments/${chainId}/${contractAddress}.json`)
    } catch (e) {
        console.log(`Failed to load contract artifact "../../artifacts/deployments/${chainId}/${contractAddress}.json"`)
        return undefined
    }
    console.log(`Contract Loaded ${contractArtifact.abi} `)

    // -------------------------
    // return new contract
    // ---
    return new web3Local.eth.Contract(contractArtifact.abi, contractAddress)
}

export default getContract;


