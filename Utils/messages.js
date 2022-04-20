const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment().hour(+0).format('HH:mm a') 
        
    }
}

module.exports = formatMessage;