function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "1234") {
        window.location.href = "safety.html";
    } else {
        document.getElementById("message").innerHTML = "Invalid Login";
    }
}

function sos() {
    document.getElementById("alert").innerHTML =
        "🚨 Emergency alert triggered! Help will be notified.";
}

function sendLocation() {

    if (!navigator.geolocation) {
        alert("Geolocation is not supported by your browser.");
        return;
    }

    alert("Fetching location... Please allow permission");

    navigator.geolocation.getCurrentPosition(
        function (position) {

            let latitude = position.coords.latitude;
            let longitude = position.coords.longitude;

            let locationLink = "https://www.google.com/maps?q=" + latitude + "," + longitude;

            let phoneNumber = "916379038743";

            let message = "🚨 Emergency! My location: " + locationLink;

            let whatsappURL = "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);

            console.log(whatsappURL); // 🔍 debug

            window.open(whatsappURL, "_blank");
        },
        function (error) {
            alert("❌ Location permission denied or error occurred");
        }
    );
}