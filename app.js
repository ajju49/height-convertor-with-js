//selectors
const form = document.querySelector('form');

// event listener
form.addEventListener('submit', function(e){
    
let feet = document.querySelector('#feet');
let inches = document.querySelector('#inches');
const results = document.querySelector('#results');
    e.preventDefault();

    //conversion to numbers(integers)
    feet = parseInt(feet.value);
    inches = parseInt(inches.value);

    //if feets & inches are not anumber ,then....
    if (isNaN(feet) || isNaN(inches)){
        results.textContent = "Please enter a valid number!";
    } else if (feet < 0 ) {
        results.textContent = "Please enter a feet value > 0";
    } else if (inches < 0 || inches >= 12) {
        results.textContent = "Please enter an inch value between 0 and 12";
    } else {
        let totalInches = (feet*12) + inches;
        results.textContent = `${totalInches * 2.54} cm`;
        document.querySelector('#feet').value = '';
        document.querySelector('#inches').value = '';
    }
}) 
