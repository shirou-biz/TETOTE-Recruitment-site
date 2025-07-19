'use strict';

const dotList = document.querySelectorAll(".dot");
dotList.forEach((dot) => {
    dot.classList.toggle("is-active");
});


$(function(){
    const isTopPage = location.pathname.endsWith('/') || location.pathname.endsWith('/index.html');

    $('#hamburger').click(function(){
        $(this).toggleClass("is-active");
        $('.global-menu').toggleClass("is-active");

        // header-innerにmenu-openクラスをtoggle
        $('#header').toggleClass('menu-open');
        $('.header').toggleClass('menu-open');

        // スクロール禁止用クラスの付け外し
        $('html, body').toggleClass('no-scroll');

        const $logoWrapper = $('.header__logo');
        const $logoImage = $logoWrapper.find('img');

        if (isTopPage) {
            $logoWrapper.addClass('is-fading'); // フェードアウト

            setTimeout(function() {
                if ($('#hamburger').hasClass('is-active')) {
                    $logoImage.attr('src', 'images/tetote-logo-black.png');
                } else {
                    $logoImage.attr('src', 'images/tetote-logo-white.png');
                }
            }, 100); // フェード中にsrc切り替え

            setTimeout(function() {
                $logoWrapper.removeClass('is-fading'); // フェードイン
            }, 100); // CSS transitionとタイミング合わせ
        } else {
            // 下層ページは常に黒ロゴに固定
            $logoImage.attr('src', 'images/tetote-logo-black.png');
        }
    });

    $('.hover').hover(
        function() {
            $(this).stop().toggleClass("is-active");
            $(this).children().stop().toggleClass("is-active");
        },
        function() {
            $(this).stop().toggleClass("is-active");
            $(this).children().stop().toggleClass("is-active");
        }
    );

    $(function() {
        const isTopPage = location.pathname.endsWith('/') || location.pathname.endsWith('/index.html');

        if (isTopPage) {
            function updateHeaderState() {
                let scrollThreshold;
                const windowWidth = $(window).width();

                // ブレイクポイントごとの閾値
                if (windowWidth >= 1024) {
                scrollThreshold = 823;
                } else if (windowWidth >= 768) {
                scrollThreshold = 823;
                } else {
                scrollThreshold = 667;
                }

                const scrollTop = $(window).scrollTop();

                if (scrollTop > scrollThreshold) {
                $('#header').addClass('scrolled');
                $('.header').addClass('scrolled');
                $('#logo-img').attr('src', 'images/tetote-logo-black.png');
                } else {
                $('#header').removeClass('scrolled');
                $('.header').removeClass('scrolled');
                $('#logo-img').attr('src', 'images/tetote-logo-white.png');
                }
            }
        
            // 初回とスクロール・リサイズ時に実行
            updateHeaderState();
            $(window).on('scroll resize', updateHeaderState);

        } else {
            $('.header').addClass('scrolled');
            $('#header').addClass('scrolled');
            $('#logo-img').attr('src', 'images/tetote-logo-black.png');
        }
    });

});

function initializeSlider(selector, options) {
    // Slick初期化
    $(selector).slick(options);
  
    // クローン含め、奇数スライドにis-oddクラスを付与
    $(selector).on('setPosition', function () {
        const $allSlides = $(selector).find('.slick-slide');
        $allSlides.removeClass('is-odd');
        $allSlides.each(function (index) {
            if (index % 2 === 0) {
            $(this).addClass('is-odd');
            }
        });
    });
}

if ($('.fv__slider-box').length) {
    initializeSlider('.fv__slider-box', {
        arrows: false,
        infinite: true,
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: 'linear',
        dots: false
    });
}
  
if ($('.member__slider-box').length) {
    initializeSlider('.member__slider-box', {
        arrows: true,
        infinite: true,
        speed: 600,
        autoplay: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: 'ease-in-out',
        dots: false,
        variableWidth: true,
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const tocLinks = document.querySelectorAll('.page-staff-personal__interview-toc__list a');
    const sections = document.querySelectorAll('.page-staff-personal__interview-section');

    // 1. スムーススクロール
    tocLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1); // "section-1"
            const target = document.getElementById(targetId);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 728,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -30% 0px',
        threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                console.log("現在表示中のセクション:", id); // ← この行を追加して確認
                tocLinks.forEach(link => {
                    link.classList.toggle('is-active', link.getAttribute('href').substring(1) === id);
                });
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        observer.observe(section);
    });
});