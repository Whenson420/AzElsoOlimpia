document.querySelectorAll('area').forEach(area => {
    area.addEventListener('mouseenter', (e) => {
        const hoverText = document.getElementById('hover-text');
        hoverText.innerText = area.getAttribute('data-text');
        hoverText.style.left = `${e.pageX}px`;
        hoverText.style.top = `${e.pageY}px`;
        hoverText.style.display = 'block';
    });

    area.addEventListener('mouseleave', () => {
        const hoverText = document.getElementById('hover-text');
        hoverText.style.display = 'none';
    });
});
