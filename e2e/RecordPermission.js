// file shared live

(function(){
  // class containing all required fields, helper and driver functions
  class RecordPermission{

    //constructor
    constructor(recordPermissionFields){
      this.recordPermissionFields = recordPermissionFields;
    }

    // helper function to hide user
    hideUser(userid,frameRef){
      if(frameRef.contentWindow.document.getElementById("6-"+userid)["className"].split(" ")[0]==="rtLI"){
          frameRef.contentWindow.document.getElementById("6-"+userid).setAttribute("hidden",true);
      }
    }

    // helper function to fetch user in the record permission field
    fetchUser(RP){
      // console.log(RP);
      return JSON.parse(document.getElementById(RP).value)[0].value.split(":")[0];
    }

    // function to run the main logic
    run(){
      for(let i=0;i<this.recordPermissionFields.length;i++){
        let RP = this.recordPermissionFields[i];
        console.log(RP);
        try{      
          let user_in_RP = this.fetchUser(RP);
          console.log(user_in_RP);
          if(user_in_RP){
            if(document.getElementsByTagName("iframe")[0].name === "lookupWindow"){
              let frameRef = document.getElementsByTagName("iframe")[0];
              this.hideUser(user_in_RP,frameRef);
            }
          }
        }catch(e){
          console.error(e);
        }
      }
    }
  }

  // define all record permission fields here
  let RP1 = "master_DefaultContent_rts_s1698_f4847c_shf";
  let RP2 = "master_DefaultContent_rts_s1698_f22070c_shf";


  // create a record permission object
  recordPermission = new RecordPermission([RP1,RP2]);

  // set timer function to check regularly for any change in the record permission field's value
  let timer = setInterval(function(){

    // executing the main function
    recordPermission.run();

  },100);
  console.log(timer);
})();