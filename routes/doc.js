const express = require('express');
const router = express.Router();
const markdownToPdf = require('md-to-pdf');
const markdownpdf = require("markdown-pdf");
fs = require('fs');


const dir = "files/"


/* GET Doc . */
router.get('/', function (req, res, next) {
    res.download(dir + 'doc.pdf');
    // res.send('respond with a resource');
});

/* GET users listing. */
router.post('/', function (req, res, next) {

    // console.log('doc > doc.md : ', req);
    // console.log('doc > doc.md body : ', req.body.doc);
    // console.log('doc > doc.md parse body : ', JSON.toString(req.body.doc));
    fs.writeFile(dir + 'doc.md', req.body.doc, function (err) {
        if (err) return console.log(err);
        console.log('doc > doc.md');

        fs.createReadStream(dir + 'doc.md')
            .pipe(markdownpdf())
            .pipe(fs.createWriteStream(dir + 'doc.pdf'))
        ;
    });
    res.send("fs");
});

module.exports = router;
