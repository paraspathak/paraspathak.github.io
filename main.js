(function () {
    function VerticalTimeline(element) {
        this.element = element;
        this.blocks = this.element.getElementsByClassName("cd-timeline__block");
        this.images = this.element.getElementsByClassName("cd-timeline__img");
        this.contents = this.element.getElementsByClassName("cd-timeline__content");
        this.offset = 0.8;
        this.hideBlocks();
    }
    ; VerticalTimeline.prototype.hideBlocks = function () {
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.blocks[i].getBoundingClientRect().top > window.innerHeight * self.offset) {
                    self.images[i].classList.add("cd-timeline__img--hidden");
                    self.contents[i].classList.add("cd-timeline__content--hidden");
                }
            }
            )(i);
        }
    }
        ;
    VerticalTimeline.prototype.showBlocks = function () {
        if (!"classList" in document.documentElement) {
            return;
        }
        var self = this;
        for (var i = 0; i < this.blocks.length; i++) {
            (function (i) {
                if (self.contents[i].classList.contains("cd-timeline__content--hidden") && self.blocks[i].getBoundingClientRect().top <= window.innerHeight * self.offset) {
                    self.images[i].classList.add("cd-timeline__img--bounce-in");
                    self.contents[i].classList.add("cd-timeline__content--bounce-in");
                    self.images[i].classList.remove("cd-timeline__img--hidden");
                    self.contents[i].classList.remove("cd-timeline__content--hidden");
                }
            }
            )(i);
        }
    }
        ;
    var verticalTimelines = document.getElementsByClassName("js-cd-timeline")
        , verticalTimelinesArray = []
        , scrolling = false;
    if (verticalTimelines.length > 0) {
        for (var i = 0; i < verticalTimelines.length; i++) {
            (function (i) {
                verticalTimelinesArray.push(new VerticalTimeline(verticalTimelines[i]));
            }
            )(i);
        }
        window.addEventListener("scroll", function (event) {
            if (!scrolling) {
                scrolling = true;
                (!window.requestAnimationFrame) ? setTimeout(checkTimelineScroll, 250) : window.requestAnimationFrame(checkTimelineScroll);
            }
        });
    }
    function checkTimelineScroll() {
        verticalTimelinesArray.forEach(function (timeline) {
            timeline.showBlocks();
        });
        scrolling = false;
    }
    ;
}
)();


// Legacy JS

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

function open_bazar() {
    open_link("https://paraspathak.github.io/Bazar/");
}

function open_lz() {
    open_link("https://github.com/paraspathak/Bullet_Hell_Game");
}

function open_todo() {
    open_link("https://paraspathak.github.io/JS_To_do_List/");
}

function open_link(link) {
    window.open(link, '_blank');
}

function open_scraper() {
    open_link("https://paraspathak.github.io/Chelsea_FC_News/");
}

function open_cpp() {
    open_link("https://paraspathak.github.io/CPP-File_Explorer/");
}


