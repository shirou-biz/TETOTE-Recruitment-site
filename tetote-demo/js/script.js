'use strict';

const dotList = document.querySelectorAll(".dot");
dotList.forEach((dot) => {
    dot.classList.toggle("is-active");
});

jQuery(function ($) {
  const $win = $(window);
  const $hamburger = $('#hamburger');
  const $header = $('#header');
  const $headerRoot = $('.header');

  // ロゴ要素 & 絶対URL（nav.php の data-* から取得）
  const logoEl = document.getElementById('logo-img');
  const $logoWrapper = $('.header__logo');
  const $logoImage = $logoWrapper.find('img'); // ← 未使用だがこのままでもOK
  const logoWhite = logoEl ? logoEl.dataset.logoWhite : '';
  const logoBlack = logoEl ? logoEl.dataset.logoDark : ''; // ← ★ここだけ修正

  // トップページ判定（WPの body クラス + 旧来のパス判定でフォールバック）
  const isTopPage =
    document.body.classList.contains('front-page') ||
    document.body.classList.contains('home') ||
    location.pathname.endsWith('/') ||
    location.pathname.endsWith('/index.html');

  // ハンバーガー
  $hamburger.on('click', function () {
    $(this).toggleClass('is-active');
    $('.global-menu').toggleClass('is-active');

    // header-innerにmenu-openクラスをtoggle
    $header.toggleClass('menu-open');
    $headerRoot.toggleClass('menu-open');

    // スクロール禁止用クラスの付け外し
    $('html, body').toggleClass('no-scroll');

    if (!logoEl) return;

    if (isTopPage) {
      $logoWrapper.addClass('is-fading'); // フェードアウト

      setTimeout(function () {
        // data-* の絶対URLで差し替え
        logoEl.src = $hamburger.hasClass('is-active') ? logoBlack : logoWhite;
      }, 100); // フェード中にsrc切り替え

      setTimeout(function () {
        $logoWrapper.removeClass('is-fading'); // フェードイン
      }, 100); // CSS transitionとタイミング合わせ
    } else {
      // 下層ページは常に黒ロゴに固定（絶対URL）
      logoEl.src = logoBlack;
    }
  });

  // ホバー（そのまま）
  $('.hover').hover(
    function () {
      $(this).stop().toggleClass('is-active');
      $(this).find('.more-btn-text, img, .submit-btn-text').stop().toggleClass('is-active');
    },
    function () {
      $(this).stop().toggleClass('is-active');
      $(this).find('.more-btn-text, img, .submit-btn-text').stop().toggleClass('is-active');
    }
  );

  // スクロールでヘッダー状態更新（相対パスは使わない）
  function updateHeaderState() {
    if (!logoEl) return;

    let scrollThreshold;
    const windowWidth = $win.width();

    // ブレイクポイントごとの閾値（元コード維持）
    if (windowWidth >= 1024) {
      scrollThreshold = 823;
    } else if (windowWidth >= 768) {
      scrollThreshold = 823;
    } else {
      scrollThreshold = 667;
    }

    const scrolled = $win.scrollTop() > scrollThreshold;

    $header.toggleClass('scrolled', scrolled);
    $headerRoot.toggleClass('scrolled', scrolled);

    // data-*（絶対URL）で切り替え
    logoEl.src = scrolled ? logoBlack : logoWhite;
  }

  if (isTopPage) {
    // 初回とスクロール・リサイズ時に実行
    updateHeaderState();
    $win.on('scroll resize', updateHeaderState);
  } else {
    $headerRoot.addClass('scrolled');
    $header.addClass('scrolled');
    if (logoEl) logoEl.src = logoBlack; // 下層は常に黒（絶対URL）
  }
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
                    top: target.offsetTop - 130,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Intersection Observer
    const observerOptions = {
        root: null,
        rootMargin: '-150px 0px -60% 0px',
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

$(function(){
    $('.page-faq_main-section-list-item').hover(
      function() {
        $(this).find('.page-faq_main-section-list-item_open').stop().slideDown(300);
        $(this).find('.plus-height').stop().fadeOut(200);
      },
      function() {
        $(this).find('.page-faq_main-section-list-item_open').stop().slideUp(300);
        $(this).find('.plus-height').stop().fadeIn(200);
      }
    );
});