<!DOCTYPE html>
<html lang="ja">
    <head>
        <meta charset="UTF-8">
        <title>採用特設サイト | 株式会社TETOTE</title>
        <meta name="description" content="テクノロジーで社会課題を解決する。AIやビッグデータ分析などの技術を活用した社会課題解決サービスを提供するTETOTEの採用サイト。"/>
        <meta name="robots" content="noindex">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <script src="https://kit.fontawesome.com/bde0a14760.js" crossorigin="anonymous"></script>

        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&family=Viga&display=swap" rel="stylesheet">
        <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">

        <link rel="icon" href="<?php echo esc_url( get_theme_file_uri('images/favicon.png') ); ?>">

        <!--　リセットCSS　-->
        <link rel="stylesheet" href="https://unpkg.com/ress/dist/ress.min.css">

        <!--　オリジナルCSS　-->
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
        <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick-theme.css"/>
        <link rel="stylesheet" href="<?php echo esc_url(get_theme_file_uri('sass/style.css')); ?>" media="screen and (min-width: 320px)">

        <?php wp_head(); ?>
    </head>

    <body>
    <?php wp_body_open(); ?>
        <?php get_template_part('parts/header/nav'); ?>
        <?php get_template_part('parts/header/global-menu'); ?>
        <main class="main">
            <div class="main-inner">