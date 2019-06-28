pragma solidity >=0.4.0 <0.6.0;

contract EscrowComplianceCecker   {
    
    uint public amountrequired =2;
    address payable public  escrowownaddress=0xfd2C3e27BfACcf842424e48dC72cb18ba48E9457;
     address payable public thereceivertopay;
     uint public thereceivertopaybalance = thereceivertopay.balance;
    uint public escrowbalance =escrowownaddress.balance;
    uint value;
    uint m;
    mapping(uint256 => bool) usedNonces;
    
    struct EscrowSentBack{
        address   payable  escrowvictimaddress;
        bytes32     escrowvictimmame;
        uint      escrowvictimmoney;
        bytes32   escrowvictimtimestamp;
         uint      escrowvictimcount;
        
        mapping (address => EscrowSentBack[1000]) escrowteeser;
    }
     EscrowSentBack[] public punishings;
    struct EscrowObtained{
         address payable escrowparticipantaddress;
         bytes32  escrowparticipantname;
         uint       escrowparticipantsinitialamountputin;
         bytes32      escrowparticipanttimestamp;
         uint            escrowparticipantcount;
        
       mapping (address => EscrowObtained[1000])  escrowobtainees;
       
    } 
       EscrowObtained[] public proposals;
       
      
     
   EscrowObtained escrowobtainee;
   EscrowSentBack escrowtees;
    
   /*  constructor(uint  _amountrequired) public  {
        amountrequired = _amountrequired;
        
        
}
*/
event pleasesendmyescrow(address payable wehaveescrowownaddress,address payable wehaveescrowparticipator,  uint  wehaveescrowparticipatoramount);
     function sendescrow(address payable escrowparticipator, bytes32 escrowparticipatorname, uint escrowparticipatoramount) public payable  {
 escrowobtainee.escrowobtainees;
    
//  uint escrowedvaluesent;
// m=0;
//We need to add memory to each on
  
   uint q = 0;
   escrowobtainee.escrowparticipantcount =0;
   uint obtcounter =0;
   escrowobtainee.escrowparticipantsinitialamountputin =0;
   q = escrowobtainee.escrowparticipantcount;
      obtcounter = q;
          
    escrowobtainee.escrowparticipantaddress;
     escrowobtainee.escrowparticipantname;
     
        escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantaddress = escrowparticipator;
     
        escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantname = escrowparticipatorname;
     
           escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin =0;
     
     escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin =escrowparticipatoramount;
      
      
      
       emit pleasesendmyescrow(escrowownaddress,escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantaddress, escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin);
      
      
     //  require(escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin>= escrowbalance, "This must revert to false since it is not enough");
        
          escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantaddress.transfer(escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin);
       
     
                         
 // escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin = escrowparticipatoramount;   
                        
                          escrowbalance +=     escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin;
 
 
 
 
 
 proposals.push(EscrowComplianceCecker.EscrowObtained({
      escrowparticipantaddress: escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantaddress,
      escrowparticipantname:escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantname,
       escrowparticipantsinitialamountputin:escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantsinitialamountputin,
      escrowparticipanttimestamp:escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipanttimestamp,
      escrowparticipantcount:escrowobtainee.escrowobtainees[escrowparticipator][obtcounter].escrowparticipantcount
        // I HAVE TO ADD THE OTHER DETAILS
 
            
     
 }));  

      obtcounter++;     
}

//we have to receive latest escrow
function returnbackescrow (address payable _escrowvictimaddress, bytes32 _escrowvictimmame, uint _escrowvictimmoney) public payable {
          uint  obtanothercounter=0;
     uint counter =0;
     uint mymoney=0;
          
          escrowtees.escrowvictimcount=0;
         
         
           escrowtees.escrowteeser;
           escrowobtainee.escrowobtainees;
           escrowobtainee.escrowparticipantaddress;
             //   uint      obtcounter;
               escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmoney=0;
               escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmoney=_escrowvictimmoney;
               escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmame = _escrowvictimmame;
               escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimaddress =_escrowvictimaddress;
               
    require(escrowobtainee.escrowobtainees[ escrowobtainee.escrowparticipantaddress][obtanothercounter].escrowparticipantaddress == _escrowvictimaddress);
                                      

  m =escrowtees.escrowvictimcount;
    counter = m++;
    escrowtees.escrowvictimaddress;
   escrowtees.escrowvictimmame;
     escrowtees.escrowvictimmoney;
     
      escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimaddress =_escrowvictimaddress;
      
            
     
     escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmoney = escrowobtainee.escrowobtainees[ escrowobtainee.escrowparticipantaddress][obtanothercounter].escrowparticipantsinitialamountputin;
     escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimaddress =escrowobtainee.escrowobtainees[ escrowobtainee.escrowparticipantaddress][obtanothercounter].escrowparticipantaddress; 
//  escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimtimestamp =now;
   
    mymoney =    escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmoney;
   
   address payable receipientaddress =  escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimaddress;
    
    require(msg.sender == escrowownaddress);
     
     escrowownaddress.transfer(mymoney);
    
     withdraw(mymoney,escrowbalance);

emit Sent(escrowownaddress, receipientaddress, mymoney);

    
   
 punishings.push(EscrowComplianceCecker.EscrowSentBack({
      escrowvictimaddress: escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimaddress,
      escrowvictimmame:  escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmame,
       escrowvictimmoney: escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimmoney,
      escrowvictimtimestamp: escrowtees.escrowteeser[_escrowvictimaddress][counter]. escrowvictimtimestamp,
      escrowvictimcount: escrowtees.escrowteeser[_escrowvictimaddress][counter].escrowvictimcount
       // I HAVE TO ADD THE OTHER DETAILS
  
            
     
 }));  
                                        

    
}
 
 
 
 
           event logdeposits(address payable donatorhere, address payable receipienthere, uint amounthere);
  
    function deposit(address payable donator, address payable receipient, uint amount) public payable{
           
            donator.transfer(amount);
         escrowbalance +=amount;
         escrowownaddress =receipient;
         emit logdeposits( donator, receipient, amount);
    }
     function withdraw(uint balanceamount, uint escrowbalancenow) public payable {
         //Withdrawn from the escrowaddress balance
          balanceamount=0;
          escrowbalancenow=0;
         escrowbalance = escrowbalancenow;
         
        require(balanceamount <= escrowbalance, "Insufficient balance.");
         escrowbalance -=balanceamount;
         
         
     }
     
    
     function balances() public view returns(uint) {
          return escrowbalance;   
       
     }
 event Sent(address payable from, address payable receipientaddress, uint amount);
 
               
   // THE NEW RECEIVER WILL USE THIS TO SIGN THE MESSAGE 

   //for the escrowobtainedaddress = receipient address produce this amount
   //for deleting index
   //(entityList[entityStructs[entityAddress].listPointer] == entityAddress);
   
   
   //WE WILL USE IT TO RETRIEVE INFORMATION FOR THE ESCROW SO THAT THE ESCROW CAN ALSO SEE 
   //WHAT IS HAPPENING.
    
        
        // THIS FUNCTION IS CALLED BY INDUSTRY; HE CLAIMS GOOD AFTER EXCHANGE;
        //ACTUALLY CURRENT OWNER IS THE RECEIPIENT ADDRESS WHILE RECEIPIENTADDRESS IS THE SENDER ADDRESS, CAPICHE?
    function claimPayment( address payable yourcurrentowner, uint amount, uint256 nonce, bytes memory signature,address payable receipientaddress, bytes32 hashes)
public payable {
         
        uint mycash=0;
        mycash= amount;
        uint getthebalance=0;
        uint256 mynonce =0;
        mynonce = nonce;
      //  address payable entitytoclaimhismoney = receipientaddress;
        
    thereceivertopay = yourcurrentowner; 

require(!usedNonces[mynonce]);
usedNonces[nonce] = true;
// this recreates the message that was signed on the client
// bytes32 message = prefixed(keccak256(abi.encodePacked(hashes)));
    
require( recoverSigner(hashes, signature, yourcurrentowner)==true  );


receipientaddress.transfer(amount);
getthebalance = receipientaddress.balance-amount;
//withdraw(amount,thereceivertopaybalance);
emit Sent(yourcurrentowner, receipientaddress, amount);

}


/// destroy the contract and reclaim the leftover funds.
function kill(address payable entitymustgethismoneyback) public payable {
require(msg.sender == entitymustgethismoneyback);
selfdestruct(msg.sender);
}



/// signature methods.
function splitSignature(bytes memory sig)
public payable
returns (uint8 v, bytes32 r, bytes32 s)
{
      

  
require(sig.length == 65);
assembly {
// first 32 bytes, after the length prefix.
    
 
   let sig := mload(0x40)
     
 //   mstore ( 0x40, sig )
   
    


 //     r := mload(add(sig, 0x20))
   //   s := mload(add(sig, 0x40))
   //   v := byte(0, mload(add(sig, 0x60)))
    // v := and(mload(add(sig, 65)), 255)

//sv := and(mload(add(sig, 0x60)), 255)

r := mload(add(sig, 32))
// second 32 bytes.
s := mload(add(sig, 64))
// final byte (first byte of the next 32 bytes).
//v := byte(0, mload(add(sig, 96)))
v := and(mload(add(sig, 65)), 255)
}


//Version of signature should be 27 or 28, but 0 and 1 are also possible versions
    if (v < 27) {
      v += 27;
    }

   // If the version is correct return the signer address
    if (v != 27 && v != 28) {
     

return (v, r, s);
    }
}
function verify(address payable yourcurrentowner, bytes32 hash, uint8 v, bytes32 r, bytes32 s) public pure returns(bool) {

    // bytes memory prefix = "\x19Ethereum Signed Message:\n32";
   // bytes32 prefixedHash = (keccak256(abi.encodePacked(prefix, hash));

  bytes32 prefixedHash = prefixed(keccak256(abi.encodePacked(hash)));
    return ecrecover(prefixedHash, v, r, s) == yourcurrentowner;
}

//ANOTHER IMPLEMENTATION

// HERE IS WHERE RECOVER SIGNER IS PASSED TO HIM SO THAT HE CAN GET HIS MONEY
function recoverSigner(bytes32 message, bytes memory sig, address payable myman)
public payable

returns (bool)
{          
        
        
    //  address  mysigner = signer;

      
  (uint8 v, bytes32 r, bytes32 s) = splitSignature(sig);
        
   myman== ecrecover(message, v, r, s);
     
  return true;
     
}
/// builds a prefixed hash to mimic the behavior of eth_sign.
function prefixed(bytes32 hash) internal pure returns (bytes32) {
return keccak256(abi.encodePacked("\x19Ethereum Signed Message:\n32", hash));}

    
    
  
}
    