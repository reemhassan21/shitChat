const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment().hour(2).format('hh:mm a') 
        
    }
}

module.exports = formatMessage;