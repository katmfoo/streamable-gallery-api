# streamable-gallery-api

This is a basic API used by [streamable-gallery](https://github.com/pricheal/streamable-gallery) to set the correct cookies needed in the request to get all the clips and the clip data for the correct user (me). The streamable-gallery application can not set the cookies with its normal XMLHttpRequest that is done through the browser. So instead, it just makes a request to this API and then this API sets the correct cookies and then simply returns the response.

### Live demo

This API is being run live right now at http://ec2-34-203-215-132.compute-1.amazonaws.com/ for use by the [streamable-gallery](https://github.com/pricheal/streamable-gallery) application hosted at http://patricheal.com/clips/

### How to use

```bash
# Clone this repository
$ git clone https://github.com/pricheal/streamable-gallery-api.git

# Go into the repository
$ cd streamable-gallery-api

# Install dependencies
$ npm install

# Run the server
$ node app.js
```

### Built with

* **Express** to accept the incoming request and send a response.
* **Axios** to forward the request to the correct location and add the cookies.
