var Encore = require('@symfony/webpack-encore');
var webpack = require('webpack');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('./src/Resources/public')
    // public path used by the web server to access the output path
    .setPublicPath('./')
    // only needed for CDN's or sub-directory deploy
    .setManifestKeyPrefix('')

    // will require an extra script tag for runtime.js
    // but, you probably want this, unless you're building a single-page app
    .disableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(true)

    // enables Sass/SCSS support
    .enableSassLoader(function(options){
        options.sourceMap = true;
    })

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if you JavaScript imports CSS.
     */
    .addEntry('assets/main', './assets/js/main.js')
    .addEntry('assets/templates/form', './assets/js/templates/form.js')

    .copyFiles({
        from: './assets/images/',

        // optional target path, relative to the output dir
        to: 'assets/images/[path][name].[ext]',

        // only copy files matching this pattern
        //pattern: /\.(png|jpg|jpeg)$/
    })
    .disableFontsLoader()
    .addLoader({
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/',
              publicPath: '../fonts/',
              esModule: false
            }
          }
        ]
    })
    .configureFilenames({
        images: 'assets/images/[name].[ext]',
    })
;

const config = Encore.getWebpackConfig();

// Change the kind of source map generated in
// development mode
config.devtool = 'source-map'

// Export the config (be careful not to call
// getWebpackConfig() again)
module.exports = config;
