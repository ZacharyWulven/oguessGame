let answer = getRandomNumber();

function getRandomNumber() {
  return Math.floor(Math.random() * 30) + 1;
}

function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.className = 'toast show';
  setTimeout(() => {
    toast.className = 'toast';
  }, 1800);
}

function resetGame() {
  answer = getRandomNumber();
  document.getElementById('guessInput').value = '';
}

document.getElementById('guessBtn').addEventListener('click', () => {
  const input = document.getElementById('guessInput');
  const guess = Number(input.value);
  if (!guess || guess < 1 || guess > 30) {
    showToast('请输入 1-30 之间的数字');
    return;
  }
  if (guess === answer) {
    showToast('恭喜你，猜对了！游戏重新开始');
    setTimeout(resetGame, 1800);
  } else {
    showToast('猜错了，请再试一次！');
  }
});

// 支持回车键提交
document.getElementById('guessInput').addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    document.getElementById('guessBtn').click();
  }
});
