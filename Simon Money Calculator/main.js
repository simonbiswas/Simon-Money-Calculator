document.getElementById('calculate').addEventListener('click', function () {

    const income = parseFloat(document.getElementById('income').value);
    const food = parseFloat(document.getElementById('food').value);
    const rent = parseFloat(document.getElementById('rent').value);
    const clothes = parseFloat(document.getElementById('clothes').value);

    // Error checking
    if (isNaN(income) == true || income < 0) {
        alert('Enter a valid and positive number in Income field');

    }
    if (isNaN(food) == true || food < 0) {
        alert('Enter a valid and positive number in Food field');
        clear(food);
    }
    if (isNaN(rent) == true || rent < 0) {
        alert('Enter a valid and positive number in Rent field');
        clear(rent);
    }
    if (isNaN(clothes) == true || clothes < 0) {
        alert('Enter a valid and positive number in Clothes field');
        clear(clothes);
    }

    // Basic Calculation
    const total = food + rent + clothes;
    if (total > income) alert('Expenses are more than income. Check the input fields');
    if (income >= total) calculate(income, total);


});
function calculate(income, total) {
    document.getElementById('total_expenses').innerText = total;
    document.getElementById('balance').innerText = income - total;
}

// Saving part
document.getElementById('save').addEventListener('click', function () {
    income = parseFloat(document.getElementById('income').value);
    food = parseFloat(document.getElementById('food').value);
    rent = parseFloat(document.getElementById('rent').value);
    clothes = parseFloat(document.getElementById('clothes').value);
    total = food + rent + clothes;
    var save = parseFloat(document.getElementById('main_save').value);
    if (isNaN(save) == true || save < 0) {
        alert('Enter a valid and positive number in Save field');
    }
    var save1 = parseFloat((income / 100) * save);
    if (save1 > (income - (food + rent + clothes))) {
        alert("You don't have enough money to save");
    }
    if (save1 < (income - (food + rent + clothes))) {
        document.getElementById('main_save').innerText = save1;

        document.getElementById('saving_amount').innerText = save1;
        document.getElementById('r_balance').innerText = (income - total - save1);
    }
})

