document.addEventListener('DOMContentLoaded', (event) => {
    const images = document.querySelectorAll('.infoImage');
    const popups = document.querySelectorAll('.popup');

    images.forEach((image, index) => {
        image.addEventListener('click', () => {
            const popup = document.getElementById(`infoPopup${index + 1}`);
            if (popup) {
                if (popup.style.display === 'none' || popup.style.display === '') {
                    // Скрываем все другие всплывающие окна
                    popups.forEach(p => p.style.display = 'none');
                    // Показываем текущее всплывающее окно
                    popup.style.display = 'block';
                } else {
                    // Скрываем текущее всплывающее окно
                    popup.style.display = 'none';
                }
            }
        });
    });

    // Добавляем обработчик события для скрытия всплывающего окна при клике в любом месте страницы
    document.addEventListener('click', (event) => {
        if (!event.target.classList.contains('infoImage') && !event.target.classList.contains('popup')) {
            popups.forEach(popup => popup.style.display = 'none');
        }
    });
});