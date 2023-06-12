// Get the like and dislike buttons
const likeButton = document.getElementById('likeButton');
const dislikeButton = document.getElementById('dislikeButton');

// Get the image element
const image = document.getElementById('image');

// Add click event listeners to the buttons
likeButton.addEventListener('click', () => {
    image.src = 'image7.jpg';
});

dislikeButton.addEventListener('click', () => {
    image.src = 'image6.jpg';
});

// HTML 요소 가져오기
const clickMeText1 = document.getElementById('clickMeText1');
const newTextContainer1 = document.getElementById('newTextContainer1');
let isTextVisible1 = false;
let newText1 = null;

const clickMeText2 = document.getElementById('clickMeText2');
const newTextContainer2 = document.getElementById('newTextContainer2');
let isTextVisible2 = false;
let newText2 = null;

// 텍스트 클릭 이벤트 핸들러 함수
function handleClick1() {
  if (isTextVisible1) {
    // 생성된 텍스트가 보이는 경우
    newTextContainer1.removeChild(newText1);
    isTextVisible1 = false;
  } else {
    // 생성된 텍스트가 보이지 않는 경우
    newText1 = document.createElement('p');
    newText1.textContent = 'A. 한달 무료가 있으며 다음 결제 기간 내에 구독 취소할 수 있습니다.'; // 텍스트를 수정한 내용으로 변경
    newTextContainer1.appendChild(newText1);
    isTextVisible1 = true;
  }
}

function handleClick2() {
  if (isTextVisible2) {
    // 생성된 텍스트가 보이는 경우
    newTextContainer2.removeChild(newText2);
    isTextVisible2 = false;
  } else {
    // 생성된 텍스트가 보이지 않는 경우
    newText2 = document.createElement('p');
    newText2.textContent = 'A. 배송비는 지역마다 다르게 적용됩니다만 기본적으로 3000원의 배송비를 요구합니다.'; // 텍스트를 수정한 내용으로 변경
    newTextContainer2.appendChild(newText2);
    isTextVisible2 = true;
  }
}

// 텍스트 클릭 이벤트 리스너 등록
clickMeText1.addEventListener('click', handleClick1);
clickMeText2.addEventListener('click', handleClick2);
