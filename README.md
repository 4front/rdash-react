# rdash-react

![http://www.4front.io](https://s3-us-west-2.amazonaws.com/4front-media/4front-logo.png)

[React](https://facebook.github.io/react/) implementation of the [rdash-ui](https://github.com/rdash/rdash-ui) admin dashboard CSS kit with additional capabilities such as LDAP single sign-on powered by [4front](http://4front.io) plugins.

* Routing and auth flow using the excellent [React Router](http://rackt.github.io/react-router/) modeled after the [auth-flow sample](https://github.com/rackt/react-router/tree/0.13.x/examples/auth-flow)
* Single sign-on using the [ldap-auth plugin](http://4front.io/docs/plugins/ldap-auth)
* [gulp](http://gulpjs.com) powered build flow
* ES6 transpiling and JSX transformations using [Babel](https://babeljs.io/)
* Module bundling with [Browserify](http://browserify.org/)
* [Sass](http://sass-lang.com/) compilation
* [Auto-Reload](http://4front.io/docs/guides/autoreload.html)
* Release build that has been minified with [UglifyJS](http://lisperator.net/uglifyjs/)

## Usage

Create a new 4front application from this repo:

~~~sh
4front create-app --template-url https://github.com/4front/rdash-react/archive/master.zip
~~~

Start the development sandbox server. This will automatically kick of the `gulp watch` task and open a browser window to your personal sandbox URL.

~~~sh
4front dev
~~~

## License
Licensed under the Apache License, Version 2.0. See (http://www.apache.org/licenses/LICENSE-2.0).
