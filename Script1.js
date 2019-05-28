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
    window.open('https://github.com/paraspathak', '_blank');
}

function open_github() {
    window.open('https://github.com/paraspathak', '_blank');
}

function open_resume(){
    window.open("https://github.com/paraspathak/paraspathak.github.io/Resume/Resume_draft.pdf",'_blank');
}