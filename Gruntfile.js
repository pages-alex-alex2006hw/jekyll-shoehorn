module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sass: {
			global: {
				options: {
					style: "compressed"
				},
				files: {
					"css/global-unprefixed.css": "_sass/global.scss"
				}
			}
		},

		autoprefixer: {
			global: {
				src: "css/global-unprefixed.css",
				dest: "css/global.css"
			}
		},

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
					"_includes/*.html"
				],
				tasks: ["shell:jekyllBuild"]
			},
			css: {
				files: ["_sass/*.scss"],
				tasks: ["sass", "autoprefixer", "shell:jekyllBuild"]
			},
			svg: {
				files: ["svg/*.svg"],
				tasks: ["svgstore", "shell:jekyllBuild"]
			},
			src: {
				files: ['lib/*.js', 'css/**/*.scss', '!lib/dontwatch.js'],
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
					"_includes/svg-defs.svg": ["svg/*.svg"]
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
			"sass",
			"autoprefixer",
			"svgstore",
			"shell:jekyllBuild",
			"watch"
		]
	);
};