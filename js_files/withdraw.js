document.getElementById('withdraw-btn').addEventListener('click', function () {
    //get value from input field
    const wd_field = document.getElementById('withdraw-amount');
    const wd_amm = wd_field.value;


    //updating the withdraw
    const crnt_amm_element = document.getElementById('current-withdraw');
    const crnt_amm = crnt_amm_element.innerText;


    wd_field.value = ' ';

    const balance_element = document.getElementById('current-balance');
    const balance = balance_element.innerText;
    if (parseFloat(balance) < parseFloat(wd_amm)) {
        alert('You can not withdraw more then your balance. Plz deposit.');
    }
    else if(parseFloat(wd_amm) < 0){
        alert('Type the amount correctly.');
    }
    else {
        crnt_amm_element.innerText = parseFloat(wd_amm) + parseFloat(crnt_amm);
        balance_element.innerText = parseFloat(balance) - parseFloat(wd_amm)
    }

})

