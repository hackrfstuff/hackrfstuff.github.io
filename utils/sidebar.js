document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth >= 768) {
        fetch('../index.html')
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const htmlDoc = parser.parseFromString(data, 'text/html');
                const sidebar = htmlDoc.querySelector('.sidebar');
                document.getElementById('sidebar-container').innerHTML = sidebar.innerHTML;

                const links = document.querySelectorAll('#sidebar-container a');
                links.forEach(link => {
                    const href = link.getAttribute('href');
                    if (href && href.startsWith('./')) {
                        link.setAttribute('href', href.replace('./', '../'));
                    }
                });
            })
            .catch(error => console.error('Error loading sidebar:', error));
    }
});
