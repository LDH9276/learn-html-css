// DOM 선택부
document.addEventListener('click', (event) => {
  const button = event.target.closest('.copy-component');
  if (!button) return;
  const container = button.closest('.ui-component');
  if (!container) return;

  // 함수 구현부
  // 버튼을 제외한 HTML 추출
  const clone = container.cloneNode(true);
  const btn = clone.querySelector('.copy-component');
  if (btn) btn.remove();
  const markup = clone.innerHTML.trim();
  // 클립보드 복사
  navigator.clipboard.writeText(markup).then(() => {
    button.textContent = '복사됨!';
    setTimeout(() => {
      button.textContent = '복사';
    }, 1200);
  });
});
