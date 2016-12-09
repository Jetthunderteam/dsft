/*************************
 * Gulpfile
 **************************/
(function () {
    "use strict";

    /*************************
     * Modules
     **************************/
    var gulp = require('gulp'),
        browserSync = require('browser-sync'),
        bump = require('gulp-bump'),
        clean = require('gulp-clean'),
        config = loadGulpConfig(),
        constant = require('gulp-ng-constant'),
        jade = require('gulp-jade'),
        modernizr = require('gulp-modernizr'),
        sass = require('gulp-sass'),
        util = require('gulp-util');

    /**
     * Loads the Gulpfile configuration
     */
    function loadGulpConfig() {
        return require('./config/gulpfile.config.js')();
    }

    /*************************
     * Shared Variables
     **************************/
    var appDir = './src/app',
        baseDir = './src',
        buildDir = './dist',
        projectDir = './',
        reload = browserSync.reload;
    var YOUR_LOCALS = {};

    /*************************
     * Gulp Tasks
     **************************/
    gulp.task('build-project', buildProject);
    gulp.task('clean-project', cleanProject);
    gulp.task('compile-scss', compileSCSS);
    gulp.task('compile-jade', compileJade);
    gulp.task('launch-dev', launchDev);
    gulp.task('run-unit-tests', runUnitTests);
    gulp.task('update-app-constants', updateAppConstants);
    gulp.task('update-app-version-patch', updateAppVersionPatch);
    gulp.task('update-app-version-minor', updateAppVersionMinor);
    gulp.task('update-app-version-major', updateAppVersionMajor);
    gulp.task('watch-jade', ['compile-jade'], reload);
    gulp.task('watch-scss', ['compile-scss'], reload(reload({stream: true})));

    function buildProject() {

    }

    function cleanProject() {

    }

    /**
     * Compiles the SCSS files to their respective
     * directories
     */
    function compileSCSS() {
        util.log(util.colors.blue('Compiling SCSS'));
        return gulp.src(config.appSCSS, {base: baseDir})
            .pipe(sass())
            .pipe(gulp.dest(baseDir));
    }

    /**
     * Compiles the Jade files to their respective
     * directories
     */
    function compileJade() {
        util.log(util.colors.blue('Compiling Jade'));
        return gulp.src(config.appJade, {base: baseDir})
            .pipe(jade())
            .pipe(gulp.dest(baseDir));
    }

    /**
     * Launches the dev environment using browser-sync
     */
    function launchDev() {
        util.log(util.colors.blue('Launching dev environment'));
        browserSync({
            ui: {
                port: 7078
            },
            server: {
                baseDir: projectDir
            },
            port: 7077
        });
        gulp.watch(config.appJade, ['watch-jade']);
        gulp.watch(config.appSCSS, ['watch-scss']);
    }

    function runUnitTests() {

    }

    function updateAppConstants() {
        util.log(util.colors.blue('Updating the application constants'));
    }

    /**
     * Updates the application version number
     * for a patch change (e.g. makes v0.1.0 → v0.1.1)
     */
    function updateAppVersionPatch() {
        return updateVersionNumber('patch');
    }

    /**
     * Updates the application version number
     * for a minor change (e.g. makes v0.1.1 → v0.2.0)
     */
    function updateAppVersionMinor() {
        return updateVersionNumber('minor');
    }

    /**
     * Updates the application version number
     * for a major change (e.g. makes v0.2.1 → v1.0.0)
     */
    function updateAppVersionMajor() {
        return updateVersionNumber('major');
    }

    /*************************
     * Shared Functions
     **************************/

    /**
     * Updates the version number in the package JSON file
     * to the correct update type
     * @param {string} updateType - The type of update required
     */
    function updateVersionNumber(updateType) {
        util.log(util.colors.blue('Versioning with a ' + updateType + ' update'));
        return gulp.src([projectDir+'package.json'])
            .pipe(bump({type: updateType}))
            .pipe(gulp.dest(projectDir));
    }

})();