//.Router is a method within the express package
const router = require('express').Router()
const path = require('path');



router.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/notes.html'));
}
);

// catch all - any route that doesnt match the top two will default to this
router.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

module.exports = router
