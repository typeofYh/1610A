const path = require('path');
module.exports = function(filepath){
    return path.join(__dirname,'../',filepath)
}