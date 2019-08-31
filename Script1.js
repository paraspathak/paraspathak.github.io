var str = "<p style = \"font-size:20px\" id = \"tw\">Aspiring Software Engineer with a voracious curiosity and an ever more urge to solve complex problems</p>",
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

$(document).ready(function() {
    var score = [89, 80, 85, 75, 85, 60, 80, 75, 75, 60, 80, 75, 85];
    var counter = 0;
    for (var row = 0; row < 8; row++) {
        for (var column = 0; column < 2; column++) {
            if (row > 4 && column > 0) {
                break;
            }
            var id = "#r" + row + "c" + column;
            $(id).ionRangeSlider({
                min: 0,
                max: 100,
                from: score[counter],
                disable: true,
                grid: true,
                onUpdate: function() {
                    console.log($(".js-range-slider").value)
                }
            });
            counter++;
        }
    }

});



function open_linkedin() {
    window.open('https://www.linkedin.com/in/paras-pathak-133b07b1', '_blank');
}

function open_github() {
    window.open('https://github.com/paraspathak', '_blank');
}

function open_resume() {
    window.open("https://1drv.ms/w/s!AtQnjOclVBQPzX3xO00UmeEpBXWM?e=c7Alhv", '_blank');
}

function check_if_mobile() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        alert("Not mobile responsive game");
        window.open("https://github.com/paraspathak/JS_Teen_Patti", '_blank');
    } else {
        window.open("https://paraspathak.github.io/JS_Teen_Patti/", '_blank');
    }
}

function open_link(link) {
    window.open(link, '_blank');
}

function open_cpp() {
    open_link("https://paraspathak.github.io/CPP-File_Explorer/");
}