var staticObject = {
  name: "static object",
  explain: "미리, 혹은 이미 작성된 개체",
};
//* 타입 검사를 통한 staticObject 확인.
console.dir(typeof(staticObject));
//* 출력으로 staticObject.name 키에 대한 값 출력.
console.log(staticObject.name);
//* 출력으로 staticObject.explain 키에 대한 값 출력.
console.log(staticObject.explain);

//* dynamicObject를 객체형식으로 사용하겠다는 변수 선언.
var dynamicObject = {};
//* dynamicObject.name에 dynamic object라는 키값 입력.
dynamicObject.name = "dynamic object";
//* dynamicObject.explain에 동적으로 생성된 객체라는 키값 입력.
dynamicObject.explain = "동적으로 생성된 객체";
//* 타입 검사를 통한  dynamicObject 확인.
console.dir(typeof(dynamicObject));
//* 출력으로 dynamicObject.name 키에 대한 값 출력.
console.log(dynamicObject.name);
//* 출력으로 dynamicObject.explain 키에 대한 값 출력.
console.log(dynamicObject.explain);