var keystone = require('keystone'),
	async = require('async');

exports = module.exports = function(req, res) {

	var view = new keystone.View(req, res),
		locals = res.locals;

	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'home';

	locals.data = {
		pageSections: []
	};

	view.on('init', function(next) {

		var q = keystone.list('Section').model.find().sort('createdAt').where('state', 'published');

		q.exec(function(err, results) {
			locals.data.pageSections = results;
			next(err);
		});
	});

	// Render the view
	view.render('index');

};
