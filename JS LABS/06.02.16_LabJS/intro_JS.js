
var clickHandler = function(e) {
    var a = document.getElementById("z");
    if (a.classList.contains("coral")) {
        a.classList.remove("coral");
    } else {a.classList.add("coral")};
    console.log(e);
};
z.addEventListener("click", clickHandler);




