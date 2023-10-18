student_List = [
  "홍문기",
  "정영식",
  "소사무엘",
  "유승민"
]

def develop_practics(array, name, start_text, end_text):
  for item in array:
    if item == name:
      print(f"{start_text}{item}{end_text}")
    else:
      print(item)

develop_practics(student_List, "정영식", "이름은", "이다")