const router = require('express').Router()
const path = require('path');
let dbData = require('../db/db.json');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');

router.get('/notes', (req, res) => {
    fs.readFile('db/db.json','utf8', (err, data) => {
        let parseData = JSON.parse(data)
    res.json(parseData)
    });
});

router.post('/notes', (req, res) => {
    let id = uuidv4();
    let entry = {
        title: req.body.title,
        text: req.body.text,
        id: uuidv4()
    }
    dbData.push(entry)
    fs.writeFile('./db/db.json', JSON.stringify(dbData), function (err) {
        if (err) throw err;
        res.json(dbData);
    });

    //bdData fs.writeFile stringify
    // res.json the new note 
    // add ids - wont be able to add or delete until you have ids 
});


router.delete('/notes/:id', function (req, res) {
    var id = req.params.id;
    console.log(id, "id")
    // for (var i = 0; i < dbData.length; i++) {
    //     if (dbData[i].id === id) {
    //         dbData.splice(i, 1);
    // }}
    // let newDb = await dbData.forEach((data, index) =>{
    //     if (data.id  === id) {
    //         dbData.splice(index, 1);
    //     }
    // })
    fs.readFile('db/db.json','utf8', (err, data) =>{
        if (err) {throw err};
        // console.log(dbData);
        let parseData = JSON.parse(data)
        const filterData = parseData.filter(entry => entry.id !== id)
            // console.log(id,"id inside filterData")
            // entry.id !== id
            // console.log(entry.id)
            // console.log(id)
              fs.writeFile('db/db.json', JSON.stringify(filterData), function (err) {
            if (err) console.log(err);
            else {
                console.log("Note deleted!");
                res.json(filterData);
            }
        })
        })
      
    })

module.exports = router