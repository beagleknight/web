var sourceFolder = 'src',
    destFolder   = 'public';

module.exports = {
    folders: {
        source: sourceFolder,
        dest: destFolder
    },
    files: {
        templates: `${sourceFolder}/templates/**/*.html`,
        styles: {
            libs: [
                `${sourceFolder}/styles/font-awesome.min.css`
            ],
            main: `${sourceFolder}/styles/index.scss`
        },
        images: `${sourceFolder}/images/**.*`,
        scripts: {
            libs: [
                `${sourceFolder}/scripts/jquery.min.js`,
                `${sourceFolder}/scripts/jquery.scrollzer.min.js`,
                `${sourceFolder}/scripts/jquery.scrolly.min.js`,
                `${sourceFolder}/scripts/skel.min.js`,
                `${sourceFolder}/scripts/util.js`
            ],
            main: [
                `${sourceFolder}/scripts/index.js`
            ]
        },
        fonts: `${sourceFolder}/fonts/**.*`
    },
    styles: {
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
