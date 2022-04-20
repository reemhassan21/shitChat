const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:moment.add(2, 'hours').format('HH:mm a') 
        
    }
}

module.exports = formatMessage;