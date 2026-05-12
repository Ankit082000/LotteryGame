let playBtn = document.querySelector("#playBtn");
let result = document.querySelector("#result");
let numberBox = document.querySelector("#numberBox");

playBtn.addEventListener("click", function () {

    let randomNumber = Math.floor(Math.random() * 10) + 1;

    numberBox.innerText = randomNumber;

    if (randomNumber === 7) {

        result.innerText = "🎉 Congratulations! You Won the Lottery!";

        result.classList.remove("lose");
        result.classList.add("win");

    } else {

        result.innerText = "😢 Better Luck Next Time!";

        result.classList.remove("win");
        result.classList.add("lose");
    }
});
