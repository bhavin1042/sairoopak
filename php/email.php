<?php
    $toEmail = "info@sairoopak.com";
    $gohype = "Sairoopak Music Academy";
    $mailHeaders = "From: " . $_POST["userName"] . "<". $_POST["userEmail"] .">\r\n";
    $mailResponseHeaders = "From: " . $gohype . "<". $toEmail .">\r\n";
    $data = "From : ".$_POST["userName"]."\r\n"."Phone : ".$_POST["number"]."\r\n"."Email Address : ".$_POST["userEmail"]."\r\n"."Service : ".$_POST["service"]."\r\n"."Message : ".$_POST["message"];
    $dataResponse = "Hey ".$_POST["userName"].", \r\n"."We recieved your query, Thank you.";
    if(mail($toEmail, "Enquiry from Website - ".$_POST["service"], $data, $mailHeaders)) {
        mail($_POST["userEmail"], "Sairoopak Music Academy | We recieved your query, Thank you.", $dataResponse, $mailResponseHeaders);
        print "<p class='text-success'>Hey ".$_POST['userName'].", Your Query Sent Successfully.</p>";
    } else {
        print "<p class='Error'>Problem in Sending Mail.</p>";
    }
?>