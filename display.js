function switchStyle() {
    if ( document.getElementById("style").href.match("style.css") ) {
        document.getElementById("style").href = "cyber.css";
        document.getElementById("style-switcher").innerHTML = "Toggle Garage Mode";
    } else {
        document.getElementById("style").href = "style.css";
        document.getElementById("style-switcher").innerHTML = "Toggle Cyber Mode";
    }

}