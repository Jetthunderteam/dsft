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
            app+'app.component.module.js',
            app+'app.component.config.js',
            app+'app.component.run.js',
            components+'**/*.js'
        ],
        appSCSS: [
            source+'*.scss',
            app+'*.scss',
            source+'app/components/home/*.scss',
            source+'app/components/training/*.scss'
        ],
        appJade: [
            '*.jade',
            source+'*.jade',
            app+'*.jade',
            source+'app/components/home/*.jade',
            source+'app/components/training/*.jade'
        ],
        appImages: [
        ]
    };
    return config;
};