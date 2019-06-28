var Consumer = artifacts.require("Consumer");
const assert = require("chai").assert;
 truffleAssert = require('truffle-assertions');
 var sha3 = require('solidity-sha3');

contract('Consumer', (accounts) => { 
  var EscrowInstance;
  // THIS IS WHERE WE GET THE BALANCES 
  // ALSO FOR PASSING NUMBERS AND BN VALUES
/*
  it("it displays the balance of the escrow", async () =>{
    return EscrowComplianceCecker.deployed().then(function(instance) {
      return instance.balances();
    })
  });
*/
/*  
it("it initializes the candidates with the correct values", function() {
    return EscrowComplianceCecker.deployed().then(function(instance) {
      EscrowInstance = instance;
      let eventsendmyescrow = instance.pleasesendmyescrow();
      let amount =10;
     // let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
      let amountsatisfied = web3.utils.toBN(amount);
       
     
     
     truffleAssert.reverts(
      
      instance.sendescrow(accounts[0], web3.utils.fromAscii("peeman"),amountsatisfied)).then(function(result){
        instance.pleasesendmyescrow({
          filter: {},
          fromBlock: 0,
          toBlock: 'latest'
          }, function(error, event){ console.log(event); })
     let filter =     instance.pleasesendmyescrow({
            filter: {},
            fromBlock: 0,
            toBlock: 'latest'
            }, function(error, result){ console.log(result); })


    });
 
     

  let eventss =   instance.allEvents({
      filter: {},
      fromBlock: 0,
      toBlock: 'latest'
      }, function(error, event){ console.log(event); })
     
     
     
  
  
    });
   


 
  });
*/
/*
// THIS IS WHERE WE GET CONSUMER DETAILS
  it("it initializes the candidates with the correct values", function() {
    return Consumer.deployed().then(function(instance) {
        Consumer = instance;
    //  let eventsendmyescrow = instance.pleasesendmyescrow();


   
    var accountToSubmit = web3.eth.personal.unlockAccount("0x91796aa285cc5770fed2f1b496b411f5be3ed9d4","19abdbdfb8806d8e406e768f08857dc8c1f58559c7782e7192c5f02f57a1144d",300).then(console.log);
    var secaccountToSubmit = web3.eth.personal.unlockAccount("0xde27eaf0fbe58caf3b932df0f414584bf2d15000","f2ead8c56d602eadc95a6178dc70d8c8f7eff2eb05e4553e6ffea1b19907f7b4",300).then(console.log);
  

  //  let  mysignature = web3.eth.accounts.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "test password!");
//  console.log(mysignature);

  // let amount =10;
  //   let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
  //  let amountsatisfied = web3.utils.toBN(amountrequiredo);
       
   //   let amounthere =13;
   //   let amountrequiredos = web3.utils.toWei(amounthere.toString(),'ether');
   //  let amountsatisfiedhere = web3.utils.toBN(amountrequiredos);
        
     
      let amount = 10
      let process = web3.utils.toBN(amount);
      
      let amounthere = 12
       let processagain = web3.utils.toBN(amounthere);
     
       let receipient = '0xde27eaf0fbe58caf3b932df0f414584bf2d15000';
     
       let signer= '0x91796aa285cc5770fed2f1b496b411f5be3ed9d4';
      let contractAddress = '0x4bfe1d696f3c3c2b904b817ed40bd8c7b5875090';
       let message ="mymessage";
              
  // let solidhash =  web3.utils.soliditySha3(receipient);
  // console.log(solidhash);
    
  //let  mykekash = web3.utils.keccak256(message);
 // console.log(mykekash);
 var hash =    web3.utils.sha3("message to sign");
 console.log(hash);

 let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
console.log(solidityhash);
let  mykekash = web3.utils.keccak256(message);
console.log(mykekash);
   // console.log(hash);
  
  //let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
  //console.log(solidityhash);

 //   let myhashmessage = web3.eth.accounts.hashMessage(message)
 //   console.log(myhashmessage);
     
 //     let mysignature = web3.eth.accounts.sign(hash, signer, "test password!");
// console.log(mysignature);

  
 //let myhash =  sha3(message);
 //console.log(myhash);
 

// let mysignature = web3.eth.sign("0x" + solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
 

//let mysignature = web3.eth.sign(hash,signer).then(console.log);
//let mysignatureweb3 = web3.eth.sign("0x" + hash,signer).then(console.log);
//let mysignatureweb4 = web3.eth.sign("0x" + hash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").toString("hex").then(console.log);
let mysignatures = web3.eth.sign(solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
let mysignaturesd = web3.eth.sign(solidityhash,signer).then(console.log);

//let mysignaturess = web3.eth.sign(mykekash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
let mysignaturesses = web3.eth.sign("0x"+solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
  
   //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
    //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
    //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
    //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX

    //WE CAN ALSO PASS IN NUMBERS RAW SUCH AS AMOUNT AND AMOUNTHERE FOR THE NONCE 
    //WE ALWAYS USE REMIX TO MAKE TRANSFERS POSSIBLE
  truffleAssert.reverts(
      
   instance.getConsumerdetails('0x91796aa285cc5770fed2f1b496b411f5be3ed9d4')).then(function(result){
 console.log(result);
  });
 
     
         
   
  
  
    });
   


 
  });
*/
//THIS IS WHERE WE STORE CONSUMER
/*  
it("it initializes the candidates with the correct values", function() {
    return Consumer.deployed().then(function(instance) {
        Consumer = instance;
    //  let eventsendmyescrow = instance.pleasesendmyescrow();


   
    var accountToSubmit = web3.eth.personal.unlockAccount("0x91796aa285cc5770fed2f1b496b411f5be3ed9d4","19abdbdfb8806d8e406e768f08857dc8c1f58559c7782e7192c5f02f57a1144d",300).then(console.log);
    var secaccountToSubmit = web3.eth.personal.unlockAccount("0xde27eaf0fbe58caf3b932df0f414584bf2d15000","f2ead8c56d602eadc95a6178dc70d8c8f7eff2eb05e4553e6ffea1b19907f7b4",300).then(console.log);
  

  //  let  mysignature = web3.eth.accounts.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "test password!");
//  console.log(mysignature);

  // let amount =10;
  //   let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
  //  let amountsatisfied = web3.utils.toBN(amountrequiredo);
       
   //   let amounthere =13;
   //   let amountrequiredos = web3.utils.toWei(amounthere.toString(),'ether');
   //  let amountsatisfiedhere = web3.utils.toBN(amountrequiredos);
        
     
      let amount = 10
      let process = web3.utils.toBN(amount);
      let customername = web3.utils.fromAscii("Arthur");
      console.log(customername);
      
      let amounthere = 12
       let processagain = web3.utils.toBN(amounthere);
       let priceshare = 3;
       let RFIDS = web3.utils.fromAscii("EE111");
       console.log(RFIDS);
     
       let receipient = '0xde27eaf0fbe58caf3b932df0f414584bf2d15000';
     
       let signer= '0x91796aa285cc5770fed2f1b496b411f5be3ed9d4';
      let contractAddress = '0x4bfe1d696f3c3c2b904b817ed40bd8c7b5875090';
       let message ="mymessage";
              
  // let solidhash =  web3.utils.soliditySha3(receipient);
  // console.log(solidhash);
    
  //let  mykekash = web3.utils.keccak256(message);
 // console.log(mykekash);
 var hash =    web3.utils.sha3("message to sign");
 console.log(hash);

 let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
console.log(solidityhash);
let  mykekash = web3.utils.keccak256(message);
console.log(mykekash);
   // console.log(hash);
  
  //let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
  //console.log(solidityhash);

 //   let myhashmessage = web3.eth.accounts.hashMessage(message)
 //   console.log(myhashmessage);
     
 //     let mysignature = web3.eth.accounts.sign(hash, signer, "test password!");
// console.log(mysignature);

  
 //let myhash =  sha3(message);
 //console.log(myhash);
 

// let mysignature = web3.eth.sign("0x" + solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
 

//let mysignature = web3.eth.sign(hash,signer).then(console.log);
//let mysignatureweb3 = web3.eth.sign("0x" + hash,signer).then(console.log);
//let mysignatureweb4 = web3.eth.sign("0x" + hash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").toString("hex").then(console.log);
let mysignatures = web3.eth.sign(solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
let mysignaturesd = web3.eth.sign(solidityhash,signer).then(console.log);

//let mysignaturess = web3.eth.sign(mykekash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
let mysignaturesses = web3.eth.sign("0x"+solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
  
   //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
    //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
    //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
    //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX

    //WE CAN ALSO PASS IN NUMBERS RAW SUCH AS AMOUNT AND AMOUNTHERE FOR THE NONCE 
    //WE ALWAYS USE REMIX TO MAKE TRANSFERS POSSIBLE
  truffleAssert.reverts(
      
   instance.storeconsumerstuff('0x91796aa285cc5770fed2f1b496b411f5be3ed9d4', customername, amount, priceshare, RFIDS  ) ).then(function(result){
 console.log(result);
  });
 
     
         
   
  
  
    });
   


 
  });
*/
// THE STORING OF DRUGS
it("it initializes the candidates with the correct values", function() {
  return Consumer.deployed().then(function(instance) {
      Consumer = instance;
  //  let eventsendmyescrow = instance.pleasesendmyescrow();


 
  var accountToSubmit = web3.eth.personal.unlockAccount("0x91796aa285cc5770fed2f1b496b411f5be3ed9d4","19abdbdfb8806d8e406e768f08857dc8c1f58559c7782e7192c5f02f57a1144d",300).then(console.log);
  var secaccountToSubmit = web3.eth.personal.unlockAccount("0xde27eaf0fbe58caf3b932df0f414584bf2d15000","f2ead8c56d602eadc95a6178dc70d8c8f7eff2eb05e4553e6ffea1b19907f7b4",300).then(console.log);


//  let  mysignature = web3.eth.accounts.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "test password!");
//  console.log(mysignature);

// let amount =10;
//   let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
//  let amountsatisfied = web3.utils.toBN(amountrequiredo);
     
 //   let amounthere =13;
 //   let amountrequiredos = web3.utils.toWei(amounthere.toString(),'ether');
 //  let amountsatisfiedhere = web3.utils.toBN(amountrequiredos);
      
   
    let amount = 10
    let process = web3.utils.toBN(amount);
    let customername = web3.utils.fromAscii("Arthur");
    console.log(customername);
    
    let amounthere = 12
     let processagain = web3.utils.toBN(amounthere);
     let priceshare = 3;
     let RFIDS = web3.utils.fromAscii("EE111");
     console.log(RFIDS);
   
     let receipient = '0xde27eaf0fbe58caf3b932df0f414584bf2d15000';
   
     let signer= '0x91796aa285cc5770fed2f1b496b411f5be3ed9d4';
    let contractAddress = '0x4bfe1d696f3c3c2b904b817ed40bd8c7b5875090';
     let message ="mymessage";
            
// let solidhash =  web3.utils.soliditySha3(receipient);
// console.log(solidhash);
  
//let  mykekash = web3.utils.keccak256(message);
// console.log(mykekash);
var hash =    web3.utils.sha3("message to sign");
console.log(hash);

let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
console.log(solidityhash);
let  mykekash = web3.utils.keccak256(message);
console.log(mykekash);
 // console.log(hash);

//let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
//console.log(solidityhash);

//   let myhashmessage = web3.eth.accounts.hashMessage(message)
//   console.log(myhashmessage);
   
//     let mysignature = web3.eth.accounts.sign(hash, signer, "test password!");
// console.log(mysignature);


//let myhash =  sha3(message);
//console.log(myhash);


// let mysignature = web3.eth.sign("0x" + solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);


//let mysignature = web3.eth.sign(hash,signer).then(console.log);
//let mysignatureweb3 = web3.eth.sign("0x" + hash,signer).then(console.log);
//let mysignatureweb4 = web3.eth.sign("0x" + hash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").toString("hex").then(console.log);
let mysignatures = web3.eth.sign(solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
let mysignaturesd = web3.eth.sign(solidityhash,signer).then(console.log);

//let mysignaturess = web3.eth.sign(mykekash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);
let mysignaturesses = web3.eth.sign("0x"+solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").then(console.log);

 //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
  //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
  //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX
  //WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX.. I REPEAT ..WE USE SOLIDITY HASH AND SIGNING WITHOUT PREFIX

  //WE CAN ALSO PASS IN NUMBERS RAW SUCH AS AMOUNT AND AMOUNTHERE FOR THE NONCE 
  //WE ALWAYS USE REMIX TO MAKE TRANSFERS POSSIBLE
truffleAssert.reverts(
    
 instance.drugbought( signer, customername, RFIDS, amount ) ).then(function(result){
console.log(result);
});

   
       
 


  });
 



});



/*
  it("it initializes the candidates with the correct values", function() {
    return EscrowComplianceCecker.deployed().then(function(instance) {
      EscrowInstance = instance;
    //  let eventsendmyescrow = instance.pleasesendmyescrow();
  
  
   
    var accountToSubmit = web3.eth.personal.unlockAccount("0x91796aa285cc5770fed2f1b496b411f5be3ed9d4","19abdbdfb8806d8e406e768f08857dc8c1f58559c7782e7192c5f02f57a1144d",300).then(console.log);
    var secaccountToSubmit = web3.eth.personal.unlockAccount("0xde27eaf0fbe58caf3b932df0f414584bf2d15000","f2ead8c56d602eadc95a6178dc70d8c8f7eff2eb05e4553e6ffea1b19907f7b4",300).then(console.log);
  
  
  //  let  mysignature = web3.eth.accounts.sign("Hello world", "0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe", "test password!");
  //  console.log(mysignature);
  
  //   let amount =10;
  //   let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
  //   let amountsatisfied = web3.utils.toBN(amountrequiredo);
       
  //     let amounthere =12;
  //      let amountrequiredos = web3.utils.toWei(amounthere.toString(),'ether');
  //    let amountsatisfiedhere = web3.utils.toBN(amountrequiredos);
        
     
       let amount = 10
    //   let process = web3.utils.toBN(amount);
      
       let amounthere = 12
     //  let processagain = web3.utils.toBN(amounthere);
     
       let receipient = '0xde27eaf0fbe58caf3b932df0f414584bf2d15000';
     
       let signer= '0x91796aa285cc5770fed2f1b496b411f5be3ed9d4';
      let contractAddress = '0x4bfe1d696f3c3c2b904b817ed40bd8c7b5875090';
       let message ="mymessage";
              
  // let solidhash =  web3.utils.soliditySha3(receipient);
  // console.log(solidhash);
    
  // let  mykekash = web3.utils.keccak256(message);
  // console.log(mykekash);
     
   // console.log(hash);
  
  let solidityhash =  web3.utils.soliditySha3({t: 'bytes32', v: message});
  console.log(solidityhash);
  
  //   let myhashmessage = web3.eth.accounts.hashMessage(message)
  //   console.log(myhashmessage);
     
  //     let mysignature = web3.eth.accounts.sign(hash, signer, "test password!");
  // console.log(mysignature);
  
  
  
  
  
  let mysignature = web3.eth.sign(solidityhash,"0x91796aa285cc5770fed2f1b496b411f5be3ed9d4").slice(2).then(console.log);
  
  
  var r = `0x${mysignature.slice(0, 64)}`
    var s = `0x${mysignature.slice(64, 128)}`
   // var v = web3.toBigNumber(mysignature.slice(128, 130)) + 27)
    var v = web3.utils.toBN(mysignature.slice(128, 130)).toFixed() + 27;
      
   
  truffleAssert.reverts(
      
    instance.verify(solidityhash, v,  r, s)).then(function(result){
 console.log(result);
   });
 
     
         
   
  
  
    });
   


 
  });
         
   
     
     
  */
  
  
  

  /*

  it("it helps to return back the escrow", function() {
    return EscrowComplianceCecker.deployed().then(function(instance) {
      EscrowInstance = instance;
      let eventsendmyescrow = instance.pleasesendmyescrow();
      let amount =19;
      let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
      let amountsatisfied = web3.utils.toBN(amountrequiredo);
       truffleAssert.reverts(
      
      instance.returnbackescrow(accounts[0], web3.utils.fromAscii("peeman"),amountsatisfied)).then(function(result){
        instance.pleasesendmyescrow({
          filter: {},
          fromBlock: 0,
          toBlock: 'latest'
          }, function(error, event){ console.log(event); })
     let filter =     instance.pleasesendmyescrow({
            filter: {},
            fromBlock: 0,
            toBlock: 'latest'
            }, function(error, result){ console.log(result); })


    });
 
     

  let eventss =   instance.allEvents({
      filter: {},
      fromBlock: 0,
      toBlock: 'latest'
      }, function(error, event){ console.log(event); })
     
     
     
  
  
    });
   


 
  });

*/
/*
  it("it checks to see amount sent", function() {

    return EscrowComplianceCecker.deployed().then(function(instance) {
     let event = instance.pleasesendmyescrow();
      EscrowInstance = instance;
      let amount =19;
      let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
      let amountsatisfied = web3.utils.toBN(amountrequiredo);
       
       
  
 
      
      truffleAssert.reverts(
      
       instance.Sent({from: accounts[0],to: instance.escrowownaddress(),value: amountsatisfied})).then(function(result){
          return amount;
       
        });
  
    
    });
 
    });


*/
 
 
  /* it("allows a voter to cast a vote", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      candidateId = 1;
      return electionInstance.vote(candidateId, { from: accounts[0] });
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, "an event was triggered");
      assert.equal(receipt.logs[0].event, "votedEvent", "the event type is correct");
      assert.equal(receipt.logs[0].args._candidateId.toNumber(), candidateId, "the candidate id is correct");
      return electionInstance.voters(accounts[0]);
    }).then(function(voted) {
      assert(voted, "the voter was marked as voted");
      return electionInstance.candidates(candidateId);
    }).then(function(candidate) {
      var voteCount = candidate[2];
      assert.equal(voteCount, 1, "increments the candidate's vote count");
    })
  });

  it("throws an exception for invalid candiates", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      return electionInstance.vote(99, { from: accounts[1] })
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
      return electionInstance.candidates(1);
    }).then(function(candidate1) {
      var voteCount = candidate1[2];
      assert.equal(voteCount, 1, "candidate 1 did not receive any votes");
      return electionInstance.candidates(2);
    }).then(function(candidate2) {
      var voteCount = candidate2[2];
      assert.equal(voteCount, 0, "candidate 2 did not receive any votes");
    });
  });

  it("throws an exception for double voting", function() {
    return Election.deployed().then(function(instance) {
      electionInstance = instance;
      candidateId = 2;
      electionInstance.vote(candidateId, { from: accounts[1] });
      return electionInstance.candidates(candidateId);
    }).then(function(candidate) {
      var voteCount = candidate[2];
      assert.equal(voteCount, 1, "accepts first vote");
      // Try to vote again
      return electionInstance.vote(candidateId, { from: accounts[1] });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, "error message must contain revert");
      return electionInstance.candidates(1);
    }).then(function(candidate1) {
      var voteCount = candidate1[2];
      assert.equal(voteCount, 1, "candidate 1 did not receive any votes");
      return electionInstance.candidates(2);
    }).then(function(candidate2) {
      var voteCount = candidate2[2];
      assert.equal(voteCount, 1, "candidate 2 did not receive any votes");
    });
  });

*/



 



    
});

