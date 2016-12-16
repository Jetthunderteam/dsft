/*************************
 * Gulpfile Configuration
 **************************/
module.exports = function() {
    var libs = 'node_modules/',
        source = 'src/',
        app = source+'app/',
        assets = source+'assets/',
        components = app+'components/',
        data = source+'data/';

    var config = {
        appCSS: [
            source+'styles.css'
        ],
        appData: [
            data+'*.json'
        ],
        appHTML: [
            components+'**/*.html'
        ],
        appImages: [
            assets+'images/*.{gif,jpg,png,svg,ico}',
            assets+'images/**/*.{gif,jpg,png,svg,ico}'
        ],
        appIndex: [
            'index.html'
        ],
        appJade: [
            '*.jade',
            source+'*.jade',
            app+'*.jade',
            source+'app/components/**/*.jade'
        ],
        appJS: [
            app+'app.module.js',
            app+'app.config.js',
            app+'app.run.js',
            components+'**/*.js'
        ],
        appSCSS: [
            source+'*.scss',
            app+'*.scss',
            source+'app/components/**/*.scss'
        ],
        dependentCSS: [
            libs+'angular-material/angular-material.min.css',
            libs+'bootstrap/dist/css/bootstrap.min.css',
            libs+'animate.css/animate.min.css',
            libs+'leaflet/dist/leaflet.css'
        ],
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
            libs+'rx/dist/rx.all.min.js',
            libs+'rx-angular/dist/rx.angular.min.js',
            libs+'angular-bootstrap/ui-bootstrap-tpls.min.js',
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
            libs+'angulartics-google-tag-manager/dist/angulartics-google-tag-manager.min.js'
        ]
    };
    return config;
};
