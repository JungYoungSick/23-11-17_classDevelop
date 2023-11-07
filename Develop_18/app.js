const makeobjectOne = (idvelue, passwordValue, emailVelue) => {
  return {
    id : idvelue,
    password : passwordValue,
    email : emailVelue
  }
};

let result = makeobjectOne("아이디테스트", "패스워드테스트","이메일테스트");
console.log(result)
