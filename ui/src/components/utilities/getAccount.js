// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #

const getAccount = async (web3) => {

    // -------------------------
    // Get network provider and web3 instance.
    // ---
    const web3Local = web3

    // get ethereum here
    //const ethResponse = await getEthereum();

    // -------------------------
    // Try and enable accounts (connect metamask)
    // ---
    //try {
    //    ethResponse.requestAccounts()
    //} catch (e) {
    //    console.log(`Could not enable accounts. Interaction with contracts not available.
    //Use a modern browser with a Web3 plugin to fix this issue.`)
    //    console.log(e)
    //}

    // -------------------------
    // Use web3 to get the user's accounts and return
    // ---
    return web3Local.eth.getAccounts();
};

export default getAccount;