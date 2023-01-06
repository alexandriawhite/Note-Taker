const router = require('express').Router()
const path = require('path');
let dbData = require('../db/db.json');
const fs = require('fs');
// import { isUuid } from 'uuidv4';

router.get('/notes', (req, res) => res.json(dbData));

router.post('/notes', (req, res) => {
dbData.push(req.body)
    fs.writeFile(dbData, JSON.stringify(dbData), function (err) {
        if (err) throw err;
        res.json(db);
    });
    
//bdData fs.writeFile stringify
// res.json the new note 
// add ids - wont be able to add or delete until you have ids 
});


// router.delete('notes/:id', function (req, res) {
//     var id= parseInt(req.params.id);
//     for (var i = 0; i < dbData.length; i++) {
// if (db[i].id === id) {
//     dbData.splice(i,1);
// }
// console.log(dbData);
// fs.writeFile(dbData, JSON.stringify(dbData), function (err) {
//     if (err) throw err;
//     res.json(dbData);
// })
//     }
// })

module.exports = router