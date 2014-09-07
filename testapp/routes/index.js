var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


router.get('/patu',function(req,res){

var keypress = require('keypress')
  , tty = require('tty');

// make `process.stdin` begin emitting "keypress" events



keypress(process.stdin);

// listen for the "keypress" event
process.stdin.on('keypress', function (ch, key) {
	
  console.log(key);
res.send(key);
  if (key && key.ctrl && key.name == 'c') {
    process.stdin.pause();
  }
});

if (typeof process.stdin.setRawMode == 'function') {
  process.stdin.setRawMode(true);
} else {
  tty.setRawMode(true);
}
process.stdin.resume();




});


module.exports = router;
