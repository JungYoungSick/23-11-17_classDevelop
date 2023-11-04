// return 없는 단순 콘솔 실행 함수
// javascript의 특징 return이 없는 경우,
// undefined라는 "값(value)"을 반환한다.
// return이 없이 호출로 사용만 하는 함수를
// 실행(execution)함수(function)라고 부른다.
function googoodan(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(number * i);
  }
}
googoodan(1);
googoodan(2);
