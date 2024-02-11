
const user = {
  id:'asd@naver.com',
  pw:'qwer'
}

/*

1. email 정규표현식을 사용한 validation
2. pw 정규표현식을 사용한 validation
3. 상태 변수 관리
4. 로그인 버튼을 클릭시 조건처리

*/

function emailReg(text){
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(text).toLowerCase())
}

function pwReg(text){
  const re = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^*+=-]).{6,16}$/;
  return re.test(String(text).toLowerCase());
}


// 1
const idField =  document.querySelector('#userEmail');
const pwField =  document.querySelector('#userPassword');
const submit = document.querySelector('.btn-login');


function handleCheckId(){
  if (emailReg(this.value) === user.id){
    idField.classList.remove('is-active');
  }
  else {
    idField.classList.add('is-active');
  }
}

function handleCheckPw(){
  if (pwReg(this.value) === user.pw){
    pwField.classList.remove('is-active');
  }
  else {
    pwField.classList.add('is-active');
  }
}

function handlesubmit (e) {
  e.preventDefalult();

  if (user.id === 'asd@naver.com' && user.pw === 'qwer') {
    location.href = 'welcome.html'
  }
} 

idField.addEventListener('input', handleCheckId);
pwField.addEventListener('input', handleCheckPw);
submit.addEventListener('click',handlesubmit);



//2
const loginForm = document.getElementById("login-form");
//const loginButton = document.getElementById(".btn-login");

function handleCheckId(){
  if (emailReg(this.value) === user.id){
    if (pwReg(this.value) === user.pw){
      loginForm.classList.remove('is-active');
    }
    else {
      loginForm.classList.add('is-active');
    }
  }
  else {
    loginForm.classList.add('is-active');
  }
}

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === 'asd@naver.com' && password === "qwer") {
      alert("You have successfully logged in.");
    }
});



//3
const id = document.getElementById('#userEmail')
const password = document.getElementById('#userpassword')
const login = document.getElementById('.btn-login')

login.addEventListener('click', () => {
    if (emailReg(id.value) === 'asd@naver.com') {
        if (pwReg(password.value) === 'qwer') {
            alert('로그인 되었습니다!')
        }
        else {
            alert('아이디와 비밀번호를 다시 한 번 확인해주세요!')
        }
    }
})


// 범땜코드
const emailInput = document.querySelector('#userEmail');
const pwInput = document.querySelector('#userPassword');
const loginButton = document.querySelector('.btn-login');

let emailPass = false;
let pwPass = false;


function handleEmailCheck () {
  
  const value = this.value;

  if(emailReg(value)){
    // 이메일 인풋에게 is--invalid 클래스를 제거
    this.classList.remove('is--invalid');
    emailPass = true;
  }else{
    // 이메일 인풋에게 is--invalid 클래스를 추가
    this.classList.add('is--invalid');
    emailPass = false;
  }
}

function handlePwCheck(){
  
  const value = this.value;

  if(pwReg(value)){
    this.classList.remove('is--invalid');
    pwPass = true;
  }else{
    this.classList.add('is--invalid');
    pwPass = false;
  }
}

function handleLogin(e){
  e.preventDefault();

  if(emailPass && pwPass){
    try{
      const id = emailInput.value;
      const pw = pwInput.value;
      const getUserId = user.id; // 비동기 통신 1s
      const getUserPw = user.pw; // 비동기 통신 1s

      if(id === getUserId && pw === getUserPw){
        console.log('로그인 성공!');
        location.href = 'welcome.html'
      }
    }catch{

    }
  }
}



emailInput.addEventListener('input',handleEmailCheck)
pwInput.addEventListener('input',handlePwCheck)
loginButton.addEventListener('click',handleLogin)