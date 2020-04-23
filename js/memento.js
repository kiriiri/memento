/* FIND A PHOTOGRAPHER */

/* FIND A PHOTOGRAPHER */

/* BE LISTED */
function capitalize_inputs(str) { //function to capitalize inputs
  return str.replace(/\w\S*/g, function(txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
$(document).ready(function() { 
  $("#listForm").submit(function(event) {
      event.preventDefault(); //prevent form from submitting
      getListed(); //carry out function
  });
});

function getListed(){
    var photogName = capitalize_inputs(document.getElementById("listName").value);
    localStorage.setItem("Name", JSON.stringify(photogName));
    var birthdays = document.getElementById("birthdayRadio").checked;
    localStorage.setItem("Event2", JSON.stringify(birthdays));
    var babyshowers = document.getElementById("babyshowerRadio").checked;
    localStorage.setItem("Event1", JSON.stringify(babyshowers));
    var graduations = document.getElementById("graduationRadio").checked;
    localStorage.setItem("Event3", JSON.stringify(graduations));
    var weddings = document.getElementById("weddingRadio").checked;
    localStorage.setItem("Event4", JSON.stringify(weddings));
    var photogCost = document.getElementById("listCost").value;
    localStorage.setItem("Cost", JSON.stringify(photogCost));
    var photogAbout = document.getElementById("listAbout").value;
    localStorage.setItem("About", JSON.stringify(photogAbout));
    var photogEmail = document.getElementById("listEmail").value;
    localStorage.setItem("Email", JSON.stringify(photogEmail));
    var photogPortfolio = document.getElementById("listPortfolio").value;
    localStorage.setItem("Portfolio", JSON.stringify(photogPortfolio));
    if ((photogName != "") || (photogPortfolio != "") || (photogEmail != "")|| (photogAbout != "")){ //ensure all fields have inputs
    $("#photogProfile").show();
    //post data to card from localstorage
    document.getElementById("photogName").innerHTML = JSON.parse(localStorage.getItem("Name"));
    document.getElementById("photogCost").innerHTML = JSON.parse(localStorage.getItem("Cost"));
    var profileImage = JSON.parse(localStorage.getItem("listImage"));
    $("#photogImage").attr("src", profileImage);
    document.getElementById("photogAbout").innerHTML = JSON.parse(localStorage.getItem("About"));
   // document.getElementById("photogPortfolio").innerHTML = JSON.parse(localStorage.getItem("Portfolio"));
    //document.getElementById("photogEmail").innerHTML = JSON.parse(localStorage.getItem("Email"));
    //document.getElementById("photogImage").src= profileImage;
    var email = JSON.parse(localStorage.getItem("Email"));
    $("#photogEmail").attr("href", email);
    var portfolio = JSON.parse(localStorage.getItem("Portfolio"));
    $("#photogPortfolio").attr("href", portfolio);
    } else { //display error message if any field is empty
      document.getElementById("error").innerHTML = "Please fill in all fields!";
      document.getElementById("error").style.color = "red"
    }
    document.getElementById("listForm").reset(); //reset form
}
/* BE LISTED */

