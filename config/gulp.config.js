var sourceFolder = 'src',
    destFolder   = 'public',
    modulesFolder = 'node_modules',
    configFolder = 'config';

module.exports = {
    folders: {
        source: sourceFolder,
        dest: destFolder,
        modules: modulesFolder
    },
    files: {
        templates: `${sourceFolder}/templates/*.jade`,
        styles: {
            libs: [
                `${sourceFolder}/styles/font-awesome.min.css`,
                `${modulesFolder}/magnific-popup/dist/magnific-popup.css`
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
                `${modulesFolder}/magnific-popup/dist/jquery.magnific-popup.min.js`,
                `${sourceFolder}/scripts/util.js`
            ],
            main: [
                `${sourceFolder}/scripts/index.js`,
                `${sourceFolder}/scripts/custom.js`
            ]
        },
        fonts: `${sourceFolder}/fonts/**.*`,
        cname: `${configFolder}/CNAME`,
        favicon: `${configFolder}/favicon.ico`
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
