/**
 * This is an example of a basic node.js script that performs
 * the Implicit Grant oAuth2 flow to authenticate against
 * the Spotify Accounts.
 *
 * For more information, read
 * https://developer.spotify.com/documentation/web-api/tutorials/implicit-flow
 */

var express = require('express'); // Express web server framework
var app = express();
app.use(express.static(__dirname + '/public'));
app.listen(process.env.PORT || 8888);
