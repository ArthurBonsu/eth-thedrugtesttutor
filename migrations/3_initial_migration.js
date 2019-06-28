const EscrowComplianceCecker = artifacts.require("EscrowComplianceCecker");

module.exports = function(deployer) {
  deployer.deploy(EscrowComplianceCecker);
};
