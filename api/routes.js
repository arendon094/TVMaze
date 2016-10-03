var config = require('../config.json');
var superagent = require('superagent');

module.exports = function(app){
	app.get('/api', function(req, res) {
		superagent
			.get(config.tvmaze.url + '/search/shows')
			.query({ q: req.query.name})
			.end(function (err, result) {
					res.json(result.body);
			});
	});
	app.get('/api/showinfo/:id', function(req, res) {
		superagent
			.get(config.tvmaze.url + '/shows/' + req.params.id)
			.query({ embed: 'cast'})
			.end(function (err, result) {
				res.json(result.body);
			});
	});
};
