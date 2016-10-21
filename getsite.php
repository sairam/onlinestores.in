<?php
//print_r($_POST);

function VisitorIP() {
   if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
       $TheIp=$_SERVER['HTTP_X_FORWARDED_FOR'];
   else $TheIp=$_SERVER['REMOTE_ADDR'];

   return trim($TheIp);
}

mail( "sairam.kunala@gmail.com" , "[onlinestores.bitgeek.in] Add site" , $_POST['site'] ."\nshould be added as per request from ".VisitorIP() );

header('Location: index.html');

?>