// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
const getEthereum = async () => {

    // event listener is not reliable
    while (document.readyState !== "complete") {
        await new Promise(resolve => setTimeout(resolve, 100))
    }

    return window.ethereum;

}

export default getEthereum;
