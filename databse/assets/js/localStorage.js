// console.log('localStorage test');
/* if(('localStorage' in window) && (window.localStorage !== null)) {
    // ローカルストレージが使える
} else {
    // 使えない。。。
} */


//sing in が押されたらデータを保存する。
//＃emailの入力値と#passwordの入力値を

//次回（ロードされたら）localStorageの情報を取得する。
/* 
const clickHandler = () => {

}
 */
document.getElementById('js-singin').addEventListener('click', ()=> {
    // console.log('サインインをクリック');
    let email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    localStorage.setItem('email', email);
    localStorage.setItem('password', password);

    let emailOutput = localStorage.getItem('email');
    let passwordOutput = localStorage.getItem('password');

    console.log(emailOutput,passwordOutput);
});


/* window.addEventListener('load', () => {
    localStorage.getItem('email');
    localStorage.getItem('password');
}); */