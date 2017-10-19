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

/***
* add options page
**/
if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
    	'page_title' 	=> 'Paramètres du thème Redesignes Adventure',
    	'menu_title'	=> 'Redesigned Adventure Theme',
    	'menu_slug' 	=> 'theme-general-settings',
    	'capability'	=> 'manage_options',
    	'redirect'		=> false
     ));
}

/***
* Wysiwyg editor options
**/

add_filter( 'acf/fields/wysiwyg/toolbars' , 'my_toolbars'  );
function my_toolbars( $toolbars )
{
	// Add a new toolbar called "Only Bold"
	$toolbars['Only Bold' ] = array();
	$toolbars['Only Bold' ][1] = array('bold' );

    	// Add a new toolbar called "Very Simple"
	$toolbars['Very Simple' ] = array();
	$toolbars['Very Simple' ][1] = array('bold', 'link' );

	// return $toolbars - IMPORTANT!
	return $toolbars;
}

function tinymce_paste_as_text( $init ) {
    $init['paste_as_text'] = true;

    // omit the pastetext button so that the user can't change it manually, current toolbar2 content as of 4.1.1 is "formatselect,underline,alignjustify,forecolor,pastetext,removeformat,charmap,outdent,indent,undo,redo,wp_help"
    $init["toolbar2"] = "formatselect,underline,alignjustify,forecolor,removeformat,charmap,outdent,indent,undo,redo,wp_help";

    return $init;
}
add_filter('tiny_mce_before_init', 'tinymce_paste_as_text');

?>
