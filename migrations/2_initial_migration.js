const Consumer = artifacts.require("Consumer");

module.exports = function(deployer) {
  deployer.deploy(Consumer);
};
