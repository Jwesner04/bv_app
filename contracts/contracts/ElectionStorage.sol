// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
pragma solidity ^0.8.13;

// SPDX-License-Identifier: MIT

import "./CommonTypes.sol";

contract ElectionStorage {
    // Create a CandidateType map and ElectionType map
    mapping(uint256 => mapping(uint256 => CandidateType)) candidatesByElectionId_;
    mapping(string => ElectionType) electionsByName_;
    mapping(uint256 => string) electionIdToName_;
    uint256 electionId_ = 0;
    uint256 thisTest_ = 0;

    // uses electionId against name to determine if election exists
    function isElection(string memory _name)
        public
        view
        returns (bool success)
    {
        if (electionsByName_[_name].electionId == 0) {
            // election doesn't exist, just return false
            return false;
        }

        if (electionsByName_[_name].isDeleted) {
            return false;
        }

        return true;
    }

    function updateVoteCount(string memory _electionName, uint256 _candidateId)
        public
        returns (bool success)
    {
        electionsByName_[_electionName].votes[_candidateId] += 1;

        return true;
    }

    function getVoteCount(string memory _electionName, uint256 _candidateId)
        public
        view
        returns (uint256)
    {
        uint256 votesLocal = 0;

        votesLocal = electionsByName_[_electionName].votes[_candidateId];

        return votesLocal;
    }

    function getElectionId(string memory _name) public view returns (uint256) {
        return electionsByName_[_name].electionId;
    }

    function getElectionNames() public view returns (string[] memory) {
        string[] memory elections = new string[](electionId_);

        for (uint256 i = 0; i < (electionId_); i++) {
            string storage name = electionIdToName_[i];
            if (
                !(electionsByName_[name].electionId == 0) ||
                !(electionsByName_[name].isDeleted)
            ) {
                elections[i] = name;
            }
        }

        return elections;
    }

    function getElection(string memory _name)
        public
        view
        returns (ElectionType memory)
    {
        return electionsByName_[_name];
    }

    function getElectionCount() public view returns (uint256) {
        return electionId_;
    }

    // this simulates deleting an election record by setting a delete flag, but does not actually delete
    // the record. All this means is that this record could be overwritten and will return as a non-record.
    // Otherwise, it will stay as a record in history forever. This is one way of retrieving or undoing an
    // action a user did by requesting to resurrect a deleted item. A deleted item may then be retrieved if
    // the user did not already manually overwrite that deleted record with the same election name.
    function deleteElection(string memory _name) public returns (bool success) {
        electionsByName_[_name].isDeleted = true;

        return true;
    }

    function setElection(
        string memory _name,
        string memory _type,
        string memory _startDate,
        string memory _endDate,
        uint256 _numCandidates,
        string[] memory _names,
        string[] memory _titles,
        string[] memory _parties,
        uint256[] memory _votes
    ) public returns (bool success) {
        bool isDeleted = false;

        ElectionType memory election = ElectionType(
            _name,
            electionId_,
            _type,
            _startDate,
            _endDate,
            _numCandidates,
            _names,
            _titles,
            _parties,
            _votes,
            isDeleted
        );
        electionsByName_[_name] = election;
        electionIdToName_[electionId_] = _name;

        // increment internal election id
        electionId_ += 1;

        return true;
    }
}
