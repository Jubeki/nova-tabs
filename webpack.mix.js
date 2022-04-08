let mix = require('laravel-mix')
let path = require('path')

mix.setPublicPath('dist')
   .js('resources/js/tabs.js', 'js')
   .vue({ version: 3 })
   .alias({
       'laravel-nova': path.join(__dirname, 'vendor/laravel/nova/resources/js/mixins/packages.js'),
   })
   .webpackConfig({
       externals: {
           vue: 'Vue',
       },
       output: {
           uniqueName: 'dkulyk/nova-tabs',
       },
   })
   .sass('resources/sass/tabs.scss', 'css')
