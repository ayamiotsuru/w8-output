
//sing in が押されたらデータを保存する。
//＃emailの入力値と#passwordの入力値を

//次回（ロードされたら）localStorageの情報を取得する。
/* 
 */
document.getElementById('js-singin').addEventListener('click', ()=> {
    // console.log('サインインをクリック');
    let email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    //setItemできているか確認
    // let emailOutput = localStorage.getItem('email');/*  */
    // let passwordOutput = localStorage.getItem('password');
    // console.log(emailOutput,passwordOutput);
});

/* let emailOutput = window.localStorage.getItem('email');
let passwordOutput = window.localStorage.getItem('password');

document.getElementById('email').textContent = emailOutput
document.getElementById('password').textContent = passwordOutput

 */
// console.log(emailOutput,passwordOutput);

window.addEventListener('load', () => {
    let emailOutput = window.localStorage.getItem('email');
    let passwordOutput = window.localStorage.getItem('password');

    document.getElementById('email').value = emailOutput;
    document.getElementById('password').value = passwordOutput;

    console.log(emailOutput,passwordOutput);
});