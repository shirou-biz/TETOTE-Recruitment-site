<header class="header">
    <div class="header-inner" id="header">
        <h1 class="header__logo">
            <a href="<?php echo esc_url( home_url('/') ); ?>">
                <img id="logo-img" src="<?php echo esc_url( get_theme_file_uri('images/tetote-logo-white.png') ); ?>" data-logo-white="<?php echo esc_url( get_theme_file_uri('images/tetote-logo-white.png') ); ?>" data-logo-dark="<?php echo esc_url( get_theme_file_uri('images/tetote-logo-black.png') ); ?>" alt="株式会社TETOTE">
            </a>
        </h1>
        <div class="header__nav-wrapper">
            <a href="<?php echo esc_url( home_url('/details') ); ?>" class="details-btn hover">募集要項</a>
            <a href="<?php echo esc_url( home_url('/entry') ); ?>" class="entry-btn en hover">ENTRY</a>
            <button class="hamburger" id="hamburger">
                <span></span>
                <span></span>
                <span></span>
                <p class="en">MENU</p>
            </button>
        </div>
    </div>
</header>