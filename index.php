<?php
/**
 * Plugin Name: Shortcode to Block
 */

if (!defined('ABSPATH')) {
    exit;
}

add_shortcode('message', function ($attributes) {
    $atts = shortcode_atts(array(
        'color' => 'red',
        'text' => 'Default text goes here...',
    ), $attributes);

    return sprintf(
        '<p style="color:%s;">%s</p>',
        esc_attr($atts['color']),
        esc_attr($atts['text'])
    );
});

add_action('init', function() {
    register_block_type( __DIR__ . '/build' );
});

