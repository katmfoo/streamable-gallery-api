const express = require('express');
const cors = require('cors');
const axios = require('axios');

const url = 'https://ajax.streamable.com/videos'; // base url

const header = {
  cookie: 'user_name=patrickricheal@gmail.com; user_code=eyJhbGciOiJIUzI1NiIsImV4cCI6MTU0MjA3MjM4MCwiaWF0IjoxNTEwNTM2MzgwfQ.eyJ1c2VyX25hbWUiOiJwYXRyaWNrcmljaGVhbEBnbWFpbC5jb20ifQ.08fu01EzozfLl1E9ENk80Bi-XS_iabQ72tcRxZ_i0vk;'
};

const app = express();
app.use(cors());

/*
 * Possible query parameters
 *   1. sort, possible values are date_added, plays, title
 *   2. sortd, possible values are ASC, DESC
 *   3. count
 *   4. page
 */
app.get('/', (req, res) => {
  axios.get(url, {headers: header, params: req.query})
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.send(error);
  });

});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});