const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment(self).tz('cairo/Egypt')
        
    }
}

module.exports = formatMessage;