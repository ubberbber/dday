// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.width = '100%';
  image.style.height = '211px';

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}

const modalMessageList = [
  { "number": 1, "message": "만나면 행복한 사람 박나래" },
  { "number": 2, "message": "뭘 하면 널 위한것 밖에 생각이 안나네 ㅎㅎ" },
  { "number": 3, "message": "설레임이 가득한 사람" },
  { "number": 4, "message": "우리 만난지 벌써 2년이 되어가네" },
  { "number": 5, "message": "여태까지 날 만나줘서 정말 고마워" },
  { "number": 6, "message": "앞으로 3년 4년 5년 평생 행복하게 만나자" },
  { "number": 7, "message": "길다면 길고 짧다면 짧은시간이지만 나래랑 만나면 항상 즐거워" },
  { "number": 8, "message": "사랑해 박나래" },
  { "number": 9, "message": "앞으로도 잘 부탁해" },
  { "number": 10, "message": "널 위한 사람이 되기 위해 노력할게" },
  { "number": 11, "message": "선물 이렇게 많이 주고싶다" },
  { "number": 12, "message": "앞으로 우린 어떤 추억이 생길까?" },
  { "number": 13, "message": "아이도 생기고 집도 생기겠지?" },
  { "number": 14, "message": "나는 나래랑 즐겁게 살고싶어" },
  { "number": 15, "message": "즐겁게 살기 위해서 열심히 노력하자" },
  { "number": 16, "message": "건강 챙기고. 돈도 많이 벌고" },
  { "number": 17, "message": "나래한테 명품 선물도 사주고" },
  { "number": 18, "message": "비싼 외제차도 사주고" },
  { "number": 19, "message": "사랑해 박나래" },
  { "number": 20, "message": "사랑해 박나래" },
  { "number": 21, "message": "사랑해 박나래" },
  { "number": 22, "message": "사랑해 박나래" },
  { "number": 23, "message": "사랑해 박나래" },
  { "number": 24, "message": "사랑해 박나래" }
];
