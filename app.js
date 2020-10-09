function init() {
    document.querySelector('.demo-btn').addEventListener('click', () => {
        alert('Hello World!');
    });   
};

document.addEventListener('DOMContentLoaded', () => {
    init();
});