pragma solidity >=0.4.0 <0.6.0;
 import "./EscrowComplianceCecker.sol";

contract Industry is EscrowComplianceCecker {
// `TokenCreator` is a contract type that is defined below.
// It is fine to reference it as long as it is not used
// to create a new contract.





uint i=0;
uint strucount=0;


//This is the Processing Entitiy , whether farmer, manufacturer or sales
    
struct ProcessingEntity{
    address payable currentowner;
    address payable receiver;
    uint256 publickey;
    bytes32 currentownername;
    bytes32 receivername;
     uint256 currentownerprocessingfee;
     bytes32 role;
     uint balance;
      bytes32 RFIDofdrugtobesent;
    uint currentownerscount;
   mapping (bytes32 => ProcessingEntity[1000]) processingentities;  
}
        struct ProcessingEntityStructure{
      bytes32 location;
     bool hasdrug;
     
     uint escrowamount;
     address payable lastdestination;
     address payable justhandedoveraddres;
     bytes32 RFIDofthisdrug;
     address payable manufacturerofdrugstobesent;
    

     uint currentpersoncount;
    mapping (bytes32 => ProcessingEntityStructure[1000]) ProcessingEntityStructures;
}

 //This is the drug

struct Drug{
    address payable manufacturer;
    address payable currentdrugpossessor;
      bytes32 RFID;
    
      bytes32 drugname;
      uint cost;
     int temperature;
     int concentration;
     bytes32 location;
     bytes32 drugquality;
   
  mapping (bytes32 => Drug[1000]) drugs;
    uint numOfDrugCount;
    
}



// This is the nuber of phases that has taken place 
// We are tokenizing the process

struct Processes{
      address currentproces;
      bytes32 timestamp;
      bytes32 drugname;
      uint numberofProcessingEntities;
      
     
      bytes32 location;
      address payable receipient;
      uint escrowvalue;
   
   mapping (address => ProcessingEntity) Processingentities;
     uint256 numOfProcesses;
   mapping (uint => Processes) processbatch;
   mapping (bytes32 => Drug[1000]) drugRFID;

      }
      

ProcessingEntityStructure public processingstructures;
ProcessingEntityStructure[] public processingstructureses;

Processes procedure;
Processes[] public procedures;

ProcessingEntity public procent;

ProcessingEntity[] public  procenter;


Drug[] public self;
 Drug me;
//This is the Industry's constructor
/*  constructor(bytes32  _name, address currentowners, uint c ) public {
 i = c;
   procent.currentownername = _name;
     procent.currentowner = currentowners;

       procent.currentowner = msg.sender;

}
 
*/
//Now we will engage the processing phase here 
event whatnewProcessingPhase (address payable _sender, bytes32 _sendername,address payable _receipient, bytes32 receipientname,bytes32 _RFID, address payable  _lastdestination,  uint256 processesnumber);
function newProcessingPhase (address payable _sender, bytes32 _sendername,address payable _receipient, bytes32 receipientname,bytes32 _RFID, address payable  _lastdestination,  uint256 processesnumber)  internal {



 bool hasenrolleded = false;
 
 uint numOfDrugCount =0;
  uint currentownerscount=0;
  uint currentpersoncount=0;
 
  
   me.drugs;
   procent.currentownerscount =0;
   procedure.numOfProcesses=0;

   
   procedure.numOfProcesses = processesnumber;
   
   me.numOfDrugCount=0;
   numOfDrugCount =  me.numOfDrugCount;
   
  
 procent.RFIDofdrugtobesent= _RFID;
 processingstructures.RFIDofthisdrug =_RFID;
 
  

  
   
  procent.currentowner = _sender;
  procent.currentownername = _sendername;
  procent.receiver = _receipient;
  procent.receivername = receipientname;
  processingstructures.lastdestination = _lastdestination;
   me.RFID = _RFID;
 // me.numOfDrugCount= numOfDrugCount;
  
   
    
    


     procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount =0;
     procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount = procent.currentownerscount ;

    //  self[me.RFID][numOfDrugCount] = Drug[self.RFID][numOfDrugCount];
 sendescrows(procenter[currentownerscount].currentowner, procenter[currentownerscount].currentownername, processingstructureses[currentpersoncount].escrowamount, procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount);    

// SETTING UP!...Broke up the details because of deep stack depth

//Setting Up Enemy Details
ObtainProcessingEntity(procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentowner,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receiver, procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].publickey,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownername,
 procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receivername,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerprocessingfee);

// processingstructureses
// Setting Up Next Escrow and Processamount
ObtainProcessingEntityDetails( procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].role,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].balance,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].location,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].hasdrug,
processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].escrowamount,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].lastdestination,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].justhandedoveraddres);

// Setting Up More of People's Details
ObtainProcessingEntityStatus(procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].RFIDofdrugtobesent,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].manufacturerofdrugstobesent,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount);


//SETTING UP MORE OF DRUGDETAILS.......
 ObtainDrugInfo(me.drugs[me.RFID][numOfDrugCount].currentdrugpossessor,
    me.drugs[me.RFID][numOfDrugCount].RFID, me.drugs[me.RFID][numOfDrugCount].cost,me.drugs[me.RFID][numOfDrugCount].drugname);


// Setting up the drug attributes
ObtainDrugInfoAdditional( me.drugs[me.RFID][numOfDrugCount].temperature,me.drugs[me.RFID][numOfDrugCount].concentration,me.drugs[me.RFID][numOfDrugCount].location, me.drugs[me.RFID][numOfDrugCount].numOfDrugCount, me.drugs[me.RFID][numOfDrugCount].manufacturer, me.drugs[me.RFID][numOfDrugCount].drugquality);

emit whatnewProcessingPhase (procenter[currentownerscount].currentowner,procenter[currentownerscount].currentownername,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receiver, procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receivername,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].RFIDofdrugtobesent, processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].lastdestination,  procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount);

 self.push(Industry.Drug({
      currentdrugpossessor: me.drugs[me.RFID][numOfDrugCount].currentdrugpossessor,
      RFID:me.drugs[me.RFID][numOfDrugCount].RFID,
      cost:me.drugs[me.RFID][numOfDrugCount].cost,
      drugname:me.drugs[me.RFID][numOfDrugCount].drugname,
      
      
      temperature:me.drugs[me.RFID][numOfDrugCount].temperature,
       concentration:me.drugs[me.RFID][numOfDrugCount].concentration,
        location:me.drugs[me.RFID][numOfDrugCount].location,
         numOfDrugCount:me.drugs[me.RFID][numOfDrugCount].numOfDrugCount,
         manufacturer: me.drugs[me.RFID][numOfDrugCount].manufacturer,
         drugquality:me.drugs[me.RFID][numOfDrugCount].drugquality
         // i have to ensure other details are kept
      
            
     
 }));  
 
   
 procenter.push(ProcessingEntity(
     {
      currentowner: procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentowner,
      receiver:procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receiver,
      publickey:  procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].publickey,
      currentownername: procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownername,
            receivername: procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receivername,
               currentownerprocessingfee:procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerprocessingfee,
      role: procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].role,
     balance: procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].balance,
          
          RFIDofdrugtobesent:procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].RFIDofdrugtobesent,
        
      currentownerscount:procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount
        // I HAVE TO ADD THE OTHER DETAILS
  
   
                           
 })); 
 
 processingstructureses.push(ProcessingEntityStructure(
     {
      location:processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].location,
     
     
     
      hasdrug: processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].hasdrug,
       escrowamount: processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].escrowamount,
         lastdestination: processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].lastdestination,
         justhandedoveraddres:processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].justhandedoveraddres,
         
          RFIDofthisdrug:processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].RFIDofthisdrug,
          manufacturerofdrugstobesent:processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].manufacturerofdrugstobesent,
      
      currentpersoncount:processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].currentpersoncount
        // I HAVE TO ADD THE OTHER DETAILS
  
   
                           
 })); 
 
 
 
         
     changecurrentownership( procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receivername, procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownername,
procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentowner,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receiver ,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].justhandedoveraddres,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].manufacturerofdrugstobesent,
procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].RFIDofdrugtobesent,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount, processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].hasdrug,me.drugs[me.RFID][me.numOfDrugCount].numOfDrugCount, procent.processingentities[procent.RFIDofdrugtobesent][procent.currentownerscount].currentownerprocessingfee);
     
   
    
    hasbeenenrolled(procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receiver,hasenrolleded);
    checklastdestination(procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].receiver, processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].lastdestination,procent.processingentities[procent.RFIDofdrugtobesent][currentownerscount].currentownerscount);
    endphases( numOfDrugCount,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][currentpersoncount].lastdestination);
       
    
     currentownerscount = currentownerscount++;
   currentpersoncount = currentownerscount++;
   procent.currentownerscount++;
 // numOfDrugCount =numOfDrugCount++;
 // numOfProcesses =numOfProcesses++;
    }

//function showDetails() public pure {
    //we have to console.log() it;
//    console.log();
//}


 
 
 
 // This is where we get the whole the person from the industry's details
 
 
  
  // I am editing from here 
  
  
   function hasbeenenrolled (address payable enroller,bool hasenrolled) public
   {  
             hasenrolled = false;
           procent.currentownerscount=0;
           i =procent.currentownerscount;
            processingstructures.currentpersoncount=0;
     strucount =processingstructures.currentpersoncount;
    
   
            procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= enroller;

            hasenrolled = true;
   }
   



   function ObtainProcessingEntity(address payable fellowowner, address payable fellowreceiver, uint256 fellowpublickey,bytes32 fellowcurrentownername,
  bytes32 fellowreceivername,uint256 fellowcurrentprocessingfee) public  {
    
    me.RFID;
    procent.RFIDofdrugtobesent;
   
    procent.currentownerscount=0;
     i =procent.currentownerscount;
      processingstructures.currentpersoncount=0;
     strucount =processingstructures.currentpersoncount;
    
   
    
   procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner=fellowowner;
       procent.processingentities[procent.RFIDofdrugtobesent][i].receiver=fellowreceiver;
        procent.processingentities[procent.RFIDofdrugtobesent][i].publickey=fellowpublickey;
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername =fellowcurrentownername;
      procent.processingentities[procent.RFIDofdrugtobesent][i].receivername =fellowreceivername;

      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerprocessingfee=fellowcurrentprocessingfee;
      
           
  }
 
 
 
   
  function ObtainProcessingEntityDetails(bytes32 mybigrole,uint mygreatbalance,bytes32 mynicelocation, bool ihavethisdrug, uint ihaveescrowamount, address payable ourlastdestination,address payable  lookmyjustendedaddress) public {
    me.RFID;
    procent.RFIDofdrugtobesent;
     
     procent.currentownerscount=0;
     i =procent.currentownerscount;
     processingstructures.currentpersoncount=0;
     strucount =processingstructures.currentpersoncount;
    
    
       procent.processingentities[procent.RFIDofdrugtobesent][i].role=mybigrole;
      procent.processingentities[procent.RFIDofdrugtobesent][i].balance=mygreatbalance;
     processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].location=mynicelocation;
     
       processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].hasdrug=ihavethisdrug;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=ihaveescrowamount;
        processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].lastdestination=ourlastdestination;
        processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].justhandedoveraddres=lookmyjustendedaddress;
         
             
          
 
 
 
  }
 

 
 
 
 function ObtainProcessingEntityStatus(bytes32 theRFIDofthisdrug,address payable manufacturerofdrugimustsend,uint iamcountingcurrentowners) public {
    me.RFID ;
    procent.RFIDofdrugtobesent;
    procent.currentownerscount=0;
     i =procent.currentownerscount;
      processingstructures.currentpersoncount=0;
     strucount =processingstructures.currentpersoncount;
    
   procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=0;
    
        
          procent.processingentities[procent.RFIDofdrugtobesent][i].RFIDofdrugtobesent=theRFIDofthisdrug;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].manufacturerofdrugstobesent=manufacturerofdrugimustsend;
      
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=iamcountingcurrentowners;
     
         
 
 
 
  }
 
 
  function ObtainDrugInfo(address payable iamthecurrentdrugprocessor,
    bytes32 thisisgoingtobeRFID, uint thisismygreatestcost,bytes32 tellmethedrugme) public {
     uint w = 0;
    me.RFID ;
    procent.RFIDofdrugtobesent;
     me.numOfDrugCount=0;
     procent.currentownerscount=0;
      processingstructures.currentpersoncount=0;
      w = me.numOfDrugCount;
     i =procent.currentownerscount;
     
     strucount =processingstructures.currentpersoncount;
    
   
    
  
      me.drugs[me.RFID][w].currentdrugpossessor;
       me.drugs[me.RFID][w].currentdrugpossessor= iamthecurrentdrugprocessor;
      me.drugs[me.RFID][w].RFID=thisisgoingtobeRFID;
       me.drugs[me.RFID][w].cost=thisismygreatestcost;
       me.drugs[me.RFID][w].drugname=tellmethedrugme;
         
          
 
 
  }
 
 
 
  function ObtainDrugInfoAdditional( int thetemperature, int theconcentration,bytes32  thegreatlocation, uint thenumberofcountihave, address payable themanufacturersihave, bytes32 thedrugqualityihave) public{
    me.RFID;
    procent.RFIDofdrugtobesent;
     uint w=0;
     me.numOfDrugCount=0;
     procent.currentownerscount=0;
      processingstructures.currentpersoncount=0;
      w= me.numOfDrugCount;
     i =procent.currentownerscount;
      
     strucount =processingstructures.currentpersoncount;
    
   
   
    me.drugs[me.RFID][w].temperature=thetemperature;
        me.drugs[me.RFID][w].concentration=theconcentration;
         me.drugs[me.RFID][w].location=thegreatlocation;
          me.drugs[me.RFID][w].numOfDrugCount=thenumberofcountihave;
         me.drugs[me.RFID][w].manufacturer=themanufacturersihave;
        me.drugs[me.RFID][w].drugquality=thedrugqualityihave;
    
 
  }
 
/* function PrintProcessingEntity(bytes32 _RFID) public returns(address payable a, address payable b, uint256 c,bytes32 d,
  bytes32 e,uint256 f){
    me.RFID =_RFID;
    procent.RFIDofdrugtobesent=_RFID;
     uint w = me.numOfDrugCount;
     i =procent.currentownerscount;
      processingstructures.currentpersoncount;
     strucount =processingstructures.currentpersoncount;
    
   
    
   procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner=a;
       procent.processingentities[procent.RFIDofdrugtobesent][i].receiver=b;
        procent.processingentities[procent.RFIDofdrugtobesent][i].publickey=c;
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername =d;
      procent.processingentities[procent.RFIDofdrugtobesent][i].receivername =e;

      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerprocessingfee=f;
      
     
                      assert(procent.processingentities[procent.RFIDofdrugtobesent][i].RFIDofdrugtobesent==procent.RFIDofdrugtobesent); 
                       assert(me.drugs[me.RFID][w].RFID==me.RFID);
         //       procent.processingentities[procent.RFIDofdrugtobesent][i];
       
      return (a,b,c,d,e,f );
      
  }

  */
  // I have processing entities here
   
  //The industry person has to oblidge to an escrow by making a small deposit
 function createEscrow(uint escrowvalue, uint balancers) public {
  procent.currentownerscount=0;
  processingstructures.currentpersoncount=0;
  
  i =procent.currentownerscount;
   
     strucount =processingstructures.currentpersoncount;
    procent.processingentities[procent.RFIDofdrugtobesent][i].balance =0;
    processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
  

    procent.processingentities[procent.RFIDofdrugtobesent][i].balance=balancers;
     processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount = escrowvalue;
       processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount= procent.processingentities[procent.RFIDofdrugtobesent][i].balance/4;
      procent.processingentities[procent.RFIDofdrugtobesent][i].balance-= processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount;
 
 }
 
  function sendescrows(address payable escrowparticipator, bytes32 escrowparticipatorname, uint escrowparticipatoramount, uint v) public payable {
 
 
   procent.currentownerscount =0;
   processingstructures.currentpersoncount=0;
   
       i =procent.currentownerscount;
       
     strucount =processingstructures.currentpersoncount;
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=0;
      procent.processingentities[procent.RFIDofdrugtobesent][i].balance=0;
      
 
       procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=v;
    
    processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
    procent.processingentities[procent.RFIDofdrugtobesent][i].balance =0;
 
       procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= escrowparticipator;
     procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername=escrowparticipatorname;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount =escrowparticipatoramount;
        createEscrow( processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount,procent.processingentities[procent.RFIDofdrugtobesent][i].balance);  
        EscrowComplianceCecker.sendescrow( procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount);
      
      
  }
  
  function  sendescrow(address payable escrowparticipator, bytes32 escrowparticipatorname, uint escrowparticipatoramount) public payable {
           procent.currentownerscount=0;
          processingstructures.currentpersoncount=0;
           i =procent.currentownerscount=0;
           strucount =processingstructures.currentpersoncount;
           
            procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= escrowparticipator;
     procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername=escrowparticipatorname;
    
     processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount= escrowparticipatoramount;
       
          EscrowComplianceCecker.sendescrow(procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,  procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername, processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount);
      }
      
      
      
      function returnbackescrow (address payable _escrowvictimaddress, bytes32 _escrowvictimmame, uint _escrowvictimmoney) public payable{
            
              procent.currentownerscount=0;
          processingstructures.currentpersoncount=0;
           i =procent.currentownerscount=0;
           strucount =processingstructures.currentpersoncount;
           
           
               procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= _escrowvictimaddress;
     procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername=_escrowvictimmame;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount= _escrowvictimmoney;
    
           
             EscrowComplianceCecker.returnbackescrow(  procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,  procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername, processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount);
      }
      
      function deposit(address payable donator, address payable receipient, uint amount) public payable {
          
          
          procent.currentownerscount=0;
          processingstructures.currentpersoncount=0;
           i =procent.currentownerscount=0;
           strucount =processingstructures.currentpersoncount;
            procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= donator;
           procent.processingentities[procent.RFIDofdrugtobesent][i].receiver=  receipient;
           
         processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount= amount;
    
           
        
            EscrowComplianceCecker.deposit(procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,   procent.processingentities[procent.RFIDofdrugtobesent][i].receiver,  processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount);   
      }
      
      
      
      
  
 // This is where we check the last destination to see if the drug has arrived mostly at point of purchase
 //In some cases different shops may buy assigning the last destination may be a bit tricky on that note
 function checklastdestination(address payable _receiver,address payable  _lastdestination,uint256 s) public {
         procent.currentownerscount=0;
          processingstructures.currentpersoncount=0;
          bool _lastdestinationreached = false;
       i =procent.currentownerscount;
       
     strucount =processingstructures.currentpersoncount;
    
   procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=0;
    procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=s;
       procent.processingentities[procent.RFIDofdrugtobesent][i].receiver=_receiver;
       processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].lastdestination =_lastdestination;
         if(procent.processingentities[procent.RFIDofdrugtobesent][i].receiver ==processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].lastdestination){
              _lastdestinationreached = true;
             
         }
 }
 
 // We ensure that they verify so that we can show their details else escrow is launched;
/* function checksignature() public {
     
     
 }
 */

   //For each phase end it makes an incrament for another drug possibly

  function endphases(uint numOfDrugCounts, address payable _lastdestination)  public  returns(uint){
      //I have to add i
  uint numOfDrugCount=0;
   me.numOfDrugCount=0;
   processingstructures.currentpersoncount=0;
  
    me.drugs;
         
     strucount =processingstructures.currentpersoncount;
    
 me.drugs[me.RFID][numOfDrugCount].numOfDrugCount=0;
        me.drugs[me.RFID][numOfDrugCount].numOfDrugCount= numOfDrugCounts;

        processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].lastdestination =_lastdestination; 
        if(msg.sender ==  processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].lastdestination){
          
         numOfDrugCount=  me.numOfDrugCount;
         numOfDrugCount =numOfDrugCount++;
     me.drugs[me.RFID][numOfDrugCount].numOfDrugCount =  numOfDrugCount;
       return numOfDrugCount;
             
 }

}

function withdraw(uint balanceamount, uint escrowbalancenow) public payable  {
        
         address payable  escrowownaddresses=0xfd2C3e27BfACcf842424e48dC72cb18ba48E9457;
          uint  escrowbalanceiers=0;
          uint balanceleft =0;
           balanceleft =escrowbalancenow;
             escrowbalanceiers=escrowownaddresses.balance;
         
          procent.currentownerscount=0;
          processingstructures.currentpersoncount=0;
           i =procent.currentownerscount=0;
           strucount =processingstructures.currentpersoncount;
         
        
        
          procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= escrowownaddresses;
          
           
         processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
      processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount= balanceamount;
      
    
        
        
        
         EscrowComplianceCecker.withdraw( processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount,escrowbalanceiers);
         
          }
     
     function balances() public view returns(uint){
          EscrowComplianceCecker.balances(); 
     }
     
     
  function claimPayment(address payable  yourcurrentowner, uint256 amount, uint256 nonce, bytes memory  signature, address payable receipientaddress,bytes32 hashes)
public payable {
    
    
    
     procent.currentownerscount=0;
          processingstructures.currentpersoncount=0;
         
       i =procent.currentownerscount;
       
     strucount =processingstructures.currentpersoncount;
    
  
      uint256 mynonce=0;
      mynonce =nonce;
    
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner=  yourcurrentowner;
      procent.processingentities[procent.RFIDofdrugtobesent][i].receiver =receipientaddress;
    
               processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount=0;
               processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount= amount;
    
    EscrowComplianceCecker.claimPayment( procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].escrowamount,mynonce, signature,   procent.processingentities[procent.RFIDofdrugtobesent][i].receiver,hashes);
    
}

 // Here is the place where we change ownership of the drug;
   function  changecurrentownership (bytes32 newName, bytes32 oldName,address payable  oldAddress, address payable newAddress,address payable _jushandedoveraddress,address payable manufactureraddress, bytes32 _RFID,  uint e,  bool haspackage, uint f, uint256 _currentownerprocessingfee)  public  {
  
 uint256 _nonce=0;
  bytes memory _signature;
   uint w=0;
   bytes32 hashes;
   
  
me.drugs;

procent.currentownerscount =0;
me.numOfDrugCount=0;
processingstructures.currentpersoncount=0;
//  procent.currentownerscount =e;
//    me.numOfDrugCount =   f;
 
  me.drugs[me.RFID][w].manufacturer =manufactureraddress;
    me.drugs[me.RFID][w].RFID = _RFID;
  
  w=me.numOfDrugCount;
  i =procent.currentownerscount;
 //  processingstructures.currentpersoncount =e;
     strucount =processingstructures.currentpersoncount;
    
     procent.processingentities[procent.RFIDofdrugtobesent][i].balance =0;
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount=0;
       me.drugs[me.RFID][w].numOfDrugCount=0;
        processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][i].escrowamount=0;
        procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerprocessingfee=0;

        procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerscount = e;
        me.drugs[me.RFID][w].numOfDrugCount =f;
   processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].hasdrug = haspackage;    
     
  processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].justhandedoveraddres =_jushandedoveraddress;
      //Here is where we check to see if the mesage sender is really the person
      //Here we have to add the drug, because the drug has to literally change hands;
  if (msg.sender !=  procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner &&processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].hasdrug==true) return;//This is optional
                                     processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].hasdrug=false;
                                      
      procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername = oldName;
       procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner= oldAddress;
        procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerprocessingfee = _currentownerprocessingfee;
          procent.processingentities[procent.RFIDofdrugtobesent][i].receivername= newName;
       procent.processingentities[procent.RFIDofdrugtobesent][i].receiver= newAddress;
       
       
      
      EscrowComplianceCecker.claimPayment( procent.processingentities[procent.RFIDofdrugtobesent][i].receiver, procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerprocessingfee,_nonce,_signature, procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,hashes);
                procent.processingentities[procent.RFIDofdrugtobesent][i].balance+= procent.processingentities[procent.RFIDofdrugtobesent][i].currentownerprocessingfee;
       EscrowComplianceCecker.returnbackescrow (  procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner,  procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername, processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][i].escrowamount);
       procent.processingentities[procent.RFIDofdrugtobesent][i].balance+=processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][i].escrowamount;
       
      // returnbackescrow (procent[i].currentowner,  procent[i].currentownername); 
     //LASTOWNER  WILL BE PAID HERE 
     
       
        procent.processingentities[procent.RFIDofdrugtobesent][i].currentownername=   procent.processingentities[procent.RFIDofdrugtobesent][i].receivername ;
        procent.processingentities[procent.RFIDofdrugtobesent][i].currentowner = procent.processingentities[procent.RFIDofdrugtobesent][i].receiver;
        processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].justhandedoveraddres = msg.sender;
        procent.processingentities[procent.RFIDofdrugtobesent][i].RFIDofdrugtobesent =   me.drugs[me.RFID][w].RFID ;
       processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].manufacturerofdrugstobesent = me.drugs[me.RFID][w].manufacturer;
         processingstructures.ProcessingEntityStructures[processingstructures.RFIDofthisdrug][strucount].hasdrug = true; 
       //This is optional
       
}


}
