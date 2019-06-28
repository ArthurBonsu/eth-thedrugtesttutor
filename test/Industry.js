var Industry = artifacts.require("Industry");
const assert = require("chai").assert;
 truffleAssert = require('truffle-assertions');

contract('Industry', (accounts) => { 
  var IndustryInstance;

  
/*
  it("it checks to see industry", function() {

    return Industry.deployed().then(function(instance) {
      IndustryInstance = instance;
      let amount =19;
      let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
      let amountsatisfied = web3.utils.toBN(amountrequiredo);
     IndustryInstance.newProcessingPhase(accounts[0], web3.utils.fromAscii("peeman"),accounts[1],web3.utils.fromAscii("michael"),web3.utils.fromAscii("mydrug"),accounts[2],  amountsatisfied).then(function(result){
         return result;
      /*  instance.pleasesendmyescrow({
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
 
    
    });
 
 
 
  });
            */

    


/*
  
it("it checks to see industry", function() {

    return Industry.deployed().then(function(instance) {
      IndustryInstance = instance;
      let amount =19;
      let amountrequiredo = web3.utils.toWei(amount.toString(),'ether');
      let amountsatisfied = web3.utils.toBN(amountrequiredo);
     IndustryInstance.newProcessingPhase(accounts[0], web3.utils.fromAscii("peeman"),accounts[1],web3.utils.fromAscii("michael"),web3.utils.fromAscii("mydrug"),accounts[2],  amountsatisfied).then(function(result){
         return result;
      /*  instance.pleasesendmyescrow({
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
 
    
    });

    

*/
    
    /*
    
    it("it helps you to changethecurrentownership", function() {


      return Industry.deployed().then(function(instance) {
        IndustryInstance = instance;
        let currentperson =10;
        let currentpersoncount = web3.utils.toWei(currentperson.toString(),'ether');
        let thisisthecurrentpersoncount = web3.utils.toBN(currentpersoncount);

       

        let drugvalue =10;
        let thisdrugcount = web3.utils.toWei(drugvalue.toString(),'ether');
        let seethisdrugcount = web3.utils.toBN(thisdrugcount);
        
               var haspackage = true;

               let currentprocessingfee =10;
               let currentprocessingfees = web3.utils.toWei(currentprocessingfee.toString(),'ether');
               let currentprocessingfeesagain = web3.utils.toBN(currentprocessingfees);
               
                 

       IndustryInstance.changecurrentownership(web3.utils.fromAscii("peeman"), web3.utils.fromAscii("arthur"), accounts[0], accounts[1],accounts[2],accounts[3], web3.utils.fromAscii("RESTART"),thisisthecurrentpersoncount,haspackage,seethisdrugcount,currentprocessingfeesagain).then(function(result){
           return result;
        /*  instance.pleasesendmyescrow({
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
   
      
      });

});
*/
});

