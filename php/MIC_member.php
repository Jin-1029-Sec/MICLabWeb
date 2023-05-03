<?php
    include("condb.php");
    $db_select = "SELECT * FROM member WHERE member_grade=" . $_GET["grade"]; #get ??部
    $result = mysqli_query($db_link, $db_select);
    $sel_book = mysqli_fetch_assoc($result);
?>