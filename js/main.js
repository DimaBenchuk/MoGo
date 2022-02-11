$(function() {
    
    // fixed header
    let header = $("#header"),
        introH = $("#intro").innerHeight(),
        scrollOffset = $(window).scrollTop();
    
    checkScroll(scrollOffset);
    
    $(window).on("scroll", function() {
        
        scrollOffset = $(this).scrollTop();
        checkScroll(scrollOffset);
        
    });
    
    function checkScroll(scrollOffset) {
        
        if (scrollOffset >= introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
        
    };
    
    
    
    // scroll to elements 
    $("[data-scroll]").on("click", function(event) {
        
        event.preventDefault();
        
        let elementId = $(this).data("scroll"),
            elementOffset = $(elementId).offset().top;
        
        $("#nav-toggle").toggleClass("active");
        $("#nav").toggleClass("active");
        $("#header").toggleClass("active");
        
        $("html, body").animate({
            scrollTop: elementOffset
        }, 500);
            
    });
    
    
    
    // show menu
    $("#nav-toggle").on("click", function(event) {
        
        event.preventDefault();
        
        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
        $("#header").toggleClass("active");
        
    });
    
    
    
    // show text in section service2
    let serviceContent = document.querySelector('.service2__content')

    function showText (event) {
        let target = event.target;

        if (target.tagName.toLowerCase() === 'button'){
            let text = target.nextElementSibling;
            let serviceArrow = target.lastElementChild;
            if (target.nextElementSibling === '180px') {
                text.classList.toggle('service2__text_active');
                serviceArrow.classList.toggle('active');
            } else {
                text.classList.toggle('service2__text_active');
                serviceArrow.classList.toggle('active');
            }

        } else if (target.tagName.toLowerCase() === 'img' || target.tagName.toLowerCase() === 'h4') {
            let text = target.parentElement.nextElementSibling;
            if (target.parentElement.nextElementSibling === '180px') {
                text.classList.toggle('service2__text_active');
                serviceArrow.classList.toggle('active');
            } else {
                text.classList.toggle('service2__text_active');
                serviceArrow.classList.toggle('active');
            }
        }
    }

    serviceContent.addEventListener('click', () => {
        showText(event);
    });

    
    
    // slider
    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        loop: true,
        navigation: {
            prevEl: ".button-prev",
            nextEl: ".button-next",
        },
    });
    
});