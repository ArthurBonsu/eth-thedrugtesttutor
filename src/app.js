App = {
  loading: false,
  contracts: {},

  load: async () => {
    await App.loadWeb3()
    await App.loadAccount()
    await App.loadContract()
    await App.render()
  },

  // https://medium.com/metamask/https-medium-com-metamask-breaking-change-injecting-web3-7722797916a8
  loadWeb3: async () => {
    if (typeof web3 !== 'undefined') {
      App.web3Provider = web3.currentProvider
      web3 = new Web3(web3.currentProvider)
    } else {
      window.alert("Please connect to Metamask.")
    }
    // Modern dapp browsers...
    if (window.ethereum) {
      window.web3 = new Web3(ethereum)
      try {
        // Request account access if needed
        await ethereum.enable()
        // Acccounts now exposed
        web3.eth.sendTransaction({/* ... */})
      } catch (error) {
        // User denied account access...
      }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
      App.web3Provider = web3.currentProvider
      window.web3 = new Web3(web3.currentProvider)
      // Acccounts always exposed
      web3.eth.sendTransaction({/* ... */})
    }
    // Non-dapp browsers...
    else {
      console.log('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  },

  loadAccount: async () => {
    // Set the current blockchain account
    App.account = web3.eth.accounts[0]
  },

  loadContract: async () => {
    // Create a JavaScript version of the smart contract
    const industry = await $.getJSON('Industry.json')
 
    App.contracts.Industry = TruffleContract(industry)
    App.contracts.Industry.setProvider(App.web3Provider)

    // Hydrate the smart contract with values from the blockchain
    App.Industry = await App.contracts.Industry.deployed()
    
  },

  render: async () => {
    // Prevent double render
    if (App.loading) {
      return
    }

    // Update app loading state
    App.setLoading(true)
     await App.appear()
    // Render Account
    $('#account').html(App.account)

    // Render Tasks
    await App.renderTasks()

    // Update loading state
    App.setLoading(false)
  },

  renderTasks: async () => {
   
    // Load the total task count from the blockchain
   
   
    //WE HAVE TO OBTAIN ALL ENTITIES DETAILS WITH ALL WE HAVE BUILT
    
    
    var $template = $('#myDetailstemplate');
    var $completedlist =   $('#completedTaskList');
    var $content =   $('.content');
    var $blocklist =   $('#taskList');



    // Render out each task with a new task template
   
    
    for (var i = 1; i >=0; i++) {
      // Fetch the task data from the blockchain
   
   
     var processors = await  App.Industry.procenter(i);
      var  drugers = await App.Industry.self(i);

      
       




        
   

      // Create the html for the task
     
       
   
    
      
      const $newTaskTemplate = $template.clone()

      $newTaskTemplate.find('content').html(currentowner)
                        if(i>1){
      $newTaskTemplate.find('input')
                      .prop('name', currentowner)
   
                     
                      $newTaskTemplate.find('input')
                      .prop('name', receiver)
                     
                      $newTaskTemplate.find('input')
                    .prop('name', publickey)
                 
                      $newTaskTemplate.find('input')
                       .prop('name', currentownername)
                                                             
                       $newTaskTemplate.find('input')
                     .prop('name', receivername)
                                   
                  
                     $newTaskTemplate.find('input')
                   .prop('name', currentownerprocessingfee)
                  
                  
                   $newTaskTemplate.find('input')
                  .prop('name', role)
                  $newTaskTemplate.find('input').hide()
                  .prop('name', balance)
                
                  $newTaskTemplate.find('input')
                  .prop('name', location)

                  $newTaskTemplate.find('input')
                  .prop('name', hasdrug)
                
                  $newTaskTemplate.find('input').hide()
                  .prop('name', escrowamount)
                
     
                
                  $newTaskTemplate.find('input')
                  .prop('name', lastdestination)
                 
                  $newTaskTemplate.find('input').hide()
                  .prop('name', justhandedoveraddres)
                
                  $newTaskTemplate.find('input')
                 .prop('name', RFIDofdrugtobesent)
                
                
                 $newTaskTemplate.find('input')
                .prop('name', manufacturerofdrugstobesent)
            //I HAVE TO ADD THE DETAILS    
               
            
               
            
              
            $newTaskTemplate.find('input').hide()
            .prop('name', currentownerscount)

           //I HAVE TO CREATE THE DRUG DETAILS
           $newTaskTemplate.find('input')
           .prop('name', manufacturer)
           
           $newTaskTemplate.find('input')
           .prop('name', currentdrugpossessor)
          
           $newTaskTemplate.find('input')
         .prop('name', RFID)
      
         $newTaskTemplate.find('input')
            .prop('name', drugname)
                                                  
            $newTaskTemplate.find('input')
          .prop('name', cost)
                        
          $newTaskTemplate.find('input')
          .prop('name', temperature)
          
          $newTaskTemplate.find('input')
          .prop('name', concentration)
         
          $newTaskTemplate.find('input')
        .prop('name', drugquality)
     
        $newTaskTemplate.find('input')
           .prop('name', numOfDrugCount)
                                                 
         

          }
              else{
                $newTaskTemplate.find('input')
                .prop('name', currentowner)
                
                $newTaskTemplate.find('input')
                .prop('name', receiver)
               
                $newTaskTemplate.find('input')
              .prop('name', publickey)
           
              $newTaskTemplate.find('input')
                 .prop('name', currentownername)
                                                       
                 $newTaskTemplate.find('input')
               .prop('name', receivername)
                             
            
               $newTaskTemplate.find('input')
             .prop('name', currentownerprocessingfee)
            
            
             $newTaskTemplate.find('input')
            .prop('name', role)
            $newTaskTemplate.find('input').hide()
            .prop('name', balance)
          
            $newTaskTemplate.find('input')
            .prop('name', location)

            $newTaskTemplate.find('input')
            .prop('name', hasdrug)
            .prop('checked', hasdrug)

            // I HAVE TO CREATE FOR HAS ARRIVED SO THAT THEY CAN CHANGE HANDS
            $newTaskTemplate.find('input').hide()
            .prop('name', escrowamount)
          

          
            $newTaskTemplate.find('input')
            .prop('name', lastdestination)
           
            $newTaskTemplate.find('input')
            .prop('name', justhandedoveraddres)
          
            $newTaskTemplate.find('input').hide()
           .prop('name', RFIDofdrugtobesent)
          
          
           $newTaskTemplate.find('input')
          .prop('name', manufacturerofdrugstobesent)
         
       
      
        
          $newTaskTemplate.find('input').hide()
      .prop('name', currentownerscount)

             //THIS IS WHERE WE SUPPLY THE DRUG DETAILS
             $newTaskTemplate.find('input').hide()
             .prop('name', manufacturer)
             
             $newTaskTemplate.find('input')
             .prop('name', currentdrugpossessor)
            
             $newTaskTemplate.find('input').hide()
           .prop('name', RFID)
        
           $newTaskTemplate.find('input').hide()
              .prop('name', drugname)
                                                    
              $newTaskTemplate.find('input')
            .prop('name', cost)
                          
            $newTaskTemplate.find('input')
            .prop('name', temperature)
            
            $newTaskTemplate.find('input')
            .prop('name', concentration)
           
            $newTaskTemplate.find('input')
          .prop('name', drugquality)
       
          $newTaskTemplate.find('input').hide()
             .prop('name', numOfDrugCount)
                                                   
                      
                  
             $newTaskTemplate.find('input')
             .prop('name', manufacturerofdrugstobesent)
 



    }
   
    

             $newTaskTemplate.find('input')
               .prop('name', 'submitdetails')
               .on('click', App.createPhase);

           
  
     
               $blocklist.append($newTaskTemplate)
               $newTaskTemplate.show()
    }
  },

createPhase: async () => {
    App.setLoading(true)
    const senderaddress = $(currentowner ).val()
    const sendername = $(currentownername).val()
    const receipientes = $(receipient).val()
    const receipientnamees= $(receipientname).val()
    const RFIDes= $(RFID).val()
    const lastdestinationes= $(lastdestination).val()
    const processingnumberes= $(processingnumber).val()

    await App.Industry.newProcessingPhase(senderaddress, sendername, receipientes, receipientnamees,RFIDes, lastdestinationes,  processingnumberes)
    window.location.reload()
  },
/*
  toggleCompleted: async (e) => {
    App.setLoading(true)
    const taskId = e.target.name
    await App.todoList.toggleCompleted(taskId)
    window.location.reload()
  },
*/ 
 



appear: async () => {
  var processors = await  App.Industry.procenter(i);
var  drugers = await App.Industry.self(i);
for (c=1; c>=0; c++ ){
  const thisuser = App.account[0]
  const thisusername = 'Peeman'
  const thisreceipient ='0xdE27Eaf0FBE58cAF3B932dF0f414584bf2D15000'
  const thisreceipientname = 'Kofi'
  const thisrfid = 'ECP34489'
  const thislastdestination = '0x542049c01139F177DfCF1f7Abe6898c190667116'
  const thisprocessingnumner = c


const  processingphaseser = await App.Industry.newProcessingPhase (thisuser, thisusername,thisreceipient, thisreceipientname,thisrfid, thislastdestination,  thisprocessingnumner)  
console.log(processingphaseser);

const  printprocessingentities  = await App.Industry.PrintProcessingEntityDetails(thisrfid) 
console.log('printprocessingentities', printprocessingentities)

}
},




  setLoading: (boolean) => {
    App.loading = boolean
    const loader = $('#loader')
    const content = $('#content')
    if (boolean) {
      loader.show()
      content.hide()
    } else {
      loader.hide()
      content.show()
    }
  }

}

$(() => {
  $(window).load(() => {
    App.load()
  })
})
