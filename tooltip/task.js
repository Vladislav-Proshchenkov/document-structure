const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(item => {
    item.addEventListener('click', (elem) => {
        elem.preventDefault();
        let tooltipText = item.getAttribute('title');
        const tooltip = document.createElement('div');
        tooltip.classList.add('tooltip');
        tooltip.style.left = item.offsetLeft + 'px';
        tooltip.style.top = item.outerHeight + item.offsetTop + 'px';
        tooltip.textContent = tooltipText;
        let toolElement = document.querySelector('.tooltip');
        if (toolElement) {
            toolElement.remove();
        }
        elem.target.appendChild(tooltip);
        tooltip.classList.add('tooltip_active');
         });
    });
