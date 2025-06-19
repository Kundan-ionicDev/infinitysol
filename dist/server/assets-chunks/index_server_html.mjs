export default `<head>
  <meta charset="utf-8">
  <title>Mybusiness</title>
  <base href="infinitysol">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">

       <!-- Template CSS -->
<link rel="stylesheet" href="assets/css/style-liberty.css">

<link rel="stylesheet" href="styles-UGL6THQB.css"></head>

<body><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script>
  <app-root></app-root>
<script src="polyfills-B6TNHZQ6.js" type="module"></script><script src="main-3ZF6CPAC.js" type="module"></script></body>
<!-- common jquery plugin -->
    <script src="assets/js/jquery-3.3.1.min.js"></script>
    <!-- //common jquery plugin -->

    <!-- banner slider -->
    <script>
        const slides = document.querySelectorAll(".slide");
        const nextButton = document.getElementById("next");
        const prevButton = document.getElementById("prev");
        const auto = true;
        const intervalTime = 5000;
        let slideInterval;

        const nextSlide = () => {
            const current = document.querySelector(".current");
            current.classList.remove("current");
            if (current.nextElementSibling) {
                current.nextElementSibling.classList.add("current");
            } else {
                slides[0].classList.add("current");
            }
        };

        const prevSlide = () => {
            const current = document.querySelector(".current");
            current.classList.remove("current");
            if (current.previousElementSibling) {
                current.previousElementSibling.classList.add("current");
            } else {
                slides[slides.length - 1].classList.add("current");
            }
        };

        nextButton.addEventListener("click", () => {
            nextSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        });
        prevButton.addEventListener("click", () => {
            prevSlide();
            if (auto) {
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, intervalTime);
            }
        });

        if (auto) {
            slideInterval = setInterval(nextSlide, intervalTime);
        }
    </script>
    <!-- //banner slider -->

    <!-- theme switch js (light and dark)-->
    <script src="assets/js/theme-change.js"></script>
    <!-- //theme switch js (light and dark)-->

    <!-- MENU-JS -->
    <script>
        \$(window).on("scroll", function () {
            var scroll = \$(window).scrollTop();

            if (scroll >= 80) {
                \$("#site-header").addClass("nav-fixed");
            } else {
                \$("#site-header").removeClass("nav-fixed");
            }
        });

        //Main navigation Active Class Add Remove
        \$(".navbar-toggler").on("click", function () {
            \$("header").toggleClass("active");
        });
        \$(document).on("ready", function () {
            if (\$(window).width() > 991) {
                \$("header").removeClass("active");
            }
            \$(window).on("resize", function () {
                if (\$(window).width() > 991) {
                    \$("header").removeClass("active");
                }
            });
        });
    </script>
    <!-- //MENU-JS -->

    <!-- disable body scroll which navbar is in active -->
    <script>
        \$(function () {
            \$('.navbar-toggler').click(function () {
                \$('body').toggleClass('noscroll');
            })
        });
    </script>
    <!-- //disable body scroll which navbar is in active -->

    <!-- bootstrap -->
    <script src="assets/js/bootstrap.min.js"></script>
    <!-- //bootstrap -->
    <!-- //Js scripts -->
<script>(function(){function c(){var b=a.contentDocument||a.contentWindow.document;if(b){var d=b.createElement('script');d.innerHTML="window.__CF\$cv\$params={r:'94d240b649799aca',t:'MTc0OTQ4OTEzNS4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='../../../../../../cdn-cgi/challenge-platform/h/b/scripts/jsd/f9574c83b4d7/maind41d.js';document.getElementsByTagName('head')[0].appendChild(a);";b.getElementsByTagName('head')[0].appendChild(d)}}if(document.body){var a=document.createElement('iframe');a.height=1;a.width=1;a.style.position='absolute';a.style.top=0;a.style.left=0;a.style.border='none';a.style.visibility='hidden';document.body.appendChild(a);if('loading'!==document.readyState)c();else if(window.addEventListener)document.addEventListener('DOMContentLoaded',c);else{var e=document.onreadystatechange||function(){};document.onreadystatechange=function(b){e(b);'loading'!==document.readyState&&(document.onreadystatechange=e,c())}}}})();</script></body>


</html>
`;