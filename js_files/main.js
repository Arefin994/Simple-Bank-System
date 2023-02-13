document.getElementById('submit-btn').addEventListener('click', function(){
    const email = document.getElementById('email').value;
    const pass = document.getElementById('pass').value;
    if(email === 'arefinamin994@gmail.com' && pass === 'AREfin.@123'){
        window.location.href = 'bank.html';
    }
    else{
        alert('Invalid email or pass');
    }
}) 