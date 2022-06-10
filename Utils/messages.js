const moment = require('moment'); 
function formatMessage(username, text){

    return {
        username,
        text,
        time:" " + moment().hours()+2 +":" + moment().minutes() 
        
    }
}

module.exports = formatMessage;