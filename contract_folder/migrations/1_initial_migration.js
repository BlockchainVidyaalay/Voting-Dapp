var Voting = artifacts.require("./Voting.sol");

module.exports = function(deployer, networks, accounts) {
  console.log("accounts:",accounts);
  deployer.deploy(Voting, "college president", {from: accounts[0]});
};
