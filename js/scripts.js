var linkFeedback = document.querySelector(".contacts-feedback");
var popupFeedback = document.querySelector(".modal-feedback");
var closeFeedback = popupFeedback.querySelector(".modal-close");
var nameFeedback = popupFeedback.querySelector("[name=name]");
var emailFeedback = popupFeedback.querySelector("[name=e-mail]");
var textFeedback = popupFeedback.querySelector("[name=text]");
var formFeedback = popupFeedback.querySelector("form");


linkFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.add("modal-show");

    nameFeedback.focus();
});
closeFeedback.addEventListener("click", function(evt) {
    evt.preventDefault();
    popupFeedback.classList.remove("modal-show");
    popupFeedback.classList.remove("modal-feedback-error");

});
formFeedback.addEventListener("submit", function(evt) {
    if (!nameFeedback.value || !emailFeedback.value || !textFeedback.value) {
        evt.preventDefault();
        popupFeedback.classList.remove("modal-feedback-error");
        popupFeedback.offsetWidth = popupFeedback.offsetWidth;
        popupFeedback.classList.add("modal-feedback-error");

    }

});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupFeedback.classList.contains("modal-show")) {
            popupFeedback.classList.remove("modal-show");
            popupFeedback.classList.remove("modal-feedback-error");
        }
    }
});

var mapLink = document.querySelector(".button-map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt) {
    evt.preventDefault();
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains("modal-show")) {
            mapPopup.classList.remove("modal-show");
        }
    }
});