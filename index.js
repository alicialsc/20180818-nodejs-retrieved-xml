var request = require('request');
const cheerio = require('cheerio');
const fs = require('fs');


request('https://feeds.talent.com/feeds/download.php?partner=hirednow&country=my', function (error, response, html) {
    // request('https://www.w3schools.com/xml/note.xml', function (error, response, html) {
    if (!error && response.statusCode == 200) {
        // Do something you need
        var $ = cheerio.load(html, {
            xmlMode: true
        });
        // const xx = $('job');  // Just an example
        // console.log('job', job)



        // fs.writeFile("mydata.xml", html, function (err) {
        //     if (err) {
        //         return console.log(err);
        //     }
        //     console.log("The file was saved!");
        // });

        // Or
        fs.writeFileSync('mydata.xml', html);

        console.log('done saved !')

    }
});