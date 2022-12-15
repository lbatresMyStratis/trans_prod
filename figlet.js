
var figlet = require('figlet');


module.exports = {

    getDoodle: function (){
        console.log(figlet.textSync('My Stratis', {
            font: 'Standard',
            horizontalLayout: 'default',
            verticalLayout: 'default',
            width: 100,
            whitespaceBreak: true
        }));
    }


}