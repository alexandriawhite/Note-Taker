const router = require('express').Router()
const path = require('path');
let dbData = require('../db/db.json');
const fs = require('fs');
// import { isUuid } from 'uuidv4';

router.get('/notes', (req, res) => res.json(dbData));

router.post('/notes', (req, res) => {
let dbData = fs.readFile(req.body)
//bdData fs.writeFile stringify
// res.json the new note 
// add ids - wont be able to add or delete until you have ids 
});



module.exports = router