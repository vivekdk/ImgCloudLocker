/**
 * Bootstrap
 * (sails.config.bootstrap)
 *
 * An asynchronous bootstrap function that runs before your Sails app gets lifted.
 * This gives you an opportunity to set up your data model, run jobs, or perform some special logic.
 *
 * For more information on bootstrapping your app, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.bootstrap.html
 */

var mongoose = require ('mongoose');

var imagesModel = require('../api/models/Images.js');
var accountsModel = require('../api/models/Accounts.js');

module.exports.bootstrap = function(cb) {

	/**
	 * We load mongoose
	 */
	 
	mongoose.connect('mongodb://localhost/crudlocker');
	 
	/**
	 * We check if the connection is ok
	 * If so we will continue to load everything ...
	 */
	var db = mongoose.connection;
	 	 
	db.on('error', console.error.bind(console, 'Mongoose connection error:'));
	db.once('open', function callback() {	 
	    console.log('Connected to MongoDB !');

	    Images   = imagesModel (mongoose);
	    Accounts = accountsModel (mongoose);	    

	    cb();	 
	});	  
};
