// KEYS.JS

if(process.env.NODE_ENV === 'production') {
    // we are in production - return production keys
    module.exports = require('./prod');
} else {
    //we are in developement - return the dev keys
    // return dev.js
    module.exports = require('./dev');
}

/*
clientID
240907648720-9oo3por3ttq3dj9s21fvtbseebdn40s2.apps.googleusercontent.com
ClientSecret
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


mongodb+srv://Kenguru:<password>@emailer-prod.12zsr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
*/