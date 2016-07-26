var watcher;
var geoLocator;
window.onload = function () {
        geoLocator = window.navigator.geolocation;
        var posOptions = { enableHighAccuracy: true, timeout: 3000 };

        watcher = geoLocator.watchPosition(successPosition, errorPosition, posOptions);
}
function successPosition(pos) {
        var sp = document.createElement("p");
        sp.innerText = "Latitude: " + pos.coords.latitude + " Longitude: "
            + pos.coords.longitude;
        document.getElementById("geoResults").appendChild(sp);
        geoLocator.clearWatch(watcher);
}

function errorPosition(err) {
        var sp = document.createElement("p");
        sp.innerText = "error: " + err.message; + " code: " + err.code;
        document.getElementById("geoResults").appendChild(sp);
}