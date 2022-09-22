function hide() {
    document.getElementsByTagName("h1")[1].style.display='none';
    document.getElementsByTagName("h5")[0].style.display='none';
    document.getElementsByTagName("a")[0].style.display='none';
}

function show() {
    document.getElementsByClassName("hide")[0].style.visibility='visible';
    document.getElementsByClassName("hide")[0].style.opacity='1';
    document.getElementsByClassName("hide")[0].style.transitionDelay='0.5s';
}