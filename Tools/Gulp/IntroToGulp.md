## Gulp-Shulp 

So you're done writing your code but there's still a lot of ... let's say 'post-processing' to be done before you can publish it. You might, for example, want to :

* Minify your CSS/JS files.

* Turn your ES6 code to ES5.

* Remove ```console``` or ```debugger``` statements from your code.

* And a bunch of other, repetitive stuff that you have to do very often after you are done coding.

  ​

------

#### **Enter Gulp !** 

Gulp, basically, is  a task runner, that you can use to automate all of this. Those of you who are familiar with automation tools might say that Grunt is already available and can do the job,  but here's the difference, Grunt requires you to type large configurations for the tasks that you want to run, and it is sluggish when compared to Gulp. 


Gulp uses [**streams and piping**](https://github.com/substack/stream-handbook)   to make processing faster.  It's faster because it does not create any temp files like Grunt does. It just pipes the output of one task to another. Pretty neat.

------



#### Installing Gulp on your Machine

``````
$ npm install --global gulp-cli 
``````

This will install Gulp in your global `node_modules` folder. 

Now, switch to your project directory : 

``````
$ cd path/to/your/project_dir
``````

If you haven't initialised npm do this :

``````
$ npm init 
or
$ npm init -y
``````

Next, add Gulp to your devDependencies by installing it as shown :

``````
$ npm install --save-dev gulp
``````

> **Note :** I'll be using ES6 to write the gulpfile so go ahead and install babel-core as a devDependency and with `es2015` as a preset so that your gulpfile runs without any issues (babel will transpile your gulpfile from ES6 to ES5).

``````
$ npm install --save-dev babel-core babel-preset-es2015
``````

 Now, you need to create a file called  **`gulpfile.babel.js`** in the same directory.

``````
$ atom gulpfile.babel.js 
(or)
$ subl gulpfile.babel.js
(or)
$ emacs gulpfile.babel.js
``````



Once the file is open,  just add the following lines : 

```javascript
const gulp = require('gulp')

gulp.task('default', () => {
  /* code for your default task here */ 
})
```

So, now that you have your GulpFile, you can play with it and see what you can do. 

------

