<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    // Here you can send the email, save to database, etc.
    // Example using PHP's mail function
    $to = "your_email@example.com";
    $subject = "Contact Form Submission";
    $body = "Name: $name\nEmail: $email\nMessage: $message";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo "Thank you! Your message has been sent.";
    } else {
        echo "Oops! Something went wrong. Please try again later.";
    }
}
?>
