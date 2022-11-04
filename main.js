const scoreBtns = document.querySelectorAll('.rating__card-score-btn');
const submitBtn = document.querySelector('.rating__card-submit-btn');
const ratingText = document.querySelector('.thanks__card-selection-text');
const ratingCard = document.querySelector('.rating__card');
const thanksCard = document.querySelector('.thanks__card');

let rating

//Loops through score buttons to see which one was clicked and stores the rating

scoreBtns.forEach((score) => {
    score.addEventListener('click', (e) => {
        e.preventDefault();
        rating = e.target.innerHTML;
        score.style.backgroundColor = "hsl(25, 97%, 53%)";
        score.style.color = "hsl(0, 0%, 100%)";
        ratingText.innerHTML = `You selected ${rating} out of 5`;
        console.log(rating);
    })
});

//Listens for submit button click, then hides rating card and shows thank you card
//Also checks to see if the user submitted a rating.  If not, provides a message
//Note: I did not time to fully change the message or allow the user to try again if the user to submit a rating

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (!rating) {
        ratingText.innerHTML = "Oops, you forgot to submit a rating";
    }
    ratingCard.style.display = "none";
    thanksCard.style.display = "flex";
});