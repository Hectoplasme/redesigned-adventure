<?php
/**
* make the theme customizer ready
**/

include( get_template_directory() . '/inc/customizer.php' );

/**
* pouet_register_menus - register menus
**/

function pouet_register_menus() {
  register_nav_menus(
    array(
		'header-menu' => __( 'Menu header' ),
		'footer-menu' => __('Menu footer')
	)
  );
}
add_action( 'init', 'pouet_register_menus' );

/***
* pouet_scripts - Enqueue scripts and styles
**/

function pouet_scripts() {
 	wp_enqueue_style( 'pouet-styles', get_template_directory_uri() . '/static/assets/css/styles.css', array(), "", 'screen'  );
 	wp_enqueue_script( 'pouet-scripts', get_template_directory_uri() . '/static/assets/js/main.js', array(), "", true  );
 }
 add_action( 'wp_enqueue_scripts', 'pouet_scripts');

 /***
 * disable the margin-top injected by wordpress because of the admin bar
 **/

 add_action('get_header', 'remove_admin_login_header');
 function remove_admin_login_header() {
 	remove_action('wp_head', '_admin_bar_bump_cb');
 }
?>
