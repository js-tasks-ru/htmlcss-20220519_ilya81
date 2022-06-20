(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const modalSubmit = document.getElementById('modal-submit');

    if (!close || !modalOpen || !modal || !modalSubmit) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
    });

    modalSubmit.addEventListener('click', () => {
        modal.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();