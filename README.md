jekyll-shoehorn
===============

Basic shoehorn for a Jekyll based site with 6 basic Grunt tasks: 

1. [**Uglify**](https://github.com/gruntjs/grunt-contrib-uglify "Uglify") - For uglifying js files. Not currently in use in the shoehorn, but really useful in production.
2. [**Autoprefixer**](https://github.com/nDmitry/grunt-autoprefixer "Autoprefixer") - Taking our compilated scss files (css) and adds browser prefixes to where it's needed. 
3. [**Svgstore**](https://github.com/FWeinb/grunt-svgstore "Svgstore") - Taking all svg files in the svg directory and compiles them into one svg sprite. Each file gets its own symbol inside that svg tag with its respected ID for further reference in the project. 
4. [**Shell**](https://github.com/sindresorhus/grunt-shell "Shell") - Enabling you to run shell commands in Grunt. In this case all Jekyll tasks you would normally run from the command line, like start the server and compiling the project, is now being done in Grunt. 
5. [**Load Grunt tasks**](https://github.com/sindresorhus/load-grunt-tasks "Load Grunt Tasks") - So we don't have to list out all tasks
6. [**Contrib-watch**](https://github.com/gruntjs/grunt-contrib-watch "Contrib watch") - Watches all of our Grunt tasks and runs them on any change in the project

We write SCSS and use [Compass](http://compass-style.org/) for compiling and helpful mixins. There are two config files - one for production and one for development. Before compiling using one of these config files, be sure to [install Compass](http://compass-style.org/install/) and [Ceaser Easing](https://github.com/jhardy/compass-ceaser-easing "Ceaser Easing"). 


For posting and editing content we recommend using [prose.io](http://prose.io/ "Prose").



