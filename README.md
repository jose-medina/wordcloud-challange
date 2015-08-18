# Wordcload Challange

## Description: ##

_This Ampersand project is a word cloud that displays the topics in the topics.json file._

_Those are the main properties and features of this webapp:_
* 1 to n topics are displayed in the word cloud
* Each topic has one of 6 different text sizes, with the most popular topics largest, and least popular smallest
* Green topics are the ones with a sentiment score > 60
* Red topics are the ones with a sentiment score < 40
* The rest of the topics are displayed in grey
* When a topic is clicked, metadata about the topic is displayed (total volume, and how that breaks down into positive, neutral and negative sentiment)
 
_**Wordcloud Challange** has been built with Ampersand.js (Backbone based framework) and Browserify (Commonjs). All of this run on top of Grunt, the javascript task runner, which allows us to compile the js modules, sass stylesheets as well as to generate the markup via Assemble._

## Project Setup

1. First you need to clone the project and make sure that your Node.js version is >= 0.8.0 and npm.
2. Go to your project folder and run `npm install`
3. Run `grunt` in order to build the app
4. `_dist` folder will be generated. You can use your localhost to serve the webapp

## Testing

_In order to test this project, you have to install first a couple of modules:_

```shell
$ npm install -g tape
$ npm install -g browserify
$ npm install -g testling
```

_Hint: *You may need `sudo ..` in order to install those modules globaly*_

### Unit Tests

_The test files are located in /src/tests/_

_To run the test we have to do that:_

`browserify src/tests/{fileName} | testling`

_or test everything_

`browserify src/tests/*.test.js | testling`

_Hint: *You may need to install the Xvfb library `apt-get install xvfb` or use the `-u` property of testling `browserify {filePath} | testling -u`. I personally suggest to install Xvfb.*_

## Deploying

## Troubleshooting & Useful Tools

## License
