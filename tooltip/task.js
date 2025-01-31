const hasTooltip = document.querySelectorAll('.has-tooltip');
let tooltipText = '';

hasTooltip.forEach(item => {
    item.addEventListener('click', (elem) => {
        elem.preventDefault();
        if (item.getAttribute('title') == tooltipText) {
            let tooltip = document.querySelector('.tooltip');
            tooltip.classList.remove('tooltip_active');
            tooltipText = '';
        }
        else {
            tooltipText = item.getAttribute('title');
            let tooltip = document.createElement('div');
            tooltip.classList.add('tooltip');
            tooltip.style.left = item.offsetLeft + 'px';
            tooltip.style.top = item.outerHeight + item.offsetTop + 'px';
            tooltip.textContent = tooltipText;
            let toolElement = document.querySelector('.tooltip');
            if (toolElement) {
                toolElement.remove();
            }
            elem.target.after(tooltip);
            tooltip.classList.add('tooltip_active');
        }
    });
});