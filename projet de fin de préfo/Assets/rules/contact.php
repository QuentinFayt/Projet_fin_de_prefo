<?php
    $name = $_POST["user_name"];
    $email = $_POST['user_mail'];
    $to      = 'quentin.fayt.p@gmail.com';
    $subject = "De mon site préfo de la part de $name";
    $message = $_POST['user_msg'];
    $headers = $email ;
    mail($to, $subject, $message, $headers);
    header('Location: http://quentin.webdev-cf2m.be/prefo/contact.html');