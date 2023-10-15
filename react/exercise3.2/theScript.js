function getUrl() {
    document.getElementById("url").innerHTML = 
    "This Page's full URL: " + window.location.href;
}

function getProtocol() {
    document.getElementById("protocol").innerHTML = 
    "This Page's protocol: " + window.location.protocol;
}

function getBrowser() {
    document.getElementById("browser").innerHTML = 
    "This Page's Browser: " + window.location.getBrowser;
}

function getScreenWidth() {
    document.getElementById("screenWidth").innerHTML=
    "This Page's ScreenWidth: " + window.screen.availWidth;
}

function getScreenHeight() {
    document.getElementById("screenHeight").innerHTML=
    "This Page's ScreenWidth: " +window.screen.availHeight;
}