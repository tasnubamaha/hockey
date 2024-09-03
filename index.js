document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('active');
        const content = button.nextElementSibling;

        if (button.classList.contains('active')) {
            content.style.display = 'block';
        } else {
            content.style.display = 'none';
        }

        // Update the icon
        const icon = button.querySelector('.accordion-icon');
        if (icon.textContent === '+') {
            icon.textContent = '-';
        } else {
            icon.textContent = '+';
        }
    });
});
