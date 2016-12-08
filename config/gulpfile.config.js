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
        ],
        dependentCSS: [
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
            source+'app/components/core/*.scss',
            source+'app/components/home/*.scss',
            source+'app/components/training/*.scss',
            source+'app/components/experience/*.scss',
            source+'app/components/fleet/*.scss',
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