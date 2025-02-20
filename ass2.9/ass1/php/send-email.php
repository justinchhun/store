<?php
// Retrieve form data
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$address = $_POST['address'];
$suburb = $_POST['suburb'];
$state = $_POST['state'];
$country = $_POST['country'];
$email = $_POST['email'];

// Build email message
$message = "First Name: " . $fname . "\n" .
           "Last Name: " . $lname . "\n" .
           "Address: " . $address . "\n" .
           "Suburb: " . $suburb . "\n" .
           "State: " . $state . "\n" .
           "Country: " . $country . "\n" .
           "Email: " . $email . "\n";

// Send email
$to = $email1;
$subject = 'New Order';
$headers = 'From: onlinegroceystore@gmail.com';
mail($to, $subject, $message, $headers);

?>
