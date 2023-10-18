# 파이썬에서의 반복문 작성.
student_List = [
  "홍문기",
  "정영식",
  "소사무엘",
  "유승민"
]

# ":" 쌍점의 사용처 - 클래스 정의, 메서드 정의, 함수 정의, 조건문, 반복문 등에 쓰인다.
#def는 함수란 뜻이며, :쌍점은 반복하라는 뜻이다.
def develop_practics(array, name, start_text, end_text):
  #반복문 
  for item in array:
    # 조건문
    if item == name:
      print(f"{start_text}{item}{end_text}")
    # 이외.
    else:
      print(item)

develop_practics(student_List, "정영식", "이름은", "이다")