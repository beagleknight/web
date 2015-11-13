var sourceFolder = 'src',
    destFolder   = 'public';

module.exports = {
    folders: {
        source: sourceFolder,
        dest: destFolder
    },
    files: {
        templates: `${sourceFolder}/templates/**/*.html`
    },
    server: {
        root: destFolder,
        livereload: true
    }
};
