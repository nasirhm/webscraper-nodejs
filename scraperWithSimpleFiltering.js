const rp = require('request-promise');
const url = 'https://en.wikipedia.org/wiki/List_of_Presidents_of_Pakistan';

rp(url)
    .then(function(data){
        console.log(data);
    })
    .catch(function(err){
        console.log(err);
    })