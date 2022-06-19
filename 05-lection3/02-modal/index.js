(function() {
    const close = document.getElementById('modal-close');
    const modal = document.getElementById('modal');
    const modalOpen = document.getElementById('modal-open');
    const modalSubmit = document.getElementById('modal-submit');
    const shadow = document.getElementById('shadow');

    if (!close || !modalOpen || !modal || !modalSubmit || !shadow) {
        return;
    }

    modalOpen.addEventListener('click', () => {
        modal.style.display = 'block';
        shadow.style.display = 'block';
        document.body.overflow = 'hidden';
    });

    close.addEventListener('click', () => {
        modal.style.display = 'none';
        shadow.style.display = 'none';
        document.body.overflow = 'initial';
    });

    modalSubmit.addEventListener('click', () => {
        modal.style.display = 'none';
        shadow.style.display = 'none';
        document.body.overflow = 'initial';
    });
})();