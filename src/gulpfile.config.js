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
        ],
        appSCSS: [
            source+'*.scss'
        ],
        appJade: [
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