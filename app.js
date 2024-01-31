window.onload = ()=>{
    openWindow('safari','webpages/update.html','update')
}

/* Date init */
function time(){
    let date = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    /*⬇ Output content ⬇*/
    let output = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} at ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
    /*⬇ Target output ⬇*/
    document.querySelector('#clock').innerHTML = output;
}
setInterval(time,1000);

for(let navItem of document.querySelectorAll('.nav-item')){
    navItem.onclick = ()=>{

        navItem.classList.add('isBlue');

        let mask = document.createElement('div');
        mask.classList.add('mask');

        mask.onclick = ()=>{

            document.querySelector('.isBlue').classList.remove('isBlue');
            document.body.removeChild(document.querySelector('.mask'));

            for(i=0;i<document.querySelectorAll('.contextual-menu').length;i++){
                document.querySelectorAll('.contextual-menu')[i].style.visibility = 'hidden';
            }

        }
        document.body.append(mask);

        document.querySelector(`#${navItem.attributes["data-cm"].value}`).style.visibility = 'visible'; // Setting visibility of the contextual menu
    }
}

// Dragabilly setup step 1 → declaring variables
var draggableElems; var draggies; var draggableElem; var draggie;

// Dragabilly setup step 2 → do stuff
setInterval( ()=>{
    // if you have multiple .draggable elements
    // get all draggie elements
    draggableElems = document.querySelectorAll('.draggable');
    // array of Draggabillies
    draggies = []
    // init Draggabillies
    for ( var i=0; i < draggableElems.length; i++ ) {
    draggableElem = draggableElems[i];
    draggie = new Draggabilly( draggableElem, {
        containment: true,
        handle: '.draggable>header'
    });
    draggies.push( draggie );
}
},1000);

function openWindow(app,url,name){
    if(app != null && app != '' && app != undefined && typeof app == 'string'){

        let el = document.createElement('div');
        el.classList.add('draggable');

        if(app === 'finder'){
            el.classList.add('finder-window');
            el.innerHTML += `
            <header ondblclick="setFullScreen(this.closest('.finder-window'))">
            <div class="actionBtn red" onclick="removeEl(this.closest('.finder-window'))"></div>
            <div class="actionBtn yellow"></div>
            <div class="actionBtn green" onclick="setFullScreen(this.closest('.finder-window'))"></div>
            <img src="images/icons/folder-icon.png" alt="">
            <span>My projects</span>
            </header>
            <div class="finder-icon" onclick="openWindow('safari','webpages/chinese_portrait.html','chinese portrait')">
                <img src="images/portrait_chinois.png" alt="chinese portrait" draggable="false">
                <p>My chinese portrait</p>
            </div>
            <div class="finder-icon" onclick="openWindow('safari','webpages/web_resume.html','web resume')">
                <img src="images/web_resume.png" alt="web resume" draggable="false">
                <p>Web Resume</p>
            </div>
            <div class="finder-icon" onclick="openWindow('safari','webpages/quoridor.html','quoridor')">
                <img src="images/quoridor.png" alt="quoridor" draggable="false">
                <p>Quoridor game</p>
            </div>
            <div class="finder-icon" onclick="openWindow('safari','webpages/video_resume.html','video resume')">
                <img src="images/video_resume.png" alt="video resume" draggable="false">
                <p>Video Resume</p>
            </div>
            <div class="finder-icon" onclick="openWindow('safari','webpages/escape.html','escape')">
                <img src="images/escape.png" alt="Escape motion design" draggable="false">
                <p>Escape (motion design)</p>
            </div>
            <div class="finder-icon" onclick="openWindow('safari','webpages/stagengo.html','stagengo')">
                <img src="images/stagengo.png" alt="Stage'N'Go" draggable="false">
                <p>Stage'N'Go</p>
            </div>
            <div class="finder-icon" onclick="openWindow('safari','webpages/reah.html','reah')">
                <img src="images/reah.png" alt="Reah" class="reah-icon" draggable="false">
                <p>Reah</p>
            </div>`;
            document.body.append(el);
            
        } else if(app === 'safari'){
            el.classList.add('safarii');
            el.innerHTML += `
            <header ondblclick="setFullScreen(this.closest('.safarii'))">
            <div class="actionBtn red" onclick="removeEl(this.closest('.safarii'))"></div>
            <div class="actionBtn yellow"></div>
            <div class="actionBtn green" onclick="setFullScreen(this.closest('.safarii'))"></div>
            <input type="text" class="safari-input" onkeypress="urlSubmit(event,this)" value="${name}">
            </header>
            <iframe src="${url}" frameborder="0"></iframe>`;
            document.body.append(el);
        } else if(app === 'imessage') {
            el.classList.add('imessage-window');
            el.innerHTML += `
            <header style="touch-action: none;" ondblclick="setFullScreen(this.closest('.imessage-window'))">
            <div class="actionBtn red" onclick="removeEl(this.closest('.imessage-window'))"></div>
            <div class="actionBtn yellow"></div>
            <div class="actionBtn green" onclick="setFullScreen(this.closest('.imessage-window'))"></div>
            </header>
            <iframe src="assets/imessage_form.html" scrolling="no" frameborder="0"></iframe>`;
            document.body.append(el);
        }
    } else {
        console.log('There is an error about the variable app → '+app);
    }
}

function removeEl(element){
    document.body.removeChild(element);
}

function urlSubmit(e,relevantInput){
    const code = e.keyCode ? e.keyCode : e.which

    if(code == 13) { //Enter keycode

        const iframe = relevantInput.closest('div').querySelector('iframe')

        const val = relevantInput.value

        if(val == 'guide'){
            iframe.src = 'webpages/guide.html';
        } else if(val === 'chinese portrait'){
            iframe.src = 'webpages/chinese_portrait.html';
        } else if(val === 'web resume'){
            iframe.src = 'webpages/web_resume.html';
        } else if(val === 'quoridor'){
            iframe.src = 'webpages/quoridor.html';
        } else if(val === 'video resume'){
            iframe.src = 'webpages/video_resume.html';
        } else if(val === 'escape'){
            iframe.src = 'webpages/escape.html';
        } else if(val === 'reah'){
            iframe.src = 'webpages/reah.html';
        } else if(val === 'about me'){
            iframe.src = 'webpages/about_me.html';
        } else if(val === 'stagengo'){
            iframe.src = 'webpages/stagengo.html';
        } else if(val === 'about this project'){
            iframe.src = 'webpages/about_this_project.html';
        } else if (val === 'update') {
            iframe.src = 'webpages/update.html'
        }
        else {
            iframe.src = 'webpages/access_denied.html';
        }

    }
}

function redirect(url){
    window.open(url, '_blank');
}

function setFullScreen(target) {
    if(!target.classList.contains('fullscreen')){
        target.classList.add('fullscreen');
        target.classList.remove('draggable');
    } else {
        target.classList.add('draggable');
        target.classList.remove('fullscreen');
    }
}