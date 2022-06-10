const moment = require('moment'); 
function formatMessage(username, text){
 var today = new Date();
    return {
        username,
        text,
        time: today.getHours()
        
    }
}

module.exports = formatMessage;