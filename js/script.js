document.addEventListener('DOMContentLoaded', function () {
    var overlay = document.querySelector('.overlay');
    var form = document.querySelector('.decor');
    var closeButton = document.querySelector('.form-inner__close');

    document.addEventListener('click', function (event) {
        // Проверяем, был ли клик на элементе, который не является кнопкой закрытия и не имеет класса 'form-inner__close'
        if (!event.target.classList.contains('form-inner__close') &&
            !event.target.closest('.form-inner__close') &&
            !event.target.classList.contains('policy') &&
            !event.target.classList.contains('offer') &&
            !event.target.closest('.policy') &&
            !event.target.closest('.offer')) {
            // Если клик был не на кнопке закрытия, 'policy', 'offer', отменяем стандартное действие ссылки
            event.preventDefault();
            // Показываем модальное окно
            showModal();
        }
    });


    // Показать модальное окно
    function showModal() {
        overlay.style.display = 'block';
        form.style.display = 'block';
    }

    // Скрыть модальное окно
    function hideModal() {
        overlay.style.display = 'none';
        form.style.display = 'none';
    }

    // Закрытие модального окна при клике на кнопку закрытия
    closeButton.addEventListener('click', hideModal);

    // Закрытие модального окна при клике за его пределами (по заднему фону)
    overlay.addEventListener('click', hideModal);
});