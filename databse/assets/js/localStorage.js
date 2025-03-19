document.getElementById('js-singin').addEventListener('click', ()=> {
    let email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
});

window.addEventListener('load', () => {
    let emailOutput = window.localStorage.getItem('email');
    let passwordOutput = window.localStorage.getItem('password');

    document.getElementById('email').value = emailOutput;
    document.getElementById('password').value = passwordOutput;
});