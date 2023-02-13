document.getElementById('deposit-btn').addEventListener('click',function(){
    //get value from input field
    const dep_field =document.getElementById('deposit-amount');
    const dep_amm = dep_field.value;


    //updating the deposit
    const crnt_amm_element = document.getElementById('current-deposit');
    const crnt_amm = crnt_amm_element.innerText;
    

    dep_field.value = ' ';

    const balance_element = document.getElementById('current-balance');
    const balance = balance_element.innerText;
    
    if(parseFloat(dep_amm) < 0){
        alert('Type the amount correctly.');
    }
    else{
        crnt_amm_element.innerText = parseFloat(dep_amm) + parseFloat(crnt_amm);
        balance_element.innerText = parseFloat(balance) + parseFloat(dep_amm)
    }
    
})