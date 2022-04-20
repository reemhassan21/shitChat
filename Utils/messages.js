const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment(LT)
        
    }
}

module.exports = formatMessage;