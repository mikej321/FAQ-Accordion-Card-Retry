let accordions = document.querySelectorAll('.accordion');

accordions.forEach((accordion) => {
    accordion.addEventListener('click', function() {
        let panel = this.nextElementSibling;
        panel.classList.toggle('card-open');
        this.classList.toggle('active');
        let arrow = this.lastElementChild;
        arrow.classList.toggle('open');
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    })
})