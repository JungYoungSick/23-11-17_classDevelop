function makeobjectTwo(idvelue, passwordValue, emailVelue) {
  this.id = idvelue;
  this.password = passwordValue;
  this.email = emailVelue;
};

let result = new makeobjectTwo("아이디 테스트", "패스워드 테스트", "이메일 테스트");

console.log(result);