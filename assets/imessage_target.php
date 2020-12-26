<?php
    include_once 'connect.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>iMessage Form | Loïc Etienne</title>
    <link rel="stylesheet" href="imessage_stylesheet.css">
</head>
<body>
    <aside>
        <div class="searchbar-container">
            <input type="text" placeholder="This searchbar isn't doing anything...">
            <img src="../images/search_icon.png" alt="" ondragstart="return false">
        </div>
        <div class="contact">
            <img src="../images/loic_etienne_linkedin_pic.jpeg" alt="">
            <b>Loïc Etienne</b><br>
            <span>Contact me here...</span>
        </div>
    </aside>
    <main>
        <div class="user-container">
            <span>To : </span>&nbsp;<span>Loïc Etienne</span>
        </div>
        <?php
            if(isset($_POST["names"]) && isset($_POST["email"]) && isset($_POST["message"])){
                $names = htmlspecialchars($_POST["names"]);
                $email = htmlspecialchars($_POST["email"]);
                $message = htmlspecialchars($_POST["message"]);

                $sql = "INSERT INTO portfolio_users(names, email, message) VALUES (?,?,?)";
                // On prépare la requête avant l'envoi :
                $req = $link -> prepare($sql);
                // On exécute la requête en insérant la valeur transmise en GET
                $req -> execute([$names, $email, $message]);

                echo '<p class="message-received">Your message have been successfully received ! You can now close this window !</p>';
                echo '<p class="message-received">You sent :</p>';
                echo '<p class="message-received">'.$names.'</p>';
                echo '<p class="message-received">'.$email.'</p>';
                echo '<p class="message-received">'.$message.'</p>';

                $req = null;
            }
        ?>
    </main>
    <form>
        <input type="text" required class="messageInput" placeholder="Nothing needed here" name="names" style="z-index:3" onkeypress="return false">
    </form>
    <?php
        $link = null;
    ?>
</body>
</html>