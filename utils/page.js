document.addEventListener('DOMContentLoaded', () => {
    const navData = document.getElementById('nav-data');
    if (!navData) return;

    const prevPath = navData.getAttribute('data-prev-path');
    const prevName = navData.getAttribute('data-prev-name');
    const nextPath = navData.getAttribute('data-next-path');
    const nextName = navData.getAttribute('data-next-name');

    const mainElement = document.querySelector('main');
    if (!mainElement) return;

    const container = document.createElement('div');
    container.style.display = 'flex';
    container.style.justifyContent = 'center';
    container.style.gap = '1rem';
    container.style.marginTop = '2rem';
    container.style.flexWrap = 'wrap';

    if (prevPath && prevName) {
        const prevButton = document.createElement('a');
        prevButton.href = prevPath;
        prevButton.style.display = 'flex';
        prevButton.style.alignItems = 'center';
        prevButton.style.padding = '1rem';
        prevButton.style.backgroundColor = '#f8f9fa';
        prevButton.style.borderRadius = '0.5rem';
        prevButton.style.textDecoration = 'none';
        prevButton.style.color = 'black';
        prevButton.style.width = '350px';
        prevButton.style.justifyContent = 'flex-start';

        prevButton.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="navigation-arrow stroke-current text-gray-300" style="margin-right: 0.75rem;">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 8 12 12 16"></polyline>
                <line x1="16" y1="12" x2="8" y2="12"></line>
            </svg>
            <div style="display: flex; flex-direction: column;">
                <span style="font-size: 0.75rem; color: grey; text-transform: uppercase;">Previous</span>
                <span style="font-weight: bold;">${prevName}</span>
            </div>
        `;

        container.appendChild(prevButton);
    }

    if (nextPath && nextName) {
        const nextButton = document.createElement('a');
        nextButton.href = nextPath;
        nextButton.style.display = 'flex';
        nextButton.style.alignItems = 'center';
        nextButton.style.padding = '1rem';
        nextButton.style.backgroundColor = '#f8f9fa';
        nextButton.style.borderRadius = '0.5rem';
        nextButton.style.textDecoration = 'none';
        nextButton.style.color = 'black';
        nextButton.style.width = '350px';
        nextButton.style.justifyContent = 'flex-end';

        nextButton.innerHTML = `
            <div style="display: flex; flex-direction: column; text-align: right;">
                <span style="font-size: 0.75rem; color: grey; text-transform: uppercase;">Next</span>
                <span style="font-weight: bold;">${nextName}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="navigation-arrow stroke-current text-gray-300" style="margin-left: 0.75rem;">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 8 16 12 12 16"></polyline>
                <line x1="8" y1="12" x2="16" y2="12"></line>
            </svg>
        `;

        container.appendChild(nextButton);
    }

    mainElement.appendChild(container);
});

// Inspiration from flipper docs, https://docs.flipper.net/