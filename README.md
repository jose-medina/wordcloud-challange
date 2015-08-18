## Description: ##

_**Wordcloud Challange** project is a word cloud that displays the topics in the topics.json file._

_It is built with Ampersand.js (Backbone based framework) and Browserify (Commonjs). All of this runs on top of Grunt, the javascript task runner, which allows to compile the js modules, sass stylesheets as well as to generate the markup via Assemble._

_These are the main properties and features of this webapp:_
* 1 to n topics are displayed in the word cloud
* Each topic has one of 6 different text sizes, with the most popular topics largest, and least popular smallest
* Green topics are the ones with a sentiment score > 60
* Red topics are the ones with a sentiment score < 40
* The rest of the topics are displayed in grey
* When a topic is clicked, metadata about the topic is displayed (total volume, and how that breaks down into positive, neutral and negative sentiment)
* Router history will record all changes on the app. Back/forward buttons can be used dynamically

## Project Setup

1. First you need to clone the project and make sure that your Node.js version is >= 0.8.0 and npm.
2. Go to your project folder and run `npm install`
3. Run `grunt` in order to build the app
4. `_dist` folder will be generated. You can use your localhost to serve the webapp

## Development

_Worldcloud project has 4 main grunt tasks:_

#### css

_The **`css`** task runs `sass` in order to compile the scss stylesheets and it also contains the `cssmin` task that minify the compiled css and creates the source map, so that it can be debugged on the browser._

#### js

_The **`js`** task runs first of all `handlebars` in order to compile the hbs templates corresponding to the Ampersand Views. Afterwards the `browserify` task will build the app.js depending on the require's of all js files and the it will run the `uglify` so that the app.js is minified and the source map is created._

#### build
		
_The **`build`** task constructs the essencial app files and copies them to the _dist folder. First runs `clean`. So will be removed the _dist folder. Then is the turn of `assemble` so that the index.html is constructed and copied to the _dist folder. After this task the previously defined tasks `css` and `js` will be executed._

#### dev

_The **`dev`**  task runs first the `build` and then the `watch` task that compiles the code if there is a change in a file._

_Hint: *The default task is `build`. That means if we run only `grunt` on the terminal, `build` will be executed*_

## Production

_The `css` and `js` tasks provide us with the main js and css source maps. That means, we are getting minified files that can be turn into their unbuilt versions._

## Testing

_In order to test this project, you have to install first a couple of modules:_

```shell
$ npm install -g tape
$ npm install -g browserify
$ npm install -g testling
```

_Hint: *You may need `sudo ..` in order to install those modules globally*_

### Unit Tests

_The test files are located in /src/tests/_

_To run the test we have to do that:_

```shell
$ browserify src/tests/{fileName} | testling
```

_or test everything_

```shell
browserify src/tests/*.test.js | testling
```

_Hint: *You may need to install the Xvfb library*_
```shell 
$ apt-get install xvfb
``` 
_*or use the `-u` property of testling `browserify {filePath} | testling -u`. I personally suggest to install Xvfb.*_
