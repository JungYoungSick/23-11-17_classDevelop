# python의 매우 불편한 함수이며, format()함수를 특수한 경우에도 사용한다.
# 읽히는 경험을 느껴보며 한번 작성해보자.
dictionnary_example = {
  "academyName": "그린컴퓨터아트학원",
  "location":"둔산점",
  "address": "대전광역시 서구 대덕대로 182 오라클 빌딩 3층",
  "telNumber": "042-476-2111",
  "classroomNumber": 305,
  "lectureName": "it's different",
  "studentList": [
    "피카츄",
    "라이츄",
    "파이리",
    "꼬부기"
  ]
}

print(dictionnary_example["address"])
print(
  "나는 {}의 {}에 있는 {}강의실에서 {}에서 훈련중인 {}입니다."
  .format(
    dictionnary_example["address"],
    dictionnary_example["academyName"],
    dictionnary_example["classroomNumber"],
    dictionnary_example["lectureName"],
    dictionnary_example["studentList"][0]
  )
)