


function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
      alert("First Name must be filled out");
      return false;
    }

    var y = document.forms["myForm"]["lname"].value;
    if (y == "") {
      alert("Last Name must be filled out");
      return false;
    }
  }

  function validateForm2() {

    var a = document.forms["contactform"]["name"].value;
    if (a == "") {
        alert("name must be filled out");
        return false;
        
    }

  }

