const studentList = [
  "홍문기",
  "정영식",
  "소사무엘",
  "유승민"
]



function developPractics(array, name, startText, endText) {
  for(let i=0; i<array.length; i++) {
    if(array[i] === name) {
      console.log(startText + array[i] + endText);
    } else {
      console.log(array[i])
    }
  }
}