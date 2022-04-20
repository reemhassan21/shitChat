const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment.defaultFormatUtc()

    }
}

module.exports = formatMessage;