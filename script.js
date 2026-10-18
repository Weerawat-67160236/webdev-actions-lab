// ปุ่มเปลี่ยนข้อความสถานะ
document.querySelector('#helloBtn').addEventListener('click', () => {
  document.querySelector('#status').textContent = 'Hello from GitHub Pages!';
});

// ปุ่ม Toggle Theme (Exercise 3)
document.querySelector('#themeToggleBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});