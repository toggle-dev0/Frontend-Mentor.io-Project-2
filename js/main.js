var quote_id = document.querySelector(".advice-id");
var advice = document.querySelector(".advice");
var dice_btn = document.querySelector(".dice-sphere");


let getQuote = async () => {
    try {
        let randomNum = Math.floor(Math.random() * 225);
        // console.log(randomNum);
        let quoteObject = await fetch(`https://api.adviceslip.com/advice/${randomNum}`);
        if (quoteObject.ok) {
            let data = await quoteObject.json();
            quote_id.textContent = data.slip.id
            advice.textContent = data.slip.advice
            // console.log(data.slip);
        } else {
            console.log("Some error occured");
        }
    } catch {
        console.log("Error caught");
    }
}

dice_btn.addEventListener("click", getQuote);