<?php
/**
 * Divi Child Theme
 * Functions.php
 */

function divichild_enqueue_scripts() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
	wp_enqueue_style( 'assets-style', get_stylesheet_directory_uri() . '/assets/styles/app.css' );
}
add_action( 'wp_enqueue_scripts', 'divichild_enqueue_scripts' );
