const cheerio = require('cheerio');
const crawler = require('./crawler');

const parse = (decodedResult) => {
    const $ = cheerio.load(decodedResult);
    const restaurants = $('tr[class=lodd]');
    //const restaurants = $('span[class=ani]');
    //const restaurants = $('div[class=lazy]');
    //console.log(restaurants);
    for(let i = 0;i<restaurants.length;i++){
        //console.log($(restaurants[i]).text());
        //console.log(restaurants[i]['attribs']['data-src']);
        console.log($(restaurants[i]).find($('span[class=ani]')).text());
        console.log($(restaurants).find($('div[class=lazy]'))[i]['attribs']['data-src']);
    }
};

crawler.crawl(parse)({salt: '1'});