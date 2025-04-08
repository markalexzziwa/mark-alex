document.addEventListener('DOMContentLoaded', () => {
        const toggleButton = document.getElementById('toggleButton');
        const body = document.body;
        const savedMode = localStorage.getItem('theme');
        if (savedMode) {
            body.classList.add(savedMode);
        } else {
            body.classList.add('light-mode');
        }

        toggleButton.addEventListener('click', () => {
            if (body.classList.contains('light-mode')) {
                body.classList.remove('light-mode');
                body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark-mode');
            } else {
                body.classList.remove('dark-mode');
                body.classList.add('light-mode');
                localStorage.setItem('theme', 'light-mode');
            }
        });
    });