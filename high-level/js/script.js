'use strict';

// セッションストレージからフラグを取得
const isFirstLoad = sessionStorage.getItem('isFirstLoad');

// ページの読み込みが完了したときに実行される関数
window.addEventListener('load', function() {
  // フラグが 'true' でない場合（初回アクセス時またはフラグが削除された場合）
    if (isFirstLoad !== 'true') {
        if(document.querySelectorAll('.loading').length){
                // ローディング画面を表示
                const loadingElement = document.querySelector('.loading');
                loadingElement.classList.add('is-active');

                // 2秒後にローディング画面を非表示にする
                setTimeout(function() {
                // ローディング画面を非表示にする
                loadingElement.classList.remove('is-active');
                // コンテンツ要素を表示
                if(document.querySelectorAll('.body__inner.hidden').length){
                    const bodyInner = document.querySelector('.body__inner.hidden');
                    bodyInner.classList.remove('hidden'); // hiddenクラスを取り除くことでコンテンツを表示
                }
                if(typeof ScrollReveal !== 'undefined'){
                    if (window.innerWidth > 1024) {
                        ScrollReveal().reveal('.fv__bg', { delay: 400 });
                        ScrollReveal().reveal('.fv__main', { delay: 500 });
                        ScrollReveal().reveal('.fv__text', { delay: 1200 });
                    } else {
                        // スマホなど小さい画面ではアニメーションを無効化
                        ScrollReveal().reveal('.fv__bg', { duration: 0 });
                        ScrollReveal().reveal('.fv__main', { duration: 0 });
                        ScrollReveal().reveal('.fv__text', { duration: 0 });
                    }    
                }

                // セッションストレージにフラグを保存
                sessionStorage.setItem('isFirstLoad', 'true');
                }, 2500);
                setTimeout(function() {
                loadingElement.style.display = 'none'; // 非表示にする
                }, 3000);
        }
    } else {
        // 2回目以降のアクセス時の処理を記述
        // コンテンツ要素を表示
        if(document.querySelectorAll('.body__inner.hidden').length){
            const contentsElement = document.querySelector('.body__inner.hidden');
            contentsElement.classList.remove('hidden'); // hiddenクラスを取り除くことでコンテンツを表示        
        }
        if(typeof ScrollReveal !== 'undefined'){
            if (window.innerWidth > 1024) {
                ScrollReveal().reveal('.fv__bg', { delay: 400 });
                ScrollReveal().reveal('.fv__main', { delay: 500 });
                ScrollReveal().reveal('.fv__text', { delay: 1200 });
            } else {
                // スマホなど小さい画面ではアニメーションを無効化
                ScrollReveal().reveal('.fv__bg', { duration: 0 });
                ScrollReveal().reveal('.fv__main', { duration: 0 });
                ScrollReveal().reveal('.fv__text', { duration: 0 });
            }    
        }
    }
});

const dotList = document.querySelectorAll(".dot");
dotList.forEach((dot) => {
    dot.classList.toggle("is-active");
});


$(function(){

    $('#hamburger').click(function(){
        $(this).toggleClass("is-active");
        $('.global-menu').toggleClass("is-active");

        // header-innerにmenu-openクラスをtoggle
        $('#header').toggleClass('menu-open');

        const $logoWrapper = $('.header__logo');
        const $logoImage = $logoWrapper.find('img');

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
    });

    // if(document.querySelectorAll('.fv__slider-box').length){
    //     $('.fv__slider-box').slick({
    //         autoplay: true,       // 自動再生
    //         autoplaySpeed: 0,  // 3秒ごとに切り替え
    //         dots: false,           // ドットナビゲーションを表示
    //         arrows: false,         // 前後の矢印を表示
    //         infinite: true,       // 無限ループ
    //         speed: 8000,           // アニメーション速度
    //         slidesToShow: 1,      // 一度に表示するスライド数
    //         slidesToScroll: 1,     // 一度にスクロールするスライド数
    //         cssEase: 'linear',

    //         // responsive: [
    //         //     {
    //         //     breakpoint: 700,
    //         //     settings: {
    //         //         slidesToShow: 1
    //         //     }
    //         //     },
    //         // ]
    //     });
    // }

    // if(document.querySelectorAll('.member__slider-box').length){
    //     $('.member__slider-box').slick({
    //         autoplay: false,       // 自動再生
    //         autoplaySpeed: 0,  // 3秒ごとに切り替え
    //         dots: false,           // ドットナビゲーションを表示
    //         arrows: true,         // 前後の矢印を表示
    //         infinite: true,       // 無限ループ
    //         speed: 600,           // アニメーション速度
    //         slidesToShow: 3,      // 一度に表示するスライド数
    //         slidesToScroll: 1,     // 一度にスクロールするスライド数
    //         cssEase: 'linear',
    //         cssEase: 'ease-in-out' // なめらかな加速減速

    //         // responsive: [
    //         //     {
    //         //     breakpoint: 700,
    //         //     settings: {
    //         //         slidesToShow: 1
    //         //     }
    //         //     },
    //         // ]
    //     });
    // }

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
            $('#logo-img').attr('src', 'images/tetote-logo-black.png');
            } else {
            $('#header').removeClass('scrolled');
            $('#logo-img').attr('src', 'images/tetote-logo-white.png');
            }
        }
    
        // 初回とスクロール・リサイズ時に実行
        updateHeaderState();
        $(window).on('scroll resize', updateHeaderState);
    });

    $('.news__list-item').hover(
        function() {
            $(this).stop().toggleClass("is-active");
        },
        function() {
            $(this).stop().toggleClass("is-active");
        }
    );
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


const buttonOpen = document.querySelectorAll(".modalOpen");
const buttonClose = document.querySelectorAll(".modalClose");
const modal = document.getElementById("modal");
const modalInner = document.querySelector(".modal-inner");
const modalContent = document.querySelector(".modal-content");

if(modal){
    const modalTag = modal.querySelector(".modal-content-sub-tag");
    const modalDate = modal.querySelector(".modal-content-sub-date");
    const modalTitle = modal.querySelector(".modal-content-main-title");
    const modalImg = modal.querySelector(".modal-content-main-img");
    const modalText = modal.querySelector(".modal-content-main-text");

    const newsData = {
        "2024.06.03": {
            text: `みなさま、こんにちは！弊社では、住宅設計相談会を開催することになりました！将来の家造りを真剣に考える皆様、ぜひご参加ください。<br><br>
            家を建てるというのは、人生の中で最も重要なイベントの一つです。そのためには、慎重な計画と適切なアドバイスが欠かせません。そこで、弊社の建築士が皆様のお悩みやご要望をお聞きし、最適な家づくりの提案をさせていただきます。<br><br>
            住宅設計相談会では、以下のようなことについてご相談いただけます：<br><br>
            ・理想の間取りやデザインについて<br>
            ・予算や資金計画の相談<br>
            ・土地選びや法的手続きについてのアドバイス<br>
            ・新しい住宅技術や省エネルギーの取り入れ方について<br><br>
            また、相談会に参加いただいた方には、特別なサービスやプレゼントもご用意しています。ぜひこの機会にお気軽にご参加ください！`,
            img: "images/news01 1.png"
        },
        "2024.05.23": {
            text: `弊社では、従業員の安全意識向上と安全管理の強化を目的として、安全管理研修を実施しました。この研修では、従業員全員が安全な作業環境を確保するための重要性や具体的な対策について学び、より安全な職場づくりに向けた取り組みを行いました。<br>
            研修では、以下の内容を中心に学びました：<br>
            <br>
            ・作業中の事故や災害を防ぐための基本的な安全ルールや手順<br>
            ・安全装置や保護具の正しい使用方法と管理について<br>
            ・作業現場での危険予知や事故対応のためのトレーニング<br>
            <br>
            また、実際の事例やケーススタディを通じて、事故や災害が発生した際の適切な対応方法についても学びました。参加者全員が積極的に議論し、知識を深めることができました。<br>
            <br>
            安全管理研修を通じて、従業員一人ひとりが安全に対する意識を高め、安全な職場環境の実現に向けて一層の努力をすることを確認しました。今後も定期的に研修を実施し、安全管理の徹底を図ってまいります。`,
            img: "images/news02 1.png"
        },
        "2024.05.01": {
            text: `弊社は、お客様により良いサービスを提供するため、ホームページをリニューアルいたしました。新しいデザインと使いやすさを追求し、お客様が情報をより簡単に見つけられるように工夫しました。<br>
            新しいホームページでは、以下のような改善点がございます：<br>
            <br>
            ・モダンでスタイリッシュなデザインにより、情報の見やすさと視覚的な魅力を向上<br>
            ・より直感的で分かりやすいナビゲーションメニューにより、目的の情報へのアクセスがスムーズになりました<br>
            ・より多くの情報やサービスを掲載し、お客様のニーズに合った情報を提供するようになりました<br>
            ・モバイルフレンドリーなデザインで、スマートフォンやタブレットからも快適に閲覧できます<br>
            <br>
            弊社のホームページは、お客様とのコミュニケーションや情報提供の重要なツールです。より使いやすく、わかりやすいホームページを提供することで、お客様との良好な関係を築いていくことが目標です。<br>
            <br>
            ぜひ、新しいホームページをご覧いただき、お客様のご意見やご要望をお聞かせください。今後もお客様により良いサービスを提供できるよう努めてまいります。`,
            img: "images/news03 1.png"
        }
    };


    // buttonOpen.forEach(btn => {
    //     btn.addEventListener("click", () => {
    //         modal.style.display = "block";
    //     });
    // });

    if(buttonOpen){
        buttonOpen.forEach(btn => {
            btn.addEventListener("click", () => {
                const tag = btn.querySelector(".news__list-item-sub-tag").textContent;
                const date = btn.querySelector(".news__list-item-sub-date").textContent;
                const title = btn.querySelector(".news__list-item-main").textContent;

                const content = newsData[date];

                modalTag.textContent = tag;
                modalDate.textContent = date;
                modalTitle.textContent = title;

                if (content) {
                    modalText.innerHTML = content.text;
                    modalImg.src = content.img;
                } else {
                    modalText.innerHTML = "詳細情報は準備中です。";
                    modalImg.src = "";
                }

                modal.style.display = "block";
            });
        });
    }


    if(buttonClose){
        buttonClose.forEach(btn => {
            btn.addEventListener("click", () => {
                modal.style.display = "none";
            });
        });
    }


    if(modalInner){
        modalInner.addEventListener("click", (e) => {
            // modal-content の外側をクリックした場合のみ
            if (!modalContent.contains(e.target)) {
                modal.style.display = "none";
            }
        });
    }
}

$(document).ready(function () {

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/d/1kyg2LoRMMUyv3YWJq6dtGb6gNQe-0FG3CxlbJH8lyUs/formResponse",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                window.location.href = "thanks.html";
                },
            }
        });
        event.preventDefault();
    });

});
