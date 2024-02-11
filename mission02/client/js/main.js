
/* 

1. 이벤트 처리 방식을 사용하여 클릭 이벤트를 걸어주세요.
2. 이미지와 색상의 데이터는 `data.js` 에서 불러와주세요.
3. 각 li 항목들을 클릭하면 배경 색상과 메인 비주얼 이미지를 변경해주세요.
4. 비주얼이 변경되면 상단에 비주얼에 맞는 이름으로 변경해주세요.
5. 함수를 분리시켜주세요.
6. 가독성이 좋은 코드로 리팩토링 해주세요.
*/
 

var thumbnail = document.querySelectorAll("nav > ul > li");
var activeThumbnail = document.querySelector(".is-active");

// is-active 클릭 이벤트 활성화
for (var i = 0; i < thumbnail.length; i++) {
    thumbnail[i].addEventListener("click", handleOnclick);
}

function handleOnclick() {
    if (activeThumbnail) {
        activeThumbnail.classList.remove("is-active");
    }

    this.classList.add("is-active");

    activeThumbnail = this;
}

// 그 다음에 더 해야되는데 시간이 없어서 일단 이거라도... this를 잘 활용해서... 뭔가... 여차저차... 함수... ...