<!DOCTYPE html>
<html>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<title><?php wp_title('|','true','right'); ?><?php bloginfo('name'); ?></title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"><link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo( 'stylesheet_url' ); ?>" />
	<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
  <header class="header">
    <h1 class="header__logo u-c-secondary">
        <?php if (is_front_page()) : ?>
        <a href="#accueil"><?php bloginfo('name'); ?></a>
        <?php else: ?>
        <a href="<?php echo esc_url( home_url( '/' ) );?>"><?php bloginfo('name'); ?></a>
        <?php endif; ?>
    </h1>
    <div class="header__nav nav js-nav">
      <button class="nav__toggler js-nav-open">Menu</button>
      <nav class="nav__inner u-b-pattern">
        <div class="nav__header">
          <button class="nav__toggler js-nav-close">Menu</button>
        </div>
        <?php wp_nav_menu( array(
						'theme_location' => 'header-menu',
						'container' => false,
						'depth' => 1
				) ); ?>
        
      </nav>
    </div>
  </header>
