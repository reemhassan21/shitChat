const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:" " + moment().hours() +":" + moment().minutes()
        
    }
}

module.exports = formatMessage;