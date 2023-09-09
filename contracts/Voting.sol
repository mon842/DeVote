
// pragma solidity ^0.8.0;

// contract Voting {
//     struct Candidate {
//         string name;
//         uint256 voteCount;
//     }

//     Candidate[] public candidates;
//     address owner;
//     mapping(address => bool) public voters;

//     uint256 public votingStart;
//     uint256 public votingEnd;

// constructor(string[] memory _candidateNames, uint256 _durationInMinutes) {
//     for (uint256 i = 0; i < _candidateNames.length; i++) {
//         candidates.push(Candidate({
//             name: _candidateNames[i],
//             voteCount: 0
//         }));
//     }
//     owner = msg.sender;
//     votingStart = block.timestamp;
//     votingEnd = block.timestamp + (_durationInMinutes * 1 minutes);
// }

//     modifier onlyOwner {
//         require(msg.sender == owner);
//         _;
//     }

//     function addCandidate(string memory _name) public onlyOwner {
//         candidates.push(Candidate({
//                 name: _name,
//                 voteCount: 0
//         }));
//     }

//     function vote(uint256 _candidateIndex) public {
//         require(!voters[msg.sender], "You have already voted.");
//         require(_candidateIndex < candidates.length, "Invalid candidate index.");

//         candidates[_candidateIndex].voteCount++;
//         voters[msg.sender] = true;
//     }

//     function getAllVotesOfCandiates() public view returns (Candidate[] memory){
//         return candidates;
//     }

//     function getVotingStatus() public view returns (bool) {
//         return (block.timestamp >= votingStart && block.timestamp < votingEnd);
//     }

//     function getRemainingTime() public view returns (uint256) {
//         require(block.timestamp >= votingStart, "Voting has not started yet.");
//         if (block.timestamp >= votingEnd) {
//             return 0;
//     }
//         return votingEnd - block.timestamp;
//     }
// }



// SPDX-License-Identifier: MIT

pragma solidity ^0.8.7;
error Not__A__Owner();
error Wrong__Voting__Time();
error Time__For__Voting__Has__Expired();

contract Voting {
    struct Candidate {
        string name;
        uint256 voteCount;
    }
    Candidate[] public candidates;
    address owner;
    mapping(address => bool) public voters;

    uint256 public StartVote;
    uint256 public EndVote;

    constructor(string[] memory _candidateName, uint256 _durationInMinutes) {
        for (uint256 i = 0; i < _candidateName.length; i++) {
            candidates.push(Candidate({name: _candidateName[i], voteCount: 0}));
        }
        owner = msg.sender;
        StartVote = block.timestamp;
        EndVote = block.timestamp + (_durationInMinutes * 10 minutes);
    }

    modifier onlyOwner() {
        if (msg.sender != owner) {
            revert Not__A__Owner();
        }
        _;
    }

    function addCandidate(string memory _candidateName) public onlyOwner {
        candidates.push(Candidate({name: _candidateName, voteCount: 0}));
    }

    function vote(uint256 _CandidateIndex) public {
        require(!voters[msg.sender], "You have already voted");
        require(
            _CandidateIndex < candidates.length,
            "Invalid candidate index."
        );
        candidates[_CandidateIndex].voteCount++;
        voters[msg.sender] = true;
    }

    function getAllVotesOfCandiates() public view returns (Candidate[] memory) {
        return candidates;
    }

    function getVotingStatus() public view returns (bool) {
        return (block.timestamp >= StartVote && block.timestamp <= EndVote);
    }

    function getRemainingTime() public view returns (uint256) {
        if (block.timestamp < StartVote) {
            revert Wrong__Voting__Time();
        }
        if (block.timestamp > EndVote) {
            revert Time__For__Voting__Has__Expired();
        }
        return EndVote - block.timestamp;
    }
}