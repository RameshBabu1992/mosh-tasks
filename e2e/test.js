// url1 = javascript:ShowUserProfilePopup('../Administration/UserProfilePopup.aspx?userId=3114');
// url2 = javascript:ShowUserProfilePopup('../Administration/UserProfilePopup.aspx?userId=3114');
// url3 = javascript:ShowUserProfilePopup('../Administration/UserProfilePopup.aspx?userId=3114');
// Class = "SystemUrl"
// innerHtml
// innerText
// ///////////First Part///////////
// var data = document.getElementsByTagName("a");
// var x3=data[11];
// var pattern="";
// console.log(x3.href);
// data.forEach(function(element){
//   if(element.href.includes("javascript:ShowUserProfilePopup('../Administration/UserProfilePopup.aspx?userId=")){
//     pattern = element.href;
//   }
// });
// console.log(pattern);

// var data = document.getElementsByTagName("a");
// var pattern="";
// Object.keys(data).forEach(function(key){
//   if(data[key].href.includes("javascript:ShowUserProfilePopup('../Administration/UserProfilePopup.aspx?userId=")){
// 	console.log("Run");
// 	pattern = data[key].href;
// // 	console.log(pattern.substring(0,10));
//   }
// });
// console.log("pattern = "+pattern);



// ///////////Second Part///////////
// var pattern = "javascript:ShowUserProfilePopup('../Administration/UserProfilePopup.aspx?userId=3114";
// var data = document.getElementsByTagName("a")[11];
// Object.keys(data).forEach(function(key) {
//     if(data[key].href.includes(pattern)){
//       console.log("found");
//     }
// });


// ///////////Third Part///////////
// var tag=document.getElementById("acap");
// tag.classList.add("inactive");



// working code
var data = document.getElementsByClassName("SystemURL");
pattern = data[0].href.substring(data[0].href.length-3,data[0].href.length-7);
var hideField = document.getElementById("6-"+pattern);
console.log(hideField);
hideField.setAttribute("hidden",true);


// check for two RPs
(function(){
  let timer = setInterval(function(){
    function hideUser(userid,frameRef){
      if(frameRef.contentWindow.document.getElementById("6-"+userid)["className"].split(" ")[0]==="rtLI"){
          frameRef.contentWindow.document.getElementById("6-"+userid).setAttribute("hidden",true);
      }
    }
    try{  
      let RP1 = "master_DefaultContent_rts_s1698_f4847c_shf";    
      let user_in_RP1 = JSON.parse(document.getElementById(RP1).value)[0].value.split(":")[0];
      if(user_in_RP1){
       console.log(user_in_RP1);
        if(document.getElementsByTagName("iframe")[0].name === "lookupWindow"){
          frameRef = document.getElementsByTagName("iframe")[0];
          hideUser(user_in_RP1,frameRef);
        }
      }
    }catch(e){
      console.log("RP1 is empty");
    }
    try{     
      let RP2 = "master_DefaultContent_rts_s1698_f22070c_shf";
      let user_in_RP2 = JSON.parse(document.getElementById(RP2).value)[0].value.split(":")[0];
      if(user_in_RP2){
       console.log(user_in_RP2);
        if(document.getElementsByTagName("iframe")[0].name === "lookupWindow"){
          frameRef = document.getElementsByTagName("iframe")[0];
          hideUser(user_in_RP2,frameRef);
        }
      }
    }catch(e){
      console.log("RP2 is empty");
    }
  },100);  
  console.log(timer);
})();

