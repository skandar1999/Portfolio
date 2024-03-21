
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
    let scrollDistance = certItems[0].offsetWidth + 20; // Add margin between items
    let currentCertIndex = 0;

    function scrollNext() {
        currentCertIndex++;
        if (currentCertIndex >= certItems.length) {
            currentCertIndex = 0;
        }
        certCarousel.style.transform = 'translateX(-' + (scrollDistance * currentCertIndex) + 'px)';
    }

    function scrollPrev() {
        currentCertIndex--;
        if (currentCertIndex < 0) {
            currentCertIndex = certItems.length - 1;
        }
        certCarousel.style.transform = 'translateX(-' + (scrollDistance * currentCertIndex) + 'px)';
    }

    setInterval(scrollNext, 6000); 
    window.addEventListener('resize', function() {
        scrollDistance = certItems[0].offsetWidth + 20; // Add margin between items
        certCarousel.style.transform = 'translateX(-' + (scrollDistance * currentCertIndex) + 'px)';
    });

    // Button click events
    $('.btn-prev').click(function() {
        scrollPrev();
    });

    $('.btn-next').click(function() {
        scrollNext();
    });
});
