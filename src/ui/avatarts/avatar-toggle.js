// 1. DOM 선택: role="switch"에 맞춰 aria-checked 속성이 있는 avatar 버튼을 선택
const avatarButtons = document.querySelectorAll('.avatar[aria-checked]');

// 2. 이벤트 바인딩 (변경 없음)
avatarButtons.forEach((btn) => {
  btn.addEventListener('click', () => {
    toggleAvatarState(btn);
  });
});

// 3. 토글 함수 구현
function toggleAvatarState(button) {
  const isOnline = button.getAttribute('aria-checked') === 'true';
  const stateSpan = button.querySelector('.avatar-state');

  // 버튼의 기존 aria-label을 추출합니다. (예: "회원1 상태: 온라인으로 켜짐")
  const currentLabel = button.getAttribute('aria-label');

  // '회원1 상태:'와 같은 고정된 접두사를 추출합니다.
  // 이 부분은 실제 데이터 구조에 따라 달라질 수 있으므로, 여기서는 "상태:" 앞부분을 사용합니다.
  const prefixMatch = currentLabel.match(/^(.*상태:\s*)/);
  const prefix = prefixMatch ? prefixMatch[1] : '';

  if (isOnline) {
    // 상태를 'false' (꺼짐/오프라인)으로 변경
    button.setAttribute('aria-checked', 'false');
    stateSpan.classList.remove('is-online');

    // ✅ 'aria-label'을 다음 상태(오프라인)로 업데이트
    button.setAttribute('aria-label', `${prefix}오프라인으로 꺼짐`);
  } else {
    // 상태를 'true' (켜짐/온라인)으로 변경
    button.setAttribute('aria-checked', 'true');
    stateSpan.classList.add('is-online');

    // ✅ 'aria-label'을 다음 상태(온라인)로 업데이트
    button.setAttribute('aria-label', `${prefix}온라인으로 켜짐`);
  }
}
