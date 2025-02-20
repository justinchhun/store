

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Shopping Cart</title>
        <link rel="stylesheet" type="text/css" href="/ass1/css/check.css">
            


   </head>
   <body>

    
    <div class="Cart-Container">
        <div class="Header">
        <h1 class="HeadingCheck">Checkout Form</h1>
        </div>
    
    </br>
       
    <div class="form">
    <form name="myForm" action="confirmation.php" onsubmit="validateForm(event)" method="post">
        <input id="fname" name="fname" type="text" placeholder="First Name*" required>
        <input id="lname" name="lname" type="text" placeholder="Last Name*" required>
        <input id="addy" name="address" type="text" placeholder="Address*" required>
        <input id="suburb" name="suburb" type="text" placeholder="Suburb*" required>
        <input id="state" name="state" type="text" placeholder="State*" required>
        <input id="country" name="country" type="text" placeholder="Country*" required>
        <input id="email" name="email" type="email" placeholder="Email Address*" required pattern="[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$">
    
        <button name="submit" class="but" type="submit">Place Order</button>
    </form>
</div>




    
    <SCRIPT>

        
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var address = document.getElementById("addy")
    var suburb = document.getElementById("suburb");
    var state = document.getElementById("state");
    var country = document.getElementById("country");
    var email = document.getElementById("email");
   
   
    function validateForm(event) {
        var x = document.forms["myForm"]["fname"].value;
        var y = document.forms["myForm"]["lname"].value;
        var z = document.forms["myForm"]["address"].value;
        var a = document.forms["myForm"]["suburb"].value;
        var b = document.forms["myForm"]["state"].value;
        var c = document.forms["myForm"]["country"].value;
        var d = document.forms["myForm"]["email"].value;
        if ((x == "")|| (y == "") || (z == "") || (a == "") || (b == "") || (c == "") || (d == "")) {
            alert("All fields must be filled out");
            event.preventDefault();
        }
        else {
            window.location.href("confirmation.html");
            
        }
     
}


    </SCRIPT>