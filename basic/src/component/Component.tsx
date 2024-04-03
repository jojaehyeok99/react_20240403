import React from 'react'

export default function Component() {
  // 함수형 컴포넌트의 return
  // - 해당 컴포넌트가 랜더링할 요소를 지정
  // - html 처럼 보이지만 html이 아님
  // - 여러가지 자바스크립트 *연산자*를 사용할 수 있음

  // - 반드시 하나의 요소만 반환이 가능 (0개 x, 2개 이상 x)
  // - 하나의 컴포넌트가 다수의 요소를 반환하고자 하면 최상단에 해당 요소를 묶어주는 부모 요소를 포함해야 함
  // - 부모 요소로 묶을 때 <></>를 이용하여 의미없는 태그를 생성할 수 있음
  // - 반드시 return 바로 뒤에 반호나 요소가 있어야 함 -> 아니면 () 소괄호 안에 요소 넣기
  return <>
      <div>Component</div>
      <div>Component</div>
    </>
}

function JsxComponent () {

  // JSX (TSX)의 규칙
  // 1. 반드시 하나의 요소를 반환 (<div> 요소 혹은 <> 요소)
  // 2. 모든 태그 닫기
  // 3. 속성들을 JSX로 지정되어 있는 이름으로 사용해야 함 (lowerCamelCase) ex. html : class 예약어 JSX : className
  return (
    <>
      <h1>첫번째 페이지입니다.</h1>
      <div>
        <img src = 'https://flexible.img.hani.co.kr/flexible/normal/960/960/imgdb/resize/2019/0121/00501111_20190121.JPG' className='image-box' />
      </div>
    </>
  );
}