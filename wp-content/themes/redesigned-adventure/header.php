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
    <h1 class="header__logo u-c-secondary"><a href="#">Laurianne Terrier</a></h1>
    <div class="header__nav nav js-nav">
      <button class="nav__toggler js-nav-open">Menu</button>
      <nav class="nav__inner u-b-pattern">
        <div class="nav__header">
          <button class="nav__toggler js-nav-close">Menu</button>
        </div>
        <ul class="menu">
          <li class="is-active"><a class="gotos" href="#accueil">Accueil</a></li>
          <li><a class="gotos" href="#projets">Projets</a></li>
          <li><a class="gotos" href="#a-propos">A propos</a></li>
          <li><a class="gotos" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
