document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.querySelector('button[onclick="changeContainerColor()"]');
    const awhiteList = document.querySelectorAll('.awhite');
    const logoContainer = document.querySelector('.logo');

    function applyStyles(mode) {
        const container = document.querySelector('.container');
        const maincontent = document.querySelector('.maincontent');
        const car_img = document.querySelector('.car_img');
        const futures = document.querySelector('.futures');
        const body = document.querySelector('body');

        if (mode === 0) { // DarkMode
            container.style.backgroundColor = 'black';
            maincontent.style.backgroundColor = 'black';
            car_img.style.backgroundColor = 'black';
            futures.style.backgroundColor = 'black';
            body.style.color = 'white';

            awhiteList.forEach(link => {
                link.style.color = 'white';
                link.classList.add('darkmode');
            });

            changeColorButton.textContent = 'LightMode';
            logoContainer.style.backgroundImage = 'url(white.png)';
        } else { // LightMode
            container.style.backgroundColor = 'white';
            maincontent.style.backgroundColor = 'white';
            car_img.style.backgroundColor = 'white';
            futures.style.backgroundColor = 'white';
            body.style.color = 'black';

            awhiteList.forEach(link => {
                link.style.color = 'black';
                link.classList.remove('darkmode');
            });

            changeColorButton.textContent = 'DarkMode';
            logoContainer.style.backgroundImage = 'url(logo.png)';
        }
    }


    function changeContainerColor() {
        let currentMode = localStorage.getItem('mode') || '0';
        currentMode = (currentMode === '0') ? '1' : '0';

        localStorage.setItem('mode', currentMode);
        applyStyles(parseInt(currentMode, 10));
    }

    const currentMode = localStorage.getItem('mode') || '0';
    applyStyles(parseInt(currentMode, 10));

    changeColorButton.addEventListener('click', function () {
        changeContainerColor();
        // Mettre à jour currentMode après le changement
        currentMode = localStorage.getItem('mode');
    });

    window.addEventListener('popstate', function () {
        const currentMode = localStorage.getItem('mode') || '0';
        applyStyles(parseInt(currentMode, 10));
    });
});
