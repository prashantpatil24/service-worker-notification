# service-worker-notification

# Install

Installation is simple, just install via npm.

    npm install web-push --save
    

## First-time setup
Install and run the auth helper. It is enough to run this only once, in one of the project folders.
```
npm install -g vsts-npm-auth --registry https://registry.npmjs.com --always-auth false

vsts-npm-auth -config .npmrc

### Prepare your server for react development
In the IIS site; open web.config add the following lines at `system.webServer > httpProtocol > customHeaders`

```
    <add name="Access-Control-Allow-Origin" value="http://localhost:3300" />
    <add name="Access-Control-Allow-Headers" value="Content-Type" />
    <add name="Access-Control-Allow-Methods" value="GET,POST,PUT,DELETE,OPTIONS" />
    <add name="Access-Control-Allow-Credentials" value="true" />
```
The URL in `Access-Control-Allow-Origin` is for your react development server, *not* your IIS server. Update this if you don't use the default port.

## Build and run
The first time; and whenever you pull the latest code from git; run npm install from the project folder. If you are only working on views; the easiest way is to run:
```
npm i
```
npm start
```
To stop the dev server; hit Ctrl-C in the command line window. Run `npm start` again if you need to restart the server.

_Whenever npm packages are added or modified; you will need to restart the server and Visual Studio Code. Normal code changes do not require restarting._

The dev server runs at [http://localhost:3300](http://localhost:3300) by default.
If you need to change the port number; edit the file `.env.development.local`.
E.g. add the line:
```
PORT=3333
```

### Debugging
You can debug the code using the browser's built in debugger (F12).

# Tests
    npm test

## Test coverage
    npm test --coverage --watchAll   

This will watch your changes and re-run the affected tests as needed.

## All unit tests with coverage
    npm run test-all

## Debug unit test
To debug a test file follow below steps:

1. Open up Chrome and type in the address bar : chrome://inspect. Click on "Open dedicated DevTools for Node"
2. Go to the test file and add `debugger;` statement at desired line in test file for debugging:

    `npm run-script test-debug FileName`

## Lint checks
The project uses eslint for linting -- static code analysis to readability, maintainability, stylistic errors, and functionality error.
Before pushing your changes; check the warnings logged during build, and fix any new issues raised.

## Git Setup
  git config --global user.email "test@test.com"
  git config --global user.name "Test test"

## Screen debug
screen.debug(undefined,300000);




