document.addEventListener("DOMContentLoaded", function () {

    const notificationBtn = document.getElementById("notificationBtn");
    const badge = document.querySelector(".badge");

    notificationBtn.addEventListener("click", function () {

        badge.innerText = "0";
        badge.style.display = "none";

        localStorage.setItem("notificationCount", "0");

        window.location.href = "_2notification.html";
    });

});