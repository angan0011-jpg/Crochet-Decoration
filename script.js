// Basic image gallery (expand as needed)
const images = document.querySelectorAll('img');
images.forEach(img => {
    img.addEventListener('click', () => alert('Image clicked!'));
});
