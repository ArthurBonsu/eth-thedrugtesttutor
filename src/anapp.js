const Tx =require('ethereumjs-tx')
const Web3 = require('web3')
const  Personal = ('web3-eth-personal');
const util = require('ethereumjs-util');
const BigNumber = require('bignumber.js');

var  web3 = new Web3('https://ropsten.infura.io/v3/de92f2791cfa4b2bb36aa86ae5b78137');

//var web3 =
//new Web3.providers.HttpProvider("http://127.0.0.1:7545");
//const net = require('net');
//web3 = new Web3(Web3.givenProvider);
  
var escrowcompliancececkerContractABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"escrowparticipantaddress","type":"address"},{"name":"escrowparticipantname","type":"bytes32"},{"name":"escrowparticipantsinitialamountputin","type":"uint256"},{"name":"escrowparticipanttimestamp","type":"bytes32"},{"name":"escrowparticipantcount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"escrowbalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"balanceamount","type":"uint256"},{"name":"escrowbalancenow","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"escrowownaddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"yourcurrentowner","type":"address"},{"name":"amount","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"signature","type":"bytes"},{"name":"receipientaddress","type":"address"}],"name":"claimPayment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"escrowparticipator","type":"address"},{"name":"escrowparticipatorname","type":"bytes32"},{"name":"escrowparticipatoramount","type":"uint256"}],"name":"sendescrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"donator","type":"address"},{"name":"receipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"thereceivertopay","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"},{"name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"name":"","type":"address"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punishings","outputs":[{"name":"escrowvictimaddress","type":"address"},{"name":"escrowvictimmame","type":"bytes32"},{"name":"escrowvictimmoney","type":"uint256"},{"name":"escrowvictimtimestamp","type":"bytes32"},{"name":"escrowvictimcount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"amountrequired","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"entitymustgethismoneyback","type":"address"}],"name":"kill","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"thereceivertopaybalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_escrowvictimaddress","type":"address"},{"name":"_escrowvictimmame","type":"bytes32"},{"name":"_escrowvictimmoney","type":"uint256"}],"name":"returnbackescrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"wehaveescrowownaddress","type":"address"},{"indexed":false,"name":"wehaveescrowparticipator","type":"address"},{"indexed":false,"name":"wehaveescrowparticipatoramount","type":"uint256"}],"name":"pleasesendmyescrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"donatorhere","type":"address"},{"indexed":false,"name":"receipienthere","type":"address"},{"indexed":false,"name":"amounthere","type":"uint256"}],"name":"logdeposits","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"receipientaddress","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Sent","type":"event"}];

var industryContractABI = [{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"proposals","outputs":[{"name":"escrowparticipantaddress","type":"address"},{"name":"escrowparticipantname","type":"bytes32"},{"name":"escrowparticipantsinitialamountputin","type":"uint256"},{"name":"escrowparticipanttimestamp","type":"bytes32"},{"name":"escrowparticipantcount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"escrowbalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"processingstructureses","outputs":[{"name":"location","type":"bytes32"},{"name":"hasdrug","type":"bool"},{"name":"escrowamount","type":"uint256"},{"name":"lastdestination","type":"address"},{"name":"justhandedoveraddres","type":"address"},{"name":"RFIDofthisdrug","type":"bytes32"},{"name":"manufacturerofdrugstobesent","type":"address"},{"name":"currentpersoncount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"escrowparticipator","type":"address"},{"name":"escrowparticipatorname","type":"bytes32"},{"name":"escrowparticipatoramount","type":"uint256"},{"name":"v","type":"uint256"}],"name":"sendescrows","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"enroller","type":"address"},{"name":"hasenrolled","type":"bool"}],"name":"hasbeenenrolled","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"_receiver","type":"address"},{"name":"_lastdestination","type":"address"},{"name":"s","type":"uint256"}],"name":"checklastdestination","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"newName","type":"bytes32"},{"name":"oldName","type":"bytes32"},{"name":"oldAddress","type":"address"},{"name":"newAddress","type":"address"},{"name":"_jushandedoveraddress","type":"address"},{"name":"manufactureraddress","type":"address"},{"name":"_RFID","type":"bytes32"},{"name":"e","type":"uint256"},{"name":"haspackage","type":"bool"},{"name":"f","type":"uint256"},{"name":"_currentownerprocessingfee","type":"uint256"}],"name":"changecurrentownership","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"balanceamount","type":"uint256"},{"name":"escrowbalancenow","type":"uint256"}],"name":"withdraw","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"escrowownaddress","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"yourcurrentowner","type":"address"},{"name":"amount","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"signature","type":"bytes"},{"name":"receipientaddress","type":"address"}],"name":"claimPayment","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"balances","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"escrowparticipator","type":"address"},{"name":"escrowparticipatorname","type":"bytes32"},{"name":"escrowparticipatoramount","type":"uint256"}],"name":"sendescrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"donator","type":"address"},{"name":"receipient","type":"address"},{"name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"mybigrole","type":"bytes32"},{"name":"mygreatbalance","type":"uint256"},{"name":"mynicelocation","type":"bytes32"},{"name":"ihavethisdrug","type":"bool"},{"name":"ihaveescrowamount","type":"uint256"},{"name":"ourlastdestination","type":"address"},{"name":"lookmyjustendedaddress","type":"address"}],"name":"ObtainProcessingEntityDetails","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"procedures","outputs":[{"name":"currentproces","type":"address"},{"name":"timestamp","type":"bytes32"},{"name":"drugname","type":"bytes32"},{"name":"numberofProcessingEntities","type":"uint256"},{"name":"location","type":"bytes32"},{"name":"receipient","type":"address"},{"name":"escrowvalue","type":"uint256"},{"name":"numOfProcesses","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"thereceivertopay","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"message","type":"bytes32"},{"name":"sig","type":"bytes"}],"name":"recoverSigner","outputs":[{"name":"","type":"address"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"numOfDrugCounts","type":"uint256"},{"name":"_lastdestination","type":"address"}],"name":"endphases","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"punishings","outputs":[{"name":"escrowvictimaddress","type":"address"},{"name":"escrowvictimmame","type":"bytes32"},{"name":"escrowvictimmoney","type":"uint256"},{"name":"escrowvictimtimestamp","type":"bytes32"},{"name":"escrowvictimcount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"processingstructures","outputs":[{"name":"location","type":"bytes32"},{"name":"hasdrug","type":"bool"},{"name":"escrowamount","type":"uint256"},{"name":"lastdestination","type":"address"},{"name":"justhandedoveraddres","type":"address"},{"name":"RFIDofthisdrug","type":"bytes32"},{"name":"manufacturerofdrugstobesent","type":"address"},{"name":"currentpersoncount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"sig","type":"bytes"}],"name":"splitSignature","outputs":[{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"self","outputs":[{"name":"manufacturer","type":"address"},{"name":"currentdrugpossessor","type":"address"},{"name":"RFID","type":"bytes32"},{"name":"drugname","type":"bytes32"},{"name":"cost","type":"uint256"},{"name":"temperature","type":"int256"},{"name":"concentration","type":"int256"},{"name":"location","type":"bytes32"},{"name":"drugquality","type":"bytes32"},{"name":"numOfDrugCount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"fellowowner","type":"address"},{"name":"fellowreceiver","type":"address"},{"name":"fellowpublickey","type":"uint256"},{"name":"fellowcurrentownername","type":"bytes32"},{"name":"fellowreceivername","type":"bytes32"},{"name":"fellowcurrentprocessingfee","type":"uint256"}],"name":"ObtainProcessingEntity","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"procent","outputs":[{"name":"currentowner","type":"address"},{"name":"receiver","type":"address"},{"name":"publickey","type":"uint256"},{"name":"currentownername","type":"bytes32"},{"name":"receivername","type":"bytes32"},{"name":"currentownerprocessingfee","type":"uint256"},{"name":"role","type":"bytes32"},{"name":"balance","type":"uint256"},{"name":"RFIDofdrugtobesent","type":"bytes32"},{"name":"currentownerscount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"amountrequired","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"escrowvalue","type":"uint256"},{"name":"balancers","type":"uint256"}],"name":"createEscrow","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"entitymustgethismoneyback","type":"address"}],"name":"kill","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[],"name":"thereceivertopaybalance","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_escrowvictimaddress","type":"address"},{"name":"_escrowvictimmame","type":"bytes32"},{"name":"_escrowvictimmoney","type":"uint256"}],"name":"returnbackescrow","outputs":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":false,"inputs":[{"name":"iamthecurrentdrugprocessor","type":"address"},{"name":"thisisgoingtobeRFID","type":"bytes32"},{"name":"thisismygreatestcost","type":"uint256"},{"name":"tellmethedrugme","type":"bytes32"}],"name":"ObtainDrugInfo","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":false,"inputs":[{"name":"theRFIDofthisdrug","type":"bytes32"},{"name":"manufacturerofdrugimustsend","type":"address"},{"name":"iamcountingcurrentowners","type":"uint256"}],"name":"ObtainProcessingEntityStatus","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"procenter","outputs":[{"name":"currentowner","type":"address"},{"name":"receiver","type":"address"},{"name":"publickey","type":"uint256"},{"name":"currentownername","type":"bytes32"},{"name":"receivername","type":"bytes32"},{"name":"currentownerprocessingfee","type":"uint256"},{"name":"role","type":"bytes32"},{"name":"balance","type":"uint256"},{"name":"RFIDofdrugtobesent","type":"bytes32"},{"name":"currentownerscount","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"thetemperature","type":"int256"},{"name":"theconcentration","type":"int256"},{"name":"thegreatlocation","type":"bytes32"},{"name":"thenumberofcountihave","type":"uint256"},{"name":"themanufacturersihave","type":"address"},{"name":"thedrugqualityihave","type":"bytes32"}],"name":"ObtainDrugInfoAdditional","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"_sender","type":"address"},{"indexed":false,"name":"_sendername","type":"bytes32"},{"indexed":false,"name":"_receipient","type":"address"},{"indexed":false,"name":"receipientname","type":"bytes32"},{"indexed":false,"name":"_RFID","type":"bytes32"},{"indexed":false,"name":"_lastdestination","type":"address"},{"indexed":false,"name":"processesnumber","type":"uint256"}],"name":"whatnewProcessingPhase","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"wehaveescrowownaddress","type":"address"},{"indexed":false,"name":"wehaveescrowparticipator","type":"address"},{"indexed":false,"name":"wehaveescrowparticipatoramount","type":"uint256"}],"name":"pleasesendmyescrow","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"donatorhere","type":"address"},{"indexed":false,"name":"receipienthere","type":"address"},{"indexed":false,"name":"amounthere","type":"uint256"}],"name":"logdeposits","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"from","type":"address"},{"indexed":false,"name":"receipientaddress","type":"address"},{"indexed":false,"name":"amount","type":"uint256"}],"name":"Sent","type":"event"}];
  
//var accountToSubmit = web3.eth.personal.unlockAccount(web3.eth.accounts[0],'',300);
//var accountToSubmits = web3.eth.personal.unlockAccount(web3.eth.accounts[1],'',300);
//var accountToSubmitss = web3.eth.personal.unlockAccount(web3.eth.accounts[2],'',300);


var contractAddress = '0x20911A320FD1e2B96141f403fEa309518C77FB3A';
//console.log(contractAddress);
var IndustrycontractAddress = '0x5D69354A38C9Ae4B93C769E4ff9FEb9c98B7733F';
var fromAddress = '0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4';

//console.log(contractAddress);
//console.log(IndustrycontractAddress);

  var  EscrowContract = new web3.eth.Contract(escrowcompliancececkerContractABI, contractAddress);

  var  IndustryContract = new  web3.eth.Contract(industryContractABI, IndustrycontractAddress);
  //var amount = 10
  //var process = web3.utils.toBN(10).toString();

 // const mymessage = web3.utils.soliditySha3('mymessage');
 // console.log(mymessage);
 
 
 
 
 
 
 
 
 
 //console.log(msg);

 
//const sig = web3.eth.sign(web3.eth.accounts[0], '0x' + msg);


 


 // var accountToSubmit = web3.eth.personal.unlockAccount(web3.eth.accounts[0],'',300);
 //    console.log(accountToSubmit);
 
 // console.log(resultse);



// var escrowcontracts =  EscrowContract.methods.sendescrow('0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4', web3.utils.fromAscii("peeman"),process, {gas:3000000}).call((err, result) =>{ console.log(escrowcontracts)} );

 //var escrowcontracts =  EscrowContract.methods.sendescrow('0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4', web3.utils.fromAscii("peeman"),process, ).call((err, result) =>{ console.log(escrowcontracts)} );


 var amount = 10
  var process = web3.utils.toBN(amount).toString();
 
  var amounthere = 12
  var processagain = web3.utils.toBN(amounthere).toString();

  var signer = '0x11f4d0A3c12e86B4b5F39B213F7E19D048276DAe';

  var receipient = '0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4';

         
  var hash = web3.utils.soliditySha3(receipient, amount, amounthere, contractAddress);
    
    

    console.log(hash);

    var mysignature = web3.eth.accounts.sign(hash, signer, "test password!");
  console.log(mysignature);

  var claimPayments =  EscrowContract.methods.claimPayment( signer, process, processagain,     '0x0e5ab60e19fa8b18efea9ffe3df07942e13d23f29b12de7fc6dbaf7cbe00469d1a8a31dbd71841f939da29d016a5ae281f7063eceb3b1dfdeb8dc68963537b601b', receipient);

  console.log(claimPayments);


  //var escrowcontractsign = EscrowContract.methods.claimPayment()


// var EscrowInstance = EscrowContract.at(contractAddress);
 // var MyIndustryInstance = IndustryContract.at(IndustrycontractAddress);

   

// console.log(web3.utils.fromAscii("ACCRA"));
//const account1 = '0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4';
//const account2 = '0xdE27Eaf0FBE58cAF3B932dF0f414584bf2D15000';
//const account3 = '0x542049c01139F177DfCF1f7Abe6898c190667116';
// console.log(account1);



 //console.log(web3.utils.fromAscii("EMMANUEL"))
// console.log(web3.utils.fromAscii("AMAZINGLOVE"))






//const privateKey1 =  Buffer.from('19abdbdfb8806d8e406e768f08857dc8c1f58559c7782e7192c5f02f57a1144d', 'hex');
//const privateKey2 =  Buffer.from('f2ead8c56d602eadc95a6178dc70d8c8f7eff2eb05e4553e6ffea1b19907f7b4', 'hex');
//const privateKey3 =  Buffer.from('2779d3a558b48e05be810aab8446d84bad9ce2e1ab9f319138bb846588a87cce', 'hex');

   

/*


    var amountrequiredo = web3.utils.fromWei(amount.toString(), "ether");
  
    
 

 var amazing =  IndustryContract.methods.newProcessingPhase( '0x91796AA285Cc5770fEd2f1B496b411f5BE3ED9D4', web3.utils.fromAscii("peeman"),'0xdE27Eaf0FBE58cAF3B932dF0f414584bf2D15000',web3.utils.fromAscii("michael"),web3.utils.fromAscii("mnbbm"),'0x542049c01139F177DfCF1f7Abe6898c190667116', process ).call((err, result) => {console.log(result)});
 console.log(amazing);



        
          // console.log(web3.fromWei(web3.toBigNumber(thisresult.toFixed()), 'ether'));
       
    web3.eth.getBlock(
      5626866 ).then(( block) => {
        console.log({
        blockHash: block.hash,
        blockNumber: block.number,
    })
})



web3.eth.getBlock('latest').then((console.log))
web3.eth.getPendingTransactions().then(console.log);

const receipt = web3.eth.getTransactionReceipt('0x53e53160785b0231f13d8b7e43ee622ad60111f318ba8d7335ab9a34eeb61dbb')
                        .then(console.log);


*/


 
 


//web3.eth.getBalance(account1, (err, bal) => {
//	console.log('account 1 balance', web3.utils.fromWei(bal, 'ether'))
//})


//web3.eth.getBalance(account2, (err, bal) => {
//	console.log('account 2 balance', web3.utils.fromWei(bal, 'ether'))
//})
       
      