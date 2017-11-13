# streamable-gallery-api

This is a basic API used by [streamable-gallery](https://github.com/pricheal/streamable-gallery) to set the correct cookies needed in the request to get all the clips and the clip data for the correct user (me). The streamable-gallery application can not set the cookies with its normal XMLHttpRequest that is done through the browser. So instead, it just makes a request to this API and then this API sets the correct cookies and then simply returns the response.

### Installing

To install, first make sure you have NodeJS and NPM installed. Then simply run `npm install` in the projects directory.

### Running

To run, just run app.js through Node with `node app.js`.

### Built with

* *Express* to accept the incoming request and send a response.
* *Axios* to forward the request to the correct location and add the cookies.