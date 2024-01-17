document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector('header');
    var lastScrollTop = 0;

    window.addEventListener("scroll", function() {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.opacity = "0";
        } else {
            // Scrolling up
            header.style.opacity = "1";
        }

        lastScrollTop = scrollTop;
    });
});