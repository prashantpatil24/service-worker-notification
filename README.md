# service-worker-notification-using-node

# Install

Installation is simple, just install via npm.
``
   npm install web-push --save
 ``

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

# Debugging
You can debug the code using the browser's built in debugger (F12).

# Run
```
npm i

npm start
```

# Tests
```
  npm test
```

# Test coverage
 ```
  npm test --coverage --watchAll   
```

# All unit tests with coverage
```
    npm run test-all
```

# Git Setup
```
   git config --global user.email "test@test.com"
  git config --global user.name "Test test"
```

## Screen debug
```
    screen.debug(undefined,300000);
```
