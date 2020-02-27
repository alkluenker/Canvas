document.getElementById("nameerror").style.display = "none";

document.getElementById("emailerror").style.display = "none";

document.getElementById("phoneerror").style.display = "none";

document.getElementById("infoerror").style.display = "none";

document.getElementById("dayserror").style.display = "none";

document.getElementById("validinfo").style.display = "none";

function validateForm2() {

  var a = document.forms["contactform"]["name"].value;
  if (a == "") {
        //alert("name must be filled out");
        document.getElementById("nameerror").style.display = "inline";
        
      return false;
        
  }

  if (a !== "") {

    document.getElementById("nameerror").style.display = "none";

  }


  var b = document.forms["contactform"]["email"].value;

  if (b == "") {
      
    document.getElementById("emailerror").style.display = "inline";
      
    return false;
      
  }

  if (b !== "") {

    document.getElementById("emailerror").style.display = "none";

  }

  var c = document.forms["contactform"]["phone"].value;

  if (c == "") {
      
    document.getElementById("phoneerror").style.display = "inline";
      
    return false;
      
  }

  if (c !== "") {

    document.getElementById("phoneerror").style.display = "none";

  }

  

  var d = document.forms["contactform"]["info"].value;

  if (d == "") {
      
    document.getElementById("infoerror").style.display = "inline";
      
    return false;
      
  }

  if (d !== "") {

    document.getElementById("infoerror").style.display = "none";

  }

 

  if(validateChecks()==false) {
    
    document.getElementById("dayserror").style.display = "inline";

    return false;
  }
 
  

  


}


function validateChecks() {
  var chks = document.getElementsByName("options[]");
  var checkCount = 0;
  for (var i = 0; i < chks.length; i++) {
    if (chks[i].checked) {
      checkCount++;
    }
  }
  if (checkCount < 1) {
    return false;
  }

  else {
    
    alert("All information is valid. Thank you.")

    document.getElementById("validinfo").style.display = "inline";

  }
  
}
	
  

  
  
  






  
        

