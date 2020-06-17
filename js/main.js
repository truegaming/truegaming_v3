$(document).ready(function() {
    $('ul.tabs li').click(function() {
        var tab_id = $(this).attr('data-tab');

        $('ul.tabs li').removeClass('current');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $("#" + tab_id).addClass('current');
    })

    if (document.querySelector('.siema') != null) {
        const mySiema = new Siema({
            selector: '.siema',
            duration: 200,
            easing: 'ease-out',
            perPage: 1,
            startIndex: 0,
            draggable: true,
            multipleDrag: true,
            threshold: 20,
            loop: true,
            rtl: true,
            onInit: () => {},
            onChange: () => {},
        });
        document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
        document.querySelector('.next').addEventListener('click', () => mySiema.next());
    }

    function getWidth() {
        xWidth = null;
        if (window.screen != null)
            xWidth = window.screen.availWidth;
        if (window.innerWidth != null)
            xWidth = window.innerWidth;
        if (document.body != null)
            xWidth = document.body.clientWidth;
        return xWidth;
    }

    var widget_tg_game_reviews_widget = document.querySelector(".sidebar-widget-reviews");

    function resizeReviewWidget() {
        if (getWidth() <= 1139) {
            document.getElementById('game-review-mobile').appendChild(widget_tg_game_reviews_widget);
        } else {
            document.querySelector('.sidebar-content-side').prepend(widget_tg_game_reviews_widget);
        }
    }

    if (($("#game-review-mobile").length) && (document.querySelector(".sidebar-widget-reviews") != null)) {
        window.addEventListener("resize", function() {
            resizeReviewWidget();
        });
        resizeReviewWidget();
    }


    if ((getWidth() >= 1024) && $(".footer-ad-sidebar").length) {
        // Footer Ad Placement

        // var newFooterSidebarLocation = $(".article-single:nth-child(8)");
        // var oldFooterSidebar = $(".footer-ad-sidebar");
        // var adWidth = "1140px";

        // newFooterSidebarLocation.css("padding-bottom", "350px");
        // newFooterSidebarLocation.append(oldFooterSidebar);
        // oldFooterSidebar.css("position", "absolute");
        // oldFooterSidebar.css("top", "250px");
        // oldFooterSidebar.css("width", adWidth);
        // oldFooterSidebar.css("height", "300px");

        // var rightValue = parseInt((parseInt($(".container").width(), 10) - parseInt($(".footer-ad-sidebar").width(), 10)) / 2, 10);
        // oldFooterSidebar.css("right", rightValue + "px");
    }
});

function toggleMenu() {

    var menuMobile = document.querySelector(".show-menu");
    if (menuMobile.style.display == "block") {
        menuMobile.style.display = "none";
    } else {
        menuMobile.style.display = "block";
    }
}

function getMeta(metaName) {
    const metas = document.getElementsByTagName('meta');

    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === metaName) {
            return metas[i].getAttribute('content');
        }
    }

    return '';
}


function shareAction() {
    if (navigator.share) {
        navigator.share({
                title: document.title,
                text: getMeta('description'),
                url: window.location.href,
            })
            .then(() => console.log('Successful share'))
            .catch((error) => console.log('Error sharing', error));
    }
}

if (document.querySelector('.shareActionBtn')) {
    if (!navigator.share) {
        document.querySelector('.shareActionBtn').classList.add('hidden');
        document.querySelector('.shareActionBtn').classList.remove('inline-flex');
    }
    document.querySelector('.shareActionBtn').addEventListener('click', function() {
        shareAction();
    });
}

// Night Mode 
// var switchMode = document.querySelector(".night-mode");

// switchMode.addEventListener("click", function() {
//     if (this.classList.contains("on")) {
//         this.classList.remove("on");
//         $(".wrapper-section").removeClass("night");
//         $("h2").removeClass("text-white").addClass("text-gray-900");
//         $(".post-title").removeClass("text-white").addClass("text-black");
//         $(".title-review").removeClass("text-white").addClass('text-gray-900');
//         $(".author").removeClass("bg-night-200").addClass('bg-white');
//         $(".article-single-hover").removeClass("article-single-dark").addClass('article-single');
//         $(".tag-red").removeClass("bg-indigo-500").addClass('bg-red-600');
//         $(".line-border").removeClass("border-indigo-500").addClass('border-red-600');
//         $(".btn-change").removeClass("btn-dark").addClass('btn-red');
//         $(".show-more").removeClass("text-indigo-600").addClass('text-red-600');
//         $(".title-review").removeClass("hover:text-indigo-500").addClass('hover:text-red-600');
//         $(".custom-color-text").removeClass("text-indigo-500").addClass('text-red-600');
//         $(".rate-section").removeClass("bg-indigo-700").addClass('bg-red-700');
//     } else {
//         this.classList.add("on");
//         $(".wrapper-section").addClass("night")
//         $("h2").removeClass("text-gray-900").addClass("text-white");
//         $(".post-title").removeClass("text-black").addClass("text-white");
//         $(".title-review").removeClass("text-gray-900").addClass("text-white");
//         $(".author").removeClass("bg-white").addClass('bg-night-200');
//         $(".article-single-hover").removeClass("article-single").addClass('article-single-dark');
//         $(".tag-red").removeClass("bg-red-600").addClass('bg-indigo-500');
//         $(".line-border").removeClass("border-red-600").addClass('border-indigo-500');
//         $(".btn-change").removeClass("btn-red").addClass('btn-dark');
//         $(".show-more").removeClass("text-red-600").addClass('text-indigo-600');
//         $(".title-review").removeClass("hover:text-red-600").addClass('hover:text-indigo-500');
//         $(".custom-color-text").removeClass("text-red-600").addClass('text-indigo-500');
//         $(".rate-section").removeClass("bg-red-700").addClass('bg-indigo-700');
//     }
// });

// var switchMode = document.querySelector(".night-mode");
// $('.wrapper-section').toggleClass(localStorage.toggled);

// function darkLight() {
//     if (localStorage.toggled != 'night') {
//         switchMode.classList.add("on");
//         $('.wrapper-section').toggleClass('night', true);
//         localStorage.toggled = "night";

//     } else {
//         switchMode.classList.remove("on");
//         $('.wrapper-section').toggleClass('night', false);
//         localStorage.toggled = "";
//     }
// }

const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) =>
    window
    .getComputedStyle(element) // containing the values of all CSS properties of an element
    .getPropertyValue(style); // containing the value of a specified CSS property.

const initialColors = {
    // Main Background 
    bg: getStyle(html, "--bg"),
    // Title Color
    colorHeadings: getStyle(html, "--color-headings"),
    // Text Color
    colorText: getStyle(html, "--color-text"),
    // Tags Color Background and Border
    tag: getStyle(html, "--tag"),
    // Bottom Tags Border Color
    colorBorder: getStyle(html, "--color-border"),
    // Color Button Show More
    showMore: getStyle(html, "--show-more"),
    // Color Text Article Section in hover 
    colorHover: getStyle(html, "--color-hover"),
    // Color Background section author 
    bgAuthor: getStyle(html, "--bg-author"),
    // Color icon search Header and Text footer
    colorIndigo: getStyle(html, "--color-indigo"),
    // Color Text description
    colorDescription: getStyle(html, "--color-description"),
    // Color border Red 2px for single page images
    borderImages: getStyle(html, "--border-images"),
    // Color border Red 1px for article images
    borderRed: getStyle(html, "--border-red"),
}

const darkMode = {
    bg: "#000000",
    colorHeadings: "#fc8181",
    colorText: "#718096",
    tag: "#e53e3e",
    colorBorder: "#e53e3e",
    showMore: "#e53e3e",
    colorHover: "#e53e3e",
    bgAuthor: "#293347",
    colorDescription: "#a0aec0",
    borderImages: "#e53e3e",
    borderRed: "rgba(155, 78, 78, 0.4)",
}

const transformKey = key =>
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase();

const changeColors = (colors) => {
    Object.keys(colors).map(key =>
        html.style.setProperty(transformKey(key), colors[key])
    );
}

checkbox.addEventListener("change", ({ target }) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors);
});

const isExistLocalStorage = (key) =>
    localStorage.getItem(key) != null;

const createOrEditLocalStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

const getValeuLocalStorage = (key) =>
    JSON.parse(localStorage.getItem(key));


checkbox.addEventListener("change", ({ target }) => {
    if (target.checked) {
        changeColors(darkMode);
        createOrEditLocalStorage('mode', 'darkMode');
    } else {
        changeColors(initialColors);
        createOrEditLocalStorage('mode', 'initialColors');
    }
})

if (!isExistLocalStorage('mode'))
    createOrEditLocalStorage('mode', 'initialColors');

if (getValeuLocalStorage('mode') === "initialColors") {
    checkbox.removeAttribute('checked');
    changeColors(initialColors);
} else {
    checkbox.setAttribute('checked', "");
    changeColors(darkMode);
}


// Menu Desktop And Mobile
document.getElementById("MenuMobile").style.display = "none";

function getScreenWidth() {
    w = null;
    if (window.screen != null) // window.screen object contains information about the user's screen.
        w = window.screen.availWidth; // availWidth returns the width of the user's screen, in pixel
    if (window.innerWidth != null)
        w = window.innerWidth; // innerWidth returns the width of a window's content area.
    if (document.body != null)
        w = document.body.clientWidth; // clientWidth returns the viewable width of an element in pixels
    return w;
}

window.addEventListener("load", onLoadPage);

function onLoadPage() {
    HideMenu();
    window.addEventListener("resize", HideMenu);
}
HideMenu();

function HideMenu() {
    if (getScreenWidth() <= 1024) {
        document.getElementById("MenuDesktop").style.display = "none";
        document.getElementById("MenuMobile").style.display = "block";
    } else {
        document.getElementById("MenuDesktop").style.display = "flex";
        document.getElementById("MenuMobile").style.display = "none";
    }
}


// Fullscreen Search 

$('.control').click(function() {
    $('body').addClass('search-active');
    $('.input-search').focus();
});

$('.icon-close').click(function() {
    $('body').removeClass('search-active');
});