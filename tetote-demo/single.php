<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>採用ブログ詳細ページ | 株式会社TETOTE</title>
        <meta name="description" content="テクノロジーで社会課題を解決する。AIやビッグデータ分析などの技術を活用した社会課題解決サービスを提供するTETOTEの採用サイト。このページでは、会社理念について解説しています。"/>
        <meta name="robots" content="noindex">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="https://kit.fontawesome.com/bde0a14760.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Viga&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

        <link rel="icon" href="images/favicon.png">

        <!--　リセットCSS　-->
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">

        <!--　オリジナルCSS　-->
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
        <link rel="stylesheet" href="<?php echo esc_url(get_theme_file_uri('sass/style.css')); ?>" media="screen and (min-width: 370px)">
    </head>

    <body>
        <header class="header">
            <div class="header-inner" id="header">
                <h1 class="header__logo">
                    <a href="index.html">
                        <img src="images/tetote-logo-white.png" alt="株式会社TETOTE" id="logo-img">
                    </a>
                </h1>
                <div class="header__nav-wrapper">
                    <a href="details.html" class="details-btn hover">募集要項</a>
                    <a href="entry.html" class="entry-btn en hover">ENTRY</a>
                    <button class="hamburger" id="hamburger">
                        <span></span>
                        <span></span>
                        <span></span>
                        <p class="en">MENU</p>
                    </button>
                </div>
            </div>
        </header>
        <!--　ナビゲーション　-->
        <div class="global-menu">
            <div class="global-menu-inner">
                <div class="global-menu-wrapper">
                    <div class="global-menu__logo">
                        <a href="index.html" class="global-menu__logo-inner">
                            <img src="images/tetote-logo-black.png" alt="株式会社TETOTE">                            
                        </a>
                    </div>
                    <nav>
                        <div class="nav-inner">
                            <div class="global-menu__list-top">
                                <ul class="global-menu__list-top-column global-menu__list-top-column-left">
                                    <li class="global-menu__list-item">
                                        <a href="about-us.html">
                                            <div>
                                                <p class="global-menu__list-item-maintext en">ABOUT US</p>
                                                <p class="global-menu__list-item-subtext">TETOTEについて</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="global-menu__list-item">
                                        <a href="staff.html">
                                            <div>
                                                <p class="global-menu__list-item-maintext en">STAFF</p>
                                                <p class="global-menu__list-item-subtext">社員について</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="global-menu__list-item">
                                        <a href="blog.html">
                                            <div>
                                                <p class="global-menu__list-item-maintext en">BLOG</p>
                                                <p class="global-menu__list-item-subtext">採用ブログ</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                <ul class="global-menu__list-top-column global-menu__list-top-column-right">
                                    <li class="global-menu__list-item">
                                        <a href="benefits.html">
                                            <div>
                                                <p class="global-menu__list-item-maintext en">BENEFITS</p>
                                                <p class="global-menu__list-item-subtext">福利厚生について</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="global-menu__list-item">
                                        <a href="career.html">
                                            <div>
                                                <p class="global-menu__list-item-maintext en">CARRER</p>
                                                <p class="global-menu__list-item-subtext">研修制度とキャリアパス</p>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="global-menu__list-item">
                                        <a href="faq.html">
                                            <div>
                                                <p class="global-menu__list-item-maintext en">FAQ</p>
                                                <p class="global-menu__list-item-subtext">よくある質問</p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div class="global-menu__list-bottom">
                                <a href="details.html" class="details-btn hover">募集要項</a>
                                <a href="entry.html" class="entry-btn en hover">ENTRY</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <main class="main">
            <div class="main-inner case-blog-detail">
                <nav class="breadcrumb" aria-label="パンくずリスト">
                    <ol class="breadcrumb-inner">
                        <li><a href="/">TOP</a></li>
                        <li><a href="/about-us.html/">BLOG</a></li>
                        <li><a href="/about-us.html/">新入社員向けに、入社前研修を行いました。</a></li>
                    </ol>
                </nav>
                <div class="page-blog-detail">
                    <div class="page-blog-detail-inner">
                        <div class="page-blog-detail_post">
                            <article>
                                <?php if ( have_posts() ) : ?>
                                    <?php while ( have_posts() ) : the_post(); ?>

                                        <div class="blog__list-item_content">
                                            <div <?php post_class('blog__list-item_content-blog-detail-wrapper'); ?>>
                                                <a href="" class="blog__list-item_content-tag">
                                                    <img src="images/categorry1.png" alt="">
                                                    <div><p class="blog__list-item_content-tag-category"><?php the_category(); ?></p></div>
                                                </a>
                                                <time datetime="2025-03-25" class="blog__list-item_content-date"><?php the_time('Y.m.d') ?></time>                                         
                                            </div>
                                            <a  href="/blog/article-1" class="blog__list-item_content-title"><?php the_title(); ?></a>
                                        </div>                                     
                                        <div class="blog__list-item_img">
                                            <img src="images/blog01.jpeg" alt="">
                                        </div>
                                        <div class="blog__list-item_text">
                                            <?php the_content(); ?>
                                        </div>

                                    <?php endwhile; ?>
                                <?php endif; ?>


                            </article>
                        </div>
                        <div class="page-blog-detail_nav">
                            <div class="page-blog-detail_nav-inner">
                                <a href="" class="page-blog-detail_nav-previous">
                                    <div class="page-blog-detail_nav-previous-button">
                                        <img src="images/staff-detail-arrow.svg" alt="">
                                    </div>
                                    <div class="page-blog-detail_nav-main">
                                        <p class="blog__list-item_content-title">内定者向け研修を行いました</p>
                                        <time datetime="2025-08-25" class="blog__list-item_content-date">2024.08.25</time>
                                    </div>
                                </a>
                                <a href="" class="page-blog-detail_nav-next">
                                    <div class="page-blog-detail_nav-main">
                                        <p class="blog__list-item_content-title">【新卒採用2024】エントリー受付中！</p>
                                        <time datetime="2025-08-25" class= "blog__list-item_content-date">2024.08.25</time>
                                    </div>
                                    <div href="" class="page-blog-detail_nav-next-button">
                                        <img src="images/staff-detail-arrow.svg" alt="" class="reverse">
                                    </div>                                
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cta">
                    <div class="cta__img">
                        <img src="images/cta 1.jpeg" alt="">
                    </div>
                    <div class="cta__main">
                        <p class="cta__main-desc">
                            わたしたちと一緒に働く仲間を募集中です。<br>
                            少数精鋭のチームで、<br>
                            あなたも会社も一緒に成長していきましょう。<br>
                        </p>
                        <a href="entry.html" class="entry-btn hover">
                            <p class="en">ENTRY</p>
                            <img src="images/arrow 7.svg" alt="" class="hover">
                        </a>
                    </div>
                </div>
            </div>
        </main>
        <footer class="footer">
            <div class="footer-inner">
                <div class="footer__left">
                    <a href="index.html" class="footer__left-logo">
                        <img src="images/tetote-logo-black.png" alt="株式会社TETOTE">
                    </a>
                    <p class="footer__left-copyright en">© 2024 TETOTE All Right Reserved.</p>
                </div>
                <div class="footer__right">
                    <div class="footer__right-list">
                        <ul class="footer__right-list-row">
                            <li><a href="index.html">ホーム</a></li>
                            <li><a href="about-us.html">TETOTEについて</a></li>
                            <li><a href="staff.html">人を知る</a></li>
                            <li><a href="career.html">研修制度とキャリアパス</a></li>
                            <li><a href="benefits.html">福利厚生</a></li>
                        </ul>
                        <ul class="footer__right-list-row">
                            <li><a href="index.html">採用ブログ</a></li>
                            <li><a href="about-us.html">募集要項</a></li>
                            <li><a href="staff.html">よくある質問</a></li>
                            <li><a href="career.html">会社概要</a></li>
                        </ul>
                    </div>
                    <ul class="footer__right-icons">
                        <li>
                            <a href="#" target="_blank" class="footer__right-icons-item" rel="noopener noreferrer">
                                <img src="images/facebook.svg" alt="Facebookアイコン">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="footer__right-icons-item" rel="noopener noreferrer">
                                <img src="images/twitter.svg" alt="Twitterアイコン">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="footer__right-icons-item" rel="noopener noreferrer">
                                <img src="images/youtube.svg" alt="YouTubeアイコン">
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>

    <script src="https://code.jquery.com/jquery-3.7.1.min.js" integrity="sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=" crossorigin="anonymous"></script>
    <script src="https://unpkg.com/scrollreveal"></script>
    <script>
        ScrollReveal({ reset: false, duration: 1000 });
    </script>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
    <script src="js/script.js"></script>
    </body>
</html>