document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.faq-button');

    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            alert(`You clicked on "${button.textContent}"`);
        });
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const languageSelect = document.querySelector('#:R5ajalalbd:');
    
    languageSelect.addEventListener('change', (event) => {
        const selectedLanguage = event.target.value;
        console.log(`Selected language: ${selectedLanguage}`);
    });
});
