// go back button on high score html
var goBack = document.querySelector("#go-back");
    goBack.addEventListener("click", function() {
        window.location.replace("index.html")
    })
    data = JSON.parse(localStorage.getItem("data"));
    for (var i = 0; i < data.length; i++) {
    var scoresEl = document.querySelector("#score");
    var oneScore = document.createElement("p");
    oneScore.textContent = data[i];
    scoresEl.append(oneScore);
};