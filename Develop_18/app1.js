const makeObjectOne = (idValie, passwordValue, emailValue) => {
  return {
    id: idValie,
    password: passwordValue,
    email: emailValue,
  }
};

let result = makeObjectOne("아이디테스트", "패스워드테스트", "이메일테스트");
console.log(result);