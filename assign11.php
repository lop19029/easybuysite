<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset = "UTF-8">
        <title>Purchase Summary</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <?php
        //Receive user info
        $first_name = $_POST["first_name"];
        $last_name = $_POST["last_name"];
        $address = $_POST["address"];
        $phone = $_POST["phone"];

        //Receive cart info
        $check_list = $_POST["check_list"];
        $total = $_POST["total"];

        //Receive card info
        $card = $_POST["card"];
        $creditCardNumber = $_POST["credit_card"];
        $exp_date = $_POST["exp_date"];
        ?>
    </head>
    <body>
        <header>
            <img id = "logoimg" src="logo.png" alt="easybuy.com logo">
        </header>
        <h1>Confirm your information<h1>
        <form action="assign11_a.php" method="POST"> 
                <fieldset class = "customerInfo">
                    <legend>Customer information</legend>
                    <label >First name</label><br>
                    <input type = "text" value = "<?php echo $first_name;?>" readonly><br>
                    <label>Last name</label><br>
                    <input type = "text" value = "<?php echo $last_name;?>" readonly><br>
                    <label>Delivery address</label><br>
                    <textarea><?php echo $address?></textarea><br>
                    <label>Phone</label><br>
                    <input type = "text" value = "<?php echo $phone;?>" readonly><br>
                </fieldset>
                <fieldset class = "cartInfo">
                    <legend>Your Cart</legend></br>
                    <?php foreach($check_list as $item){
                        echo "$item</br>";
                    }?>
                    <p>Total</p>
                    <input type="text" value = "<?php echo $total;?>" readonly></br>
                </fieldset>
                <fieldset class="paymentInfo">
                    <legend>Payment Information</legend>
                    <p>Credit Card Type</p>
                    <?php echo $card;?><br><br>
                    <label>Credit Card Number</label><br>
                    <input type="text" value = "<?php echo $creditCardNumber;?>" readonly><br>
                    <br>
                    <label>Expiration Date</label><br>
                    <input type="text" value = <?php echo $exp_date;?> readonly><br>
                </fieldset>
                <button type="submit" id = "button2" name = "submitButton" value = "cancel">Cancel Purchase</button>
                <button type="submit" id = "button1" name = "submitButton" value = "confirm">Confirm Purchase</button>
            </form>
