const radioValue = document.querySelector('.value-of-rating');
const submitButton = document.querySelector('#submit-btn');
const thankYou = document.querySelector('.thankyou-state');

const submitRating = () => {
    const ratingValue = document.querySelectorAll("input[type='radio']:checked")[0]['value'];
    radioValue.innerText = `You selected ${ratingValue} out of 5`;
    thankYou.style.display = "block";
    document.querySelector('.rating-state-visibility').style.display = "none";
}
submitButton.addEventListener('click', submitRating)