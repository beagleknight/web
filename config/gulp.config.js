var sourceFolder = 'src',
    destFolder   = 'public',
    modulesFolder = 'node_modules';

module.exports = {
    folders: {
        source: sourceFolder,
        dest: destFolder,
        modules: modulesFolder
    },
    files: {
        templates: `${sourceFolder}/templates/**/*.html`,
        styles: {
            libs: [
                `${sourceFolder}/styles/font-awesome.min.css`
            ],
            main: [
                `${sourceFolder}/styles/libs/**/*.scss`,
                `${sourceFolder}/styles/custom.scss`,
                `${sourceFolder}/styles/index.scss`
            ]
        },
        images: `${sourceFolder}/images/**/*.*`,
        scripts: {
            libs: [
                `${sourceFolder}/scripts/jquery.min.js`,
                `${sourceFolder}/scripts/jquery.scrollzer.min.js`,
                `${sourceFolder}/scripts/jquery.scrolly.min.js`,
                `${modulesFolder}/angular/angular.min.js`,
                `${modulesFolder}/angular-ui-router/release/angular-ui-router.min.js`,
                `${sourceFolder}/scripts/skel.min.js`,
                `${sourceFolder}/scripts/util.js`
            ],
            main: [
                `${sourceFolder}/scripts/index.js`,
                `${sourceFolder}/scripts/custom.js`
            ]
        },
        fonts: `${sourceFolder}/fonts/**.*`
    },
    styles: {
        mainFile: `${sourceFolder}/styles/index.scss`,
        destFolder: `${destFolder}/css`
    },
    images: {
        destFolder: `${destFolder}/images`
    },
    scripts: {
        destFolder: `${destFolder}/js`,
        libs: {
            outFile: `libs.js`
        },
        main: {
            outFile: `index.js`
        }
    },
    fonts: {
        destFolder: `${destFolder}/fonts`
    },
    server: {
        root: destFolder,
        livereload: true
    }
};
