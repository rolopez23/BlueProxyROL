
require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);

uglify: {
  build: {
      files: {
          './client/src/components/Bluefin-Mortgage-Service/public/dist/bundle.js': ['assets/js/base.js']
      }
  }
}

watch: {
  js: {
      files: ['./client/src/components/Bluefin-Mortgage-Service/public/dist/bundle.js'],
      tasks: ['uglify']
  }
}


module.exports = function (grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('default', []);

};

