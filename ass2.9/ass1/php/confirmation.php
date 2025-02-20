
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
    <h1 class="HeadingCheck">Order Confirmation</h1>
    </div>



<?php
include "send-email.php";
?>

    <h2>Order Details:</h2>
  
    
   
   <div class="order">
       
   <?php
if(isset($_POST['submit'])){
    $fname = $_POST['fname'];
    $lname = $_POST['lname'];
    $address = $_POST['address'];
    $suburb = $_POST['suburb'];
    $state = $_POST['state'];
    $country = $_POST['country'];
    $email = $_POST['email'];
    
    // code to send email with user's information
    
    echo "<h2>Thank you for your order,  $fname $lname!</h2>";
    echo "<p>We have sent an email confirmation to $email.</p>";
    echo "<h2>Your Order Details:</h2>";
    echo "<ul>";
    echo "<li><strong>Name:</strong> $fname $lname</li>";
    echo "<li><strong>Address:</strong> $address</li>";
    echo "<li><strong>Suburb:</strong> $suburb</li>";
    echo "<li><strong>State:</strong> $state</li>";
    echo "<li><strong>Country:</strong> $country</li>";
    echo "<li><strong>Email:</strong> $email</li>";
    echo "</ul>";
    

    $to = $email;
    $subject = "Order Confirmation";
    $message = "Thank you for your order. Here are your order details:\n\n";

    // Add the order details to the message
 

    // Set the headers
    $headers = "From: onlinegrocerystore@gmail.com\r\n";
    $headers .= "Reply-To: onlinegrocerystore@gmail.com\r\n";
    $headers .= "Content-type: text/plain; charset=UTF-8\r\n";

    // Send the email
    mail($to, $subject, $message, $headers);
}
?>

    <p>Your order has been confirmed and will be shipped to:</p>
    <p><?php echo $address; ?></p>
    <p><?php echo $suburb; ?>, <?php echo $state; ?>, <?php echo $country; ?></p>
   
    <p>Your order was placed on <?php echo date("F j, Y, g:i a"); ?>.</p>
       
   </div>

</body>


    <SCRIPT>

        
      


    </SCRIPT>


