function handleLogin() {
    // 1. ซ่อนหน้า Login และแสดงหน้า Loading
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'flex';

    let bar = document.getElementById('myBar');
    let text = document.getElementById('percentText');
    let width = 0;

    // 2. จำลองการโหลดให้ครบ 100% ภายใน 2 วินาที (2000ms)
    let interval = setInterval(function() {
        if (width >= 100) {
            clearInterval(interval);
            // 3. เมื่อครบ 2 วินาที ให้เปลี่ยนไปหน้าอื่น
            window.location.href = "https://www.google.com"; // เปลี่ยน URL ตรงนี้ได้เลยครับ
        } else {
            width += 2; // เพิ่มทีละ 2%
            bar.style.width = width + '%';
            text.innerHTML = width + '%';
        }
    }, 40); // 40ms * 50 ครั้ง = 2000ms (1 วินาที)
     
}
 
