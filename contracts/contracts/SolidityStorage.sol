// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #

// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.8.13 <0.9.0;

contract SolidityStorage {
    uint256 storedData = 5;

    function set(uint256 _x) public {
        storedData = _x;
    }

    function get() public view returns (uint256) {
        return storedData;
    }
}
