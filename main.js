let square = document.getElementById('square');

window.addEventListener('scroll', () => {
    let move = window.pageYOffset;
    let bx = move * 0.5;
    square.style.transform = `translateX(${0.45 * bx}%)`;
    square.style.borderRadius = `${0.025 * bx}%`;
    square.style.height = `${0.1 * bx}px`;
    square.style.width = `${0.1 * bx}px`;
});