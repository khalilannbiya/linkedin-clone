document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.menu-toggle').addEventListener('click', function () {
        const navList = document.querySelector('.navList');
        navList.classList.toggle('slide');
    });

    document.querySelector('.see-more-btn').addEventListener('click', function () {
        const aboutSection = document.querySelector('.about');

        // toggle class 'expanded'
        aboutSection.classList.toggle('expanded');

        // change button text
        if (aboutSection.classList.contains('expanded')) {
            this.textContent = 'See Less';
        } else {
            this.textContent = 'See More';
        }
    });

    // function to toggle the 'See More' functionality
    function toggleSeeMore(event) {
        const descriptionDiv = event.target.previousElementSibling;
        const isExpanded = descriptionDiv.style.maxHeight !== '100px';

        if (isExpanded) {
            descriptionDiv.style.maxHeight = '100px';
            event.target.textContent = 'See More';
        } else {
            descriptionDiv.style.maxHeight = descriptionDiv.scrollHeight + 'px';
            event.target.textContent = 'See Less';
        }
    }

    // add click event listeners to all 'See More' spans
    const seeMoreSpans = document.querySelectorAll('.see-more-span');
    seeMoreSpans.forEach(span => {
        span.addEventListener('click', toggleSeeMore);
    });

    // init all description divs
    const descriptionDivs = document.querySelectorAll('.description');
    descriptionDivs.forEach(div => {
        div.style.maxHeight = '100px';
    });

    // toggle dark mode
    const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");

    // Cek preferensi dark mode dari local storage
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
    }

    toggleDarkModeBtn.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        // Simpan preferensi dark mode ke local storage
        if (document.body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

})