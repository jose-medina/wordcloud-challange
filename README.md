# _Project_

_Description:_

## Project Setup

## Testing

_In order to test this project, you have to install first a couple of modules:_

1. `npm install -g tape`
2. `npm install -g browserify`
3. `npm install -g testling`

_Hint: *You may need `sudo ..` in order to install those modules globaly*_

### Unit Tests

_The test files are located in /src/tests/_

_To run the test we have to do that:_

`browserify src/tests/{name of the test file} | testling`

_or test everything_

`browserify src/tests/*.test.js | testling`

_Hint: *You may need `-u` property of testling if you don't have installed the Xvfb (`apt-get install xvfb`).*_

## Deploying

## Troubleshooting & Useful Tools

## License
