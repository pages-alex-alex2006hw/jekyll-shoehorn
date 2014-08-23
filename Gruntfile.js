module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),


//		autoprefixer: {
//			global: {
//				src: "style/css/screen-unprefixed.css",
//				dest: "style/css/screen.css"
//			}
//		},

		shell: {
			jekyllServe: {
				command: "jekyll serve --baseurl="
			},
			jekyllBuild: {
				command: "jekyll build --config _config.yml"
			}
		},

		watch: {
			options: {
				livereload: true
			},
			site: {
				files: [
					"index.html",
					"_layouts/*.html",
					"_posts/*.html",
					"_posts/*.md",
					"_includes/*.html",
					"style/css/*.css"
				],
				tasks: ["shell:jekyllBuild"]
			},
			css: {
				files: ["_sass/*.scss"],
				tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
			},
			svg: {
				files: ["style/symbols/*.svg"],
				tasks: ["svgstore", "shell:jekyllBuild"]
			},
			src: {
				files: ['lib/*.js', 'style/**/*.scss', '!lib/dontwatch.js'],
				tasks: ['default']
			}
		},

		svgstore: {
			options: {
				prefix: "shape-",
				cleanup: false,
				svg: {
					style: "display: none;"
				}
			},
			default: {
				files: {
					"_includes/svg-defs.svg": ["style/symbols/*.svg"]
				}
			}

		}


	});


	require("load-grunt-tasks")(grunt);

	grunt.registerTask("serve",
		[
			"shell:jekyllServe"
		]
	);

	grunt.registerTask("default",
		[
//			"sass",
//			"autoprefixer",
			"svgstore",
			"shell:jekyllBuild",
			"watch"
		]
	);
};