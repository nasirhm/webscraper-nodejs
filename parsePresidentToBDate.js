const rp = require('request-promise');
const cheer = require('cheerio');

const parserUrl = function(url){
return rp(url)
    .then(function(data){
        return {
        name : cheer('.firstheading',data).text(),
        Birthday : cheer('.bday',data).text(),
    };
    })
    .catch(function(err){
        console.log(err);
    })
}

module.exports = parserUrl;