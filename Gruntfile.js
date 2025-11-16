module.exports = function(grunt) {
  // Configurações
    grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    // Compilar LESS em dist/css/main.css
    less: {
        development: {
        options: {
        paths: ['less']
        },
        files: {
            'dist/css/main.css': 'less/main.less'
        }
        }
    },

    // Minificar JS: gera dist/js/app.min.js
    uglify: {
        options: {
        mangle: true,
        compress: true,
        sourceMap: true
        },
        build: {
        files: {
        'dist/js/app.min.js': ['js/app.js']
        }
        }
    }
    });

  // Carregar tasks
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

  // Tarefas padrão
    grunt.registerTask('default', ['less', 'uglify']);
  // Tarefas separadas se quiser:
    grunt.registerTask('build-css', ['less']);
    grunt.registerTask('build-js', ['uglify']);
};
