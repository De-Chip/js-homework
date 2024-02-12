
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

// btn으로 디자인 요소 조절
function btnOnclick(index) {
    setBgColor(index);
    setImage(index);
    setNameText(index);
}


// 1. `setBgColor` 함수
function setBgColor(index) {
    document.body.style.background = `linear-gradient(to bottom, ${data[Number(index)].color[0]},${data[Number(index)].color[1]})`;
}

// 2. `setImage` 함수
function setImage(index) {
    document.querySelector('.visual > div > img').src = `./assets/${data[Number(index)].name}.jpeg`;
    document.querySelector('.visual > div > img').alt = data[Number(index)].alt;
}

// 3. `setNameText` 함수
function setNameText(index) {
    document.querySelector(".nickName").innerHTML=data[Number(index)].name;
}