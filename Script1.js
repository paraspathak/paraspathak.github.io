var str = "<p style = \"font-size:20px\" id = \"tw\">Aspiring Software Engineer with a voracious curiosity and an ever more urge to learn new technologies</p>",
    i = 0,
    isTag,
    text;

(function type() {
    text = str.slice(0, ++i);
    if (text === str) return;

    document.getElementById('typewriter').innerHTML = text;

    var char = text.slice(-1);
    if (char === '<') isTag = true;
    if (char === '>') isTag = false;

    if (isTag) return type();
    setTimeout(type, 80);
}());


function open_linkedin() {
    window.open('https://www.linkedin.com/in/paras-pathak-133b07b1', '_blank');
}

function open_github() {
    window.open('https://github.com/paraspathak', '_blank');
}

function open_resume(){
    window.open("https://1drv.ms/w/s!AtQnjOclVBQPzX3xO00UmeEpBXWM?e=c7Alhv",'_blank');
}

function check_if_mobile(){
    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
        alert("Not mobile responsive game");
        window.open("https://github.com/paraspathak/JS_Teen_Patti",'_blank');
    }
    else{
        window.open("https://paraspathak.github.io/JS_Teen_Patti/",'_blank');
    }
}

function open_link(link){
    window.open(link, '_blank');
}