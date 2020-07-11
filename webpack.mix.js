const mix = require('laravel-mix');

require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your WordPlate application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JavaScript files.
 |
 */

const theme = process.env.WP_THEME;

mix
    .disableNotifications()

    .setResourceRoot('../')
    .setPublicPath(`web/app/themes/${theme}/assets`)

    .js('web/app/resources/scripts/app.js', 'scripts')
    .sass('web/app/resources/styles/app.scss', 'styles');
