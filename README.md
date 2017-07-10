# Material-UI Example Project
This is an example project that uses Material-UI pre-release with Webpack as bundler.

## Tools
* [Yarn](https://github.com/yarnpkg/yarn) as package manager
* [Webpack](https://github.com/webpack/webpack) 3.1 (with configuration files)
* [webpack-dev-server](https://github.com/webpack/webpack-dev-server) (configured for development)
* [React](https://github.com/facebook/react) and [Material-UI](https://github.com/callemall/material-ui) (pre-release)
* [ESLint](https://github.com/eslint/eslint)

## Installation

After cloning the repository, install dependencies:
```sh
cd <project folder>
yarn install
```

Now you can run your local server:
```sh
yarn run start
```
Server is located at http://localhost:3000

Note: To allow external viewing of the demo, change the following value in `webpack-dev-server.config.js`

```
host: 'localhost'  //Change to '0.0.0.0' for external facing server
```

You may also need to uncomment this line (**Dangerous**):

```
// disableHostCheck: true, // uncomment if you use '0.0.0.0' as host
```

## Description of [Webpack](http://webpack.github.io/docs/)

Webpack is a module bundler that we are using to run our documentation site.
This is a quick overview of how the configuration file works.

### Webpack Configuration:

#### Entry

Webpack creates entry points for the application to know where it starts.

#### Output

This is where the bundled project will go to and any other files necessary for it to run.

#### Plugins

These are plugins Webpack uses for more functionality.
The HTML Webpack Plugin, for example, will add the index.html to your build folder.

#### Modules

Modules and other things that are required will usually need to be loaded and interpreted by Webpack when bundling, and this is where Webpack looks for the different loaders.
*Loading .js files in es6 and es7 will require a loader like babel-loader to interpret the files into es5.
