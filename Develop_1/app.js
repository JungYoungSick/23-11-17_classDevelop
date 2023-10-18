// studentList라는 배열
const studentList = [
  "홍문기",
  "정영식",
  "소사무엘",
  "유승민"
]


//매개변수를 사용하여 함수식 작성.
function developPractics(array, name, startText, endText) {
  //반복문을 사용하여 이름 회로 돌리기.
  for(let i=0; i<array.length; i++) {
    //조건문을 사용하여 값 이름 찾기.
    if(array[i] === name) {
      //참이라면 알맞는 결과값 출력.
      console.log(startText + array[i] + endText);
    } else {
      //참이 아닌 이외는 array값만 출력.
      console.log(array[i])
    }
  }
}
//위까지는 원하는 값을 가져오기 위한 함수식에 불과하다.

//매개변수에 넣고 찾을 값을 찾는 식.
developPractics(studentList, "정영식", "이름은", "이다.")
//함수명(배열명, name = 값, startText값 = 이름은, endText값 = 이다)