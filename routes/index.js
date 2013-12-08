
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'uBus', byline: 'Your Campus Transit - Simplified.' });
};