<!DOCTYPE html>
<html lang="en-US">
    <head>
        <meta charset = "UTF-8">
        <title>Purchase Summary</title>
        <link rel="stylesheet" type="text/css" href="styles.css">
    </head>
    <body>
        <header>
            <img id = "logoimg" src="logo.png" alt="easybuy.com logo">
        </header>
        <?php 
        $d = strtotime("+15 Days");
        $deliveryDate = date("l Y-m-d", $d);
        if ($_POST['submitButton'] == "cancel") {
            echo "<h1>Purchased canceled</h1>";
        } else {
            echo "<h1>Purchased confirmed</h1><p style = \"text-align: center;\"> Your order should
            arrive on $deliveryDate";
        }
    ?>
    </body>
</html>
        