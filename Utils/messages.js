const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment().hours(+2).format('HH:mm a') 
        
    }
}

module.exports = formatMessage;