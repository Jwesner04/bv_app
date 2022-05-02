// -------------------------------------------------------------------------- #
// The below file is used for creating a demo Blockchain Voting App for a     #
// final ASU project.                                                         #
//                                                                            #
// © 2022 Jonathan Wesner                                                     #
//                                                                            #
// -------------------------------------------------------------------------- #
pragma solidity ^0.8.12;

// SPDX-License-Identifier: MIT

struct VoterInfoType {
    string name;
    uint256 id;
    bool citizen;
    string age;
    string addr;
    uint64 ssn;
}

struct CandidateType {
    string name;
    uint256 candidateId;
    string title;
    string party;
    uint256 votes;
    bool isDeleted;
}

struct ElectionType {
    string electionName;
    uint256 electionId;
    string electionType;
    string startDate;
    string endDate;
    uint256 numCandidates;
    string[] names;
    string[] titles;
    string[] parties;
    uint256[] votes;
    bool isDeleted;
}
