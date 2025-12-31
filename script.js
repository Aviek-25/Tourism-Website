function scrollToPlaces() {
    document.getElementById("places").scrollIntoView({
        behavior: "smooth"
    });
}

function book(place) {
    alert("Thank you for choosing " + place + "! Our team will contact you soon.");
}
