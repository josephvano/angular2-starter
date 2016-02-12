# angular2-starter

This is just a simple repository to show how to get started with angular2 + expressjs using gulp + webpack

The angular2 client side application is built using TypeScript

## Install

Run the following to install packages and package the bundled files

```
  > npm install
  > npm run start
```


### Change IP or PORT of express application

You can pass an IP or PORT optionally to the command line. By default it is running off port 3009

```
  > PORT=3001 npm run start
```

## Development

To run the bundler in watch mode, run the following command

```
  > npm run pack
```

This places the webpack in watch mode

### Typings

Have to install typings globally and install type references for TypeScript not to complain about 3rd party libs

```
  npm install --global typings
  typings install node --save --ambient
```
