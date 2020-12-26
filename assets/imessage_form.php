<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <META HTTP-EQUIV="Pragma" CONTENT="no-cache">
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
        <p class="message-received">Hi</p>
        <p class="message-received">You will be able to send me a message using this app !</p>
        <p class="message-received">First, please tell me your first and last name, and your company name (if appliable) in the field below.</p>
        <p class="message-received"><i>Example : John Something from Thing LLC</i></p>
    </main>
    <form method="POST" action="imessage_target.php" autocomplete="off">
        <input type="text" required class="messageInput" placeholder="Your first name, last name and company name" name="names" style="z-index:3" onkeydown="sending(event,this)">
        <input type="text" required class="messageInput" placeholder="Your email adress" name="email" style="z-index:2" onkeydown="sending(event,this)">
        <textarea name="message" required rows="1" class="messageInput" style="z-index:0" placeholder="Your message"></textarea>
        <input type="image" src="../images/send_button.png" border="0" alt="Submit" />
    </form>

    <!--⬇ Script ⬇-->
    <script>
    function sending(e,el){
        
        var code = (e.keyCode ? e.keyCode : e.which);

        // console.log(code);

        /*⬇ code == 13 → Return/Enter & code == 9 → Tab ⬇*/
        if(code == 13 || code == 9) {
            let val = el.value;

            if(val != ''){

                if(el.name == "names"){
                    document.querySelector('main').innerHTML += `
                        <p class="message-sent">${val}</p>
                        <p class="message-received">Alright ${val}, nice to meet you ! Can I please ask you for your email address ? You can type it in the field below !</p>
                    `;
                } else if(el.name == "email"){
                    document.querySelector('main').innerHTML += `
                        <p class="message-sent">${val}</p>
                        <p class="message-received">Thanks ! I'll be using this email address to reach you once I've read your message ! Talking about message, what is it ? You can type it below as well as before.</p>
                    `;
                }

                el.classList.add('screen-reader-text');
            }
        }
    }

    var textarea = document.querySelector("textarea");
    var heightLimit = 150; /* Maximum height: 200px */

    textarea.oninput = function() {
        textarea.style.height = ""; /* Reset the height*/
        textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
        document.querySelector('form').style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
    }
    </script>
</body>
</html>