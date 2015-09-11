var db = require('./longman');

module.exports = function (req, res) {
  var cursor = parseInt(req.params.position);
  if (isNaN(cursor)) {
    res.send('Error');
  } else {
    cursor %= 1990; // limit to the size of the wordlist
    res.json({
      words: db.slice(cursor, cursor + 10)
    });
  }
};