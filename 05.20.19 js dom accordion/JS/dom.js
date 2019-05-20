
var newChange = document.querySelectorAll(".change button");


for (var i = 0; i < newChange.length; i++) {
    newChange[i].addEventListener("click", function () {
        this.classList.add("active_content");
        var content = this.nextElementSibling;
        if (content.style.display != "block") {
            content.style.display = "block";

        } else {
            content.style.display = "none";
        }
    })
}