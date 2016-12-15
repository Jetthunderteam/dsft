/*************************
 * Gulpfile
 **************************/
(function () {
    "use strict";

    /*************************
     * Modules
     **************************/
    var gulp = require('gulp'),
        angularConstant = require('gulp-ng-constant'),
        beautify = require('gulp-jsbeautifier'),
        browserSync = require('browser-sync'),
        bump = require('gulp-bump'),
        concat = require('gulp-concat'),
        config = loadGulpConfig(),
        del = require('del'),
        fileSync = require('fs'),
        inject = require('gulp-inject'),
        jade = require('gulp-jade'),
        karma = require('karma').Server,
        modernizr = require('gulp-modernizr'),
        removeCode = require('gulp-remove-code'),
        rename = require('gulp-rename'),
        runSequence = require('run-sequence'),
        sass = require('gulp-sass'),
        tidyCSS = require('gulp-clean-css'),
        tidyJS = require('gulp-uglify'),
        util = require('gulp-util'),
        version = require('gulp-rev');

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

    /*************************
     * Gulp Tasks
     **************************/
    gulp.task('build-project', buildProject);
    gulp.task('bundle-app-css', bundleAppCSS);
    gulp.task('bundle-app-html', bundleAppHTML);
    gulp.task('bundle-app-images', bundleAppImages);
    gulp.task('bundle-app-js', bundleAppJS);
    gulp.task('bundle-dependant-css', bundleDependantCSS);
    gulp.task('bundle-dependant-js', bundleDependantJS);
    gulp.task('bundle-index', bundleIndex);
    gulp.task('clean-project', cleanProject);
    gulp.task('compile-jade', compileJade);
    gulp.task('compile-scss', compileSCSS);
    gulp.task('generate-modernizr', generateModernizr);
    gulp.task('launch-dev', launchDev);
    gulp.task('run-unit-tests', runUnitTests);
    gulp.task('update-app-constants', updateAppConstants);
    gulp.task('update-app-version-patch', updateAppVersionPatch);
    gulp.task('update-app-version-minor', updateAppVersionMinor);
    gulp.task('update-app-version-major', updateAppVersionMajor);
    gulp.task('watch-jade', ['compile-jade'], reload);
    gulp.task('watch-scss', ['compile-scss'], reload(reload({stream: true})));

    /**
     * Builds a complete distribution package from the
     * current application build. The following task will:
     *      - Run the build sequence
     */
    function buildProject(callback) {
        runSequence(
            'generate-modernizr',
            'clean-project',
            ['compile-scss', 'compile-jade'],
            ['bundle-dependant-js', 'bundle-dependant-css', 'bundle-app-css', 'bundle-app-js'],
            'bundle-app-html',
            'bundle-index', callback);
    }

    /**
     * Bundles the application CSS into a
     * single file. The following task will:
     *      - Concatenate the application CSS files
     *      - Clean the application CSS files
     *      - Version the application CSS files
     */
    function bundleAppCSS() {
        util.log(util.colors.blue('Bundle application JS'));
        return gulp.src(config.appCSS)
            .pipe(concat('app.css'))
            .pipe(tidyCSS())
            .pipe(version())
            .pipe(gulp.dest(buildDir));
    }

    /**
     * Bundles the application HTML files into their
     * respective directories.
     */
    function bundleAppHTML() {
        util.log(util.colors.blue('Bundle application HTML'));
        return gulp.src(config.appHTML)
            .pipe(gulp.dest(buildDir+'/src/app/components'));
    }

    /**
     * Bundles the application images files into their
     * respective directories.
     */
    function bundleAppImages() {
        util.log(util.colors.blue('Bundle application Images'));
        return gulp.src(config.appImages)
            .pipe(gulp.dest(buildDir+'/src/assets/images'))
    }

    /**
     * Bundles the application JS into a
     * single file. The following task will:
     *      - Concatenate the application JS files
     *      - Clean the application JS files
     *      - Version the application JS files
     */
    function bundleAppJS() {
        util.log(util.colors.blue('Bundle application CSS'));
        return gulp.src(config.appJS)
            .pipe(concat('app.js'))
            .pipe(tidyJS())
            .pipe(version())
            .pipe(gulp.dest(buildDir));
    }

    /**
     * Bundles the external CSS dependencies into a
     * single modules file. The following task will:
     *      - Concatenate dependant CSS files
     *      - Version dependant CSS files
     */
    function bundleDependantCSS() {
        util.log(util.colors.blue('Bundle dependant CSS'));
        return gulp.src(config.dependentCSS)
            .pipe(concat('external-modules.css'))
            .pipe(version())
            .pipe(gulp.dest(buildDir));
    }

    /**
     * Bundles the external JS dependencies into a
     * single modules file. The following task will:
     *      - Concatenate dependant JS files
     *      - Version dependant JS files
     */
    function bundleDependantJS() {
        util.log(util.colors.blue('Bundle dependant JS'));
        return gulp.src(config.dependantJS)
            .pipe(concat('external-modules.js'))
            .pipe(version())
            .pipe(gulp.dest(buildDir));
    }

    /**
     * Bundles the index HTML file removing any
     * dev dependencies and injecting the production
     * dependencies. The following task will:
     *      - Remove development code
     *      - Inject production dependencies
     */
    function bundleIndex() {
        var injectSources = gulp.src([buildDir + '/external-modules' + '*' + '.js', buildDir + '/app' + '*' + '.js', buildDir + '/external-modules' + '*' + '.css', buildDir + '/app' + '*' + '.css'], {read: false});
        util.log(util.colors.blue('Bundle Index'));
        return gulp.src(config.appIndex)
            .pipe(removeCode({production: true}))
            .pipe(inject(injectSources, {ignorePath: 'dist/', addRootSlash: false, removeTags: true}))
            .pipe(gulp.dest(buildDir));
    }

    /**
     * Cleans the distribution directory of
     * all currently built files. The following task will:
     *      - Delete the dist folder
     */
    function cleanProject() {
        util.log(util.colors.blue('Cleaning build directory'));
        del([buildDir], {force: true});
    }

    /**
     * Compiles the Jade files to their respective
     * directories. The following task will:
     *      - Compile the applications Jade files
     */
    function compileJade() {
        util.log(util.colors.blue('Compiling Jade'));
        return gulp.src(config.appJade, {base: baseDir})
            .pipe(jade())
            .pipe(gulp.dest(baseDir));
    }

    /**
     * Compiles the SCSS files to their respective
     * directories. The following task will:
     *      - Compile the applications SCSS files
     */
    function compileSCSS() {
        util.log(util.colors.blue('Compiling SCSS'));
        return gulp.src(config.appSCSS, {base: baseDir})
            .pipe(sass())
            .pipe(gulp.dest(baseDir));
    }

    /**
     * Generates a Modernzir build for the project
     * using the currently used helpers.
     */
    function generateModernizr() {
        util.log(util.colors.blue('Generating Modernizr build'));
        return gulp.src(config.appJS)
            .pipe(modernizr())
            .pipe(gulp.dest(baseDir));
    }

    /**
     * Launches the dev environment using browser-sync.
     * The following task will:
     *      - Launch a dev server on port 7077
     *      - Watch for changes in the applications SCSS
     *      - Watch for changes in the applications Jade
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

    /**
     * Runs the unit test suite for the application
     */
    function runUnitTests() {
        util.log(util.colors.blue('Running unit tests'));
        new karma({
            configFile: __dirname+'/config/karma.config.js',
            singleRun: true
        }).start();
    }

    /**
     * Updates the application constants held within the
     * source directory with the current build version.
     * The following task will:
     *      - Generate a new set of app constants
     */
    function updateAppConstants() {
        var packageJSON = JSON.parse(fileSync.readFileSync(projectDir + 'package.json')),
            constants = {VERSION_NUMBER: packageJSON.version};
        util.log(util.colors.blue('Updating the application constants'));
        return angularConstant({
            constants: constants,
            stream: true,
            name: 'dsft',
            wrap: '(function () { <%= __ngModule %> })();'
        })
            .pipe(beautify({preserve_newlines: false}))
            .pipe(rename('app.constants.js'))
            .pipe(gulp.dest(appDir));
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
        return gulp.src([projectDir + 'package.json'])
            .pipe(bump({type: updateType}))
            .pipe(gulp.dest(projectDir))
            .on('end', updateAppConstants());
    }

})();
