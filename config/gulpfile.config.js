/*************************
 * Gulpfile Configuration
 **************************/
module.exports = function() {
    var libs = 'node_modules/',
        source = 'src/',
        app = source+'app/',
        components = app+'components/';

    var config = {
        dependantJS: [
            libs+'jquery/dist/jquery.min.js',
            libs+'angular/angular.min.js',
            libs+'angular-animate/angular-animate.min.js',
            libs+'angular-aria/angular-aria.min.js',
            libs+'angular-cookies/angular-cookies.min.js',
            libs+'angular-resource/angular-resource.min.js',
            libs+'angular-sanitize/angular-sanitize.min.js',
            libs+'angular-touch/angular-touch.min.js',
            libs+'angular-ui-router/release/angular-ui-router.min.js',
            libs+'angular-bootstrap/ui-bootstrap-tpls.min.js',
            libs+'angular-material/angular-material.min.js',
            libs+'moment/min/moment.min.js',
            libs+'moment-timezone/builds/moment-timezone.min.js',
            libs+'angularfire/dist/angularfire.min.js',
            libs+'firebase/firebase.js',
            libs+'angulartics/dist/angulartics.min.js',
            libs+'angulartics-google-tag-manager/dist/angulartics-google-tag-manager.min.js'
        ],
        dependentCSS: [
            libs+'font-awesome/css/font-awesome.min.css',
            libs+'angular-material/angular-material.min.css',
            libs+'bootstrap/dist/css/bootstrap.min.css',
            libs+'animate.css/animate.min.css'
        ],
        appCSS: [
            source+'styles.css'
        ],
        appJS: [
            app+'app.module.js',
            app+'app.config.js',
            app+'app.run.js',
            components+'**/*.js'
        ],
        appHTML: [
            components+'**/*.html'
        ],
        appIndex: [],
        appSCSS: [
            source+'*.scss',
            app+'*.scss',
            source+'app/components/**/*.scss'
        ],
        appJade: [
            '*.jade',
            source+'*.jade',
            app+'*.jade',
            source+'app/components/**/*.jade'
        ],
        appImages: [
        ]
    };
    return config;
};