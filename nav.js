
var blog = document.getElementById("blog");
var pages = document.getElementById("pages");

var blogdrop = document.getElementById("blogdrop")
var pagesdrop = document.getElementById("pagesdrop")

var count1 = 0;
var count2 = 0;

function showAndHideBlogdrop() {
    if ( count1%2===0){
        blogdrop.style.visibility = "visible"
    }
    else {
        blogdrop.style.visibility = "hidden"
    }
    count1++
}
function showAndHidePagedrop() {
    if ( count2%2===0){
        pagesdrop.style.visibility = "visible"
    }
    else {
        pagesdrop.style.visibility = "hidden"
    }
    count2++
}


blog.addEventListener('click', showAndHideBlogdrop);
pages.addEventListener('click', showAndHidePagedrop);




var burger = document.getElementById("burger")
var msnavdrop = document.getElementById("msnavdrop")

count = 2

function burgerAndCrossfunction () {
    if ( count%2===0 ) {
        burger.style.display = "flex"
        msnavdrop.style.visibility = "visible"
    }
    else if ( count%2!=0 ) {
        burger.style.display = "flex"
        msnavdrop.style.visibility = "hidden"
    }
    count++
}

document.getElementById("burger").addEventListener('click', burgerAndCrossfunction)

var msnavdropblog = document.getElementById("msnavdropblog")
var msnavdroppages = document.getElementById("msnavdroppages")

var msnavdropblogsub = document.getElementById("msnavdropblogsub")
var msnavdroppagessub = document.getElementById("msnavdroppagessub")

var bcount = 2
var pcount = 2

function blogsub () {
    if (bcount%2===0) {
        msnavdropblog.appendChild(msnavdropblogsub)
    }
    else {
        msnavdropblog.removeChild(msnavdropblog.childNodes[1]);
    }
    bcount++
}
function pagessub () {
    if (pcount%2===0) {
        msnavdroppages.appendChild(msnavdroppagessub)
    }
    else {
        msnavdroppages.removeChild(msnavdroppages.childNodes[1]);
    }
    bcount++
}
 msnavdropblog.addEventListener('click',blogsub)
msnavdroppages.addEventListener('click',pagessub)
