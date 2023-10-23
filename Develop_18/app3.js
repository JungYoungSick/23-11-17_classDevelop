class makeobjectThree {
  constructor(idValue, passwordValue, emailValue) {
    this.id = idValue;
    this.password = passwordValue;
    this.email = emailValue;
  }
}
let result = new makeobjectThree("아이디 테스트", "패스워드 테스트", "이메일 테스트");
console.log(result)