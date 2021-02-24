document.addEventListener('DOMContentLoaded', function () {
    const ele = document.getElementById('element');
    const menu = document.getElementById('menu');

    ele.addEventListener('contextmenu', function (e) {
        e.preventDefault();

        const rect = ele.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Set the position for menu
        menu.style.top = `${y}px`;
        menu.style.left = `${x}px`;

        // Show the menu
        menu.classList.remove('hidden');

        document.addEventListener('click', documentClickHandler);
    });

    // Hide the menu when clicking outside of it
    const documentClickHandler = function (e) {
        const isClickedOutside = !menu.contains(e.target);
        if (isClickedOutside) {
            menu.classList.add('hidden');
            document.removeEventListener('click', documentClickHandler);
        }
    };
});