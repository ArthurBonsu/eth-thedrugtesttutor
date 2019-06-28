pragma solidity >=0.4.0 <0.6.0;
 

 import "./EscrowComplianceCecker.sol";
 import  "./Industry.sol";
 contract Consumer is EscrowComplianceCecker  {
          uint  i; 
      
       struct Buyer {
       bytes32  customername;
        uint  customerage;
       uint price;
       uint thecustomerscount;
       address payable consumeraddress;
       bytes32 RFIDS;
    
      mapping (address => Buyer[1000]) buyers;
      mapping (bytes32 => Buyer[1000]) somebuyer;

       }
       
        Buyer[] public consumerstore; 
        Buyer consumer;
       
       
   
     function getConsumerdetails(address payable _consumeraddress) public returns(address payable consumeraddressretrieved, bytes32 customerretrievedname, uint customerretrievedage)   {
         i=0;
       consumer.thecustomerscount=0;
       i= consumer.thecustomerscount;
        uint customeragetoberetrieved = 0;
         customerretrievedage=0;
        customeragetoberetrieved=customerretrievedage;
         consumer.consumeraddress;
        
            
           consumer.buyers[_consumeraddress][i].consumeraddress =  _consumeraddress;
             
                   require( consumer.buyers[_consumeraddress][i].consumeraddress  ==  _consumeraddress);
             consumeraddressretrieved  = consumer.buyers[_consumeraddress][i].consumeraddress;
             customerretrievedname =  consumer.buyers[_consumeraddress][i].customername;
             customerretrievedage = consumer.buyers[_consumeraddress][i].customerage;

             
         return (  consumeraddressretrieved, customerretrievedname,
                 customerretrievedage
           );
         
         
     }
        
       function storeconsumerstuff(address payable _consumeraddresses, bytes32 _customernamess, uint _customeragess, uint priceshere, bytes32 RRFIDS  ) public {
         
           i-0;
           consumer.thecustomerscount=0;
          consumer.thecustomerscount++;
         
         consumer.consumeraddress;
          //_consumeraddresses;
         consumer.customername;
         // = _customernamess;
          consumer.customerage=0;
         // =  _customeragess;
          consumer.price=0;
        // priceshere;
         consumer.RFIDS;  
         
                 consumer.somebuyer[RRFIDS][i].customerage =0;
                  consumer.somebuyer[ RRFIDS][i].price=0;  
          consumer.somebuyer[RRFIDS][i].consumeraddress = _consumeraddresses;
              consumer.somebuyer[ RRFIDS][i].customername = _customernamess;
                  consumer.somebuyer[ RRFIDS][i].customerage =_customeragess;
                consumer.somebuyer[ RRFIDS][i].price =priceshere;
                  consumer.somebuyer[ RRFIDS][i].RFIDS= RRFIDS;
           
     
     
     
     
     consumerstore.push(Buyer(
     {
      customername:  consumer.somebuyer[ RRFIDS][i].customername,
      customerage: consumer.somebuyer[ RRFIDS][i].customerage,
      price:  consumer.somebuyer[RRFIDS][i].price,
      thecustomerscount: consumer.somebuyer[RRFIDS][i].thecustomerscount,
        consumeraddress:  consumer.somebuyer[RRFIDS][i].consumeraddress,
             RFIDS: consumer.somebuyer[ RRFIDS][i].RFIDS
    
   
                           
 }));  
     
     
      
  } 
       
     
        function drugbought(address payable _consumeraddr, bytes32 _customernam, bytes32 drugsRFID, uint pricing ) public returns (address payable suchacustomer, bytes32 customername, bytes32 thedrugandRFID, uint priceofdrug) {
          i=0;
           consumer.thecustomerscount=0;
            consumer.thecustomerscount++;
            pricing =0;
           consumer.consumeraddress;
         consumer.customername;
       
         consumer.price=0;
         consumer.RFIDS;  
           
             consumer.somebuyer[ drugsRFID][i].consumeraddress;
             consumer.somebuyer[ drugsRFID][i].customername;
             consumer.somebuyer[ drugsRFID][i].price=0;
             consumer.somebuyer[ drugsRFID][i].RFIDS;
                  
                  
                   // Make sure the array has address inside and just RFID
                   consumer.buyers[_consumeraddr][i].consumeraddress =  _consumeraddr;
             
                   require( consumer.buyers[_consumeraddr][i].consumeraddress  ==  _consumeraddr  || consumer.somebuyer[drugsRFID][i].RFIDS  ==  drugsRFID);
                  //  require(consumer.somebuyer[drugsRFID][i].RFIDS == drugsRFID);
                   
                    
                consumer.somebuyer[ drugsRFID][i].consumeraddress = _consumeraddr;
                consumer.somebuyer[ drugsRFID][i].customername =_customernam;
                consumer.somebuyer[ drugsRFID][i].price =pricing;
                
                suchacustomer =  consumer.somebuyer[ drugsRFID][i].consumeraddress;
                customername = consumer.somebuyer[ drugsRFID][i].customername;
                thedrugandRFID= consumer.somebuyer[ drugsRFID][i].RFIDS;
                pricing = consumer.somebuyer[ drugsRFID][i].price;

         return ( suchacustomer, customername , thedrugandRFID, pricing);
         
            
        }
    
  /*   function verify(bytes32 _RFID)  public{
           uint vry;
          Industry industrye = Industry(vry);


          industrye.providecustomerpermission( _RFID);
     }
     
   */

 function  sendescrow(address payable escrowparticipator, bytes32 escrowparticipatorname, uint escrowparticipatoramount) public payable {
          EscrowComplianceCecker.sendescrow( escrowparticipator,  escrowparticipatorname, escrowparticipatoramount);
      }
      
      
      
      function returnbackescrow (address payable _escrowvictimaddress, bytes32 _escrowvictimmame, uint _escrowvictimmoney) public payable{
             EscrowComplianceCecker.returnbackescrow( _escrowvictimaddress,  _escrowvictimmame,  _escrowvictimmoney)    ;
      }
      
      function deposit(address payable  donator, address payable receipient, uint amount) public payable {
            EscrowComplianceCecker.deposit( donator,  receipient,  amount);   
      }
   
function withdraw(uint balanceamount, uint escrowbalancenow) public payable  {
         EscrowComplianceCecker.withdraw(balanceamount,escrowbalancenow);
         
          }
     
     function balances() public view returns(uint) {
          EscrowComplianceCecker.balances(); 
     }
     
     
  function claimPayment(address payable  yourcurrentowner, uint256 amount, uint256 nonce, bytes memory signature,address payable receipientaddress,bytes32 hashes)
public payable {
    EscrowComplianceCecker.claimPayment(yourcurrentowner, amount, nonce, signature, receipientaddress, hashes);
    
}



}