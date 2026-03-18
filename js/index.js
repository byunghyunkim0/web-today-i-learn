// 1. 폼 요소와 목록 요소를 querySelector로 선택합니다.
const tilForm = document.querySelector("#til-form");
const tilList = document.querySelector("#til-list");

// 2. 폼의 submit 이벤트를 감지하여 새 TIL 항목을 목록에 추가합니다.
tilForm.addEventListener("submit", function (event) {
  // 브라우저가 새로고침되는 기본 동작을 막아줍니다.
  event.preventDefault();

  // 1️⃣ 입력값 가져오기
  const dateValue = document.querySelector("#til-date").value;
  const titleValue = document.querySelector("#til-title").value;
  const contentValue = document.querySelector("#til-content").value;

  // 2️⃣ 새로운 HTML 요소(article) 만들기
  const newArticle = document.createElement("article");
  newArticle.classList.add("til-item"); // CSS가 적용되도록 클래스 추가

  // 3️⃣ 가져온 입력값으로 요소 내부 HTML 채우기
  newArticle.innerHTML = `
    <time>${dateValue}</time>
    <h3>${titleValue}</h3>
    <p>${contentValue}</p>
  `;

  // 4️⃣ 완성된 요소를 TIL 목록 맨 위에 추가하기 (최신순)
  // append()를 쓰면 맨 아래에 추가되고, prepend()를 쓰면 맨 위에 추가됩니다.
  tilList.prepend(newArticle);

  // 5️⃣ 다음 입력을 위해 폼 비우기
  tilForm.reset();
});