    <?php get_template_part('parts/footer/cta'); ?>

</div>
        </main>
        <footer class="footer">
            <div class="footer-inner">
                <div class="footer__left">
                    <a href="<?php echo esc_url( home_url('/index') ); ?>" class="footer__left-logo">
                        <img src="<?php echo esc_url(get_theme_file_uri('images/tetote-logo-black.png')); ?>" alt="株式会社TETOTE">
                    </a>
                    <p class="footer__left-copyright en">&copy; <?php echo date('Y'); ?> TETOTE All Right Reserved.</p>
                </div>
                <div class="footer__right">
                    <div class="footer__right-list">
                        <ul class="footer__right-list-row">
                            <li><a href="<?php echo esc_url( home_url('/') ); ?>">ホーム</a></li>
                            <li><a href="<?php echo esc_url( home_url('/about-us') ); ?>">TETOTEについて</a></li>
                            <li><a href="<?php echo esc_url( home_url('/staff') ); ?>">人を知る</a></li>
                            <li><a href="<?php echo esc_url( home_url('/career') ); ?>">研修制度とキャリアパス</a></li>
                            <li><a href="<?php echo esc_url( home_url('/benefits') ); ?>">福利厚生</a></li>
                        </ul>
                        <ul class="footer__right-list-row">
                            <li><a href="<?php echo esc_url( home_url('/') ); ?>">採用ブログ</a></li>
                            <li><a href="<?php echo esc_url( home_url('/about-us') ); ?>">募集要項</a></li>
                            <li><a href="<?php echo esc_url( home_url('/staff') ); ?>">よくある質問</a></li>
                            <li><a href="<?php echo esc_url( home_url('/career') ); ?>">会社概要</a></li>
                        </ul>
                    </div>
                    <ul class="footer__right-icons">
                        <li>
                            <a href="#" target="_blank" class="footer__right-icons-item" rel="noopener noreferrer">
                                <img src="<?php echo esc_url(get_theme_file_uri('images/facebook.svg')); ?>" alt="Facebookアイコン">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="footer__right-icons-item" rel="noopener noreferrer">
                                <img src="<?php echo esc_url(get_theme_file_uri('images/twitter.svg')); ?>" alt="Twitterアイコン">
                            </a>
                        </li>
                        <li>
                            <a href="#" target="_blank" class="footer__right-icons-item" rel="noopener noreferrer">
                                <img src="<?php echo esc_url(get_theme_file_uri('images/youtube.svg')); ?>" alt="YouTubeアイコン">
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
    <script src="<?php echo esc_url(get_theme_file_uri('js/script.js')); ?>"></script>

    <?php wp_footer(); ?>
    </body>
</html>