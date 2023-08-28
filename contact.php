<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $message = $_POST["message"];
  
  // Send an email to your specified email address
  $to = "your@email.com";
  $subject = "New Contact Form Submission";
  $headers = "From: $email";
  
  mail($to, $subject, $message, $headers);
  
  // Redirect back to the index page after submitting the form
  header("Location: index.html?message=success");
  exit;
}
?>
