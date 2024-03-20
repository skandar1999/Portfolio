
$(document).ready(function(){
    $(".navbar .nav-link").on('click', function(event) {

        if (this.hash !== "") {

            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 700, function(){
                window.location.hash = hash;
            });
        } 
    });
});

// navbar toggle
$('#nav-toggle').click(function(){
    $(this).toggleClass('is-active')
    $('ul.nav').toggleClass('show');
});


$(document).ready(function() {
    let certCarousel = document.querySelector('.cert-carousel');
    let certItems = document.querySelectorAll('.cert-item');
    let scrollDistance = certItems[0].offsetWidth + 5; 
    let currentCertIndex = 0;

    function scrollNext() {
        currentCertIndex++;
        if (currentCertIndex >= certItems.length) {
            currentCertIndex = 0;
        }
        certCarousel.style.transform = 'translateX(-' + (scrollDistance * currentCertIndex) + 'px)';
    }

    setInterval(scrollNext, 2100); 

    window.addEventListener('resize', function() {
        scrollDistance = certItems[0].offsetWidth + 5; 
        certCarousel.style.transform = 'translateX(-' + (scrollDistance * currentCertIndex) + 'px)';
    });
});


