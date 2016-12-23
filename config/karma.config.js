/*************************
 * Karma Configuration
 **************************/
module.exports = function(config){
    var libs = 'node_modules/',
        source = 'src/',
        app = source+'app/',
        components = app+'components/',
        tests = 'test/';

    config.set({

        autoWatch: true,

        basePath: '../',

        browsers: ['PhantomJS'],

        colors: true,

        coverageReporter: {
            dir: tests+'reports',
            reporters: [
                {
                    subdir: 'html',
                    type: 'html'
                }
            ]
        },

        files: [
            libs+'jquery/dist/jquery.min.js',
            libs+'angular/angular.min.js',
            libs+'angular-animate/angular-animate.min.js',
            libs+'angular-aria/angular-aria.min.js',
            libs+'angular-cookies/angular-cookies.min.js',
            libs+'angular-resource/angular-resource.min.js',
            libs+'angular-sanitize/angular-sanitize.min.js',
            libs+'angular-mocks/angular-mocks.js',
            libs+'angular-touch/angular-touch.min.js',
            libs+'angular-ui-router/release/angular-ui-router.min.js',
            libs+'rx/dist/rx.all.min.js',
            libs+'rx-angular/dist/rx.angular.min.js',
            libs+'angular-ui-bootstrap/dist/ui-bootstrap-tpls.js',
            libs+'angular-material/angular-material.min.js',
            source+'modernizr.js',
            libs+'moment/min/moment.min.js',
            libs+'moment-timezone/builds/moment-timezone.min.js',
            libs+'leaflet/dist/leaflet.js',
            libs+'angular-simple-logger/dist/angular-simple-logger.min.js',
            libs+'ui-leaflet/dist/ui-leaflet.min.js',
            libs+'angularfire/dist/angularfire.min.js',
            libs+'firebase/firebase.js',
            libs+'angulartics/dist/angulartics.min.js',
            libs+'angulartics-google-tag-manager/dist/angulartics-google-tag-manager.min.js',
            app+'app.module.js',
            app+'app.config.js',
            app+'app.run.js',
            app+'app.constansts.js',
            components+'**/*.js',
            tests+'spec/*.js',
            tests+'spec/**/*.js',
            tests+'spec/components/**/*.js',
            tests+'fixtures/*.json'
        ],

        frameworks: ['jasmine'],

        logLevel: config.LOG_DEBUG,

        ngHtml2JsPreprocessor: {
            cacheIdFromPath: function (filepath) {
                console.log(filepath);
                return filepath.substr(filepath.indexOf("src") + 4);
            },
            moduleName: 'dsft-templates'
        },

        ngJson2JsPreprocessor: {
            cacheIdFromPath: function (filepath) {

                return filepath.substr(filepath.indexOf("fixtures") + 9);
            }
        },

        plugins: [
            'karma-coverage',
            'karma-phantomjs-launcher',
            'karma-firefox-launcher',
            'karma-chrome-launcher',
            'karma-jasmine',
            'karma-ng-html2js-preprocessor',
            'karma-ng-json2js-preprocessor'
        ],

        port: 9876,

        preprocessors: {
            'src/app/*.js': ['coverage'],
            'src/app/components/**/*.js': ['coverage'],
            'src/app/components/**/*.html': ['ng-html2js'],
            'test/fixtures/*.json': ['ng-json2js']
        },

        reporters: ['progress', 'coverage'],

        singleRun: false

    });
};
