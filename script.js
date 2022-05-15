'use-strict'

/**
 * Create a grid-of-two containing a form and card to display
 * The card is hidden on page-load until user submits data through the form
 * The card then displays the user's information on it
 * 
 * FORM
 * First name
 * Last name
 * Account type (savings, current, business)
 * 
 * ATM CARD Displays:
 * Account type
 * 16-digit randomly generated number
 * NB: Only the last four-digits will be displayed
 * First is capilized
 * Last name in uppercase
 * Expiry date (05/25) current year plus 3!
 */

const firstNameValue = document.getElementById('firstname');
const lastNameValue = document.getElementById('lastname');
const accountTypeValue = document.getElementById('account-type');
const submitBtn = document.getElementById('submit');

const accountTypeText = document.querySelector('.account-type');
const cardNumeral = document.querySelector('.card-numeral');
const expiry = document.querySelector('.expiry-date');
const firstNameText = document.querySelector('.firstname');
const lastNameText = document.querySelector('.lastname');

const atmFunction = document.querySelector('.atmFunction');
const atmCard = document.querySelector('.atm');

// console.log(firstNameValue, lastNameValue, accountTypeValue, submitBtn)
// console.log(accountTypeText, cardNum, expiry, firstNameText, lastNameText)


// Functions
const genCardNumeral = () => {
    const randomNum = Math.trunc(Math.random() * 1234567890098765) + '';
    const lastFour = randomNum.slice(-4);
    const padNum = lastFour.padStart(randomNum.length, '*');
    // console.log(randomNum, lastFour, padNum);
    return padNum;
}

const genFirstName = (nameStr) => {
    const [firstXter, ...otherXter] = nameStr
    return [firstXter.toUpperCase(), ...otherXter].join('');
}

const genLastName = (nameStr) => {
    return nameStr.toUpperCase()
}

const genExpDate = () => {
    const d = new Date();
    const month = d.getMonth()
    const fixMonth = month < 10 ? '0' + month : month
    const year = (d.getFullYear() + 8) + '';
    // console.log(fixMonth, year.slice(-2));
    return `${fixMonth}/${year.slice(-2)}`;
}


submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    console.log('submit button');


    // Display Account Type
    accountTypeText.textContent = accountTypeValue.value

    //  Display Card Number
    cardNumeral.textContent = genCardNumeral();

    // Display Firstname
    firstNameText.textContent = genFirstName(firstNameValue.value);
    lastNameText.textContent = genLastName(lastNameValue.value);


    // Display Expiry Date
    expiry.textContent = genExpDate();

    // Display ATKM card
    atmCard.classList.remove('invisible');
    atmFunction.classList.add('invisible');

})


