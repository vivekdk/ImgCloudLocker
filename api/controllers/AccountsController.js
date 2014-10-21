/**
 * AccountsController
 * Vivek D K
 * 
 * 21st October
 *
 * @description :: Server-side logic for managing Accounts
 */

module.exports = {

	/*
		Get all images from a particular gallery id
		In case user is authenticated, get private images as well
	*/
	retrieveGallery : function (req, res){

		var relPopulate = {};
		relPopulate['path'] = 'gallery.images.imageid';

		// check if user is logged in
		if (!req.session.isLoggedIn)
			relPopulate['match'] = {'visibility' : 'public'};

		var promise = Accounts.find({'gallery.id' : req.params.galleryid}, {gallery : 1})
		.populate (relPopulate)
		.exec();
		promise
			.then (
				/* Success */
				function(accountGallery){
					res.send (accountGallery);
				},
				/* failure */
				function(err){					
					res.serverError (err);
				}	
			)
			.end();	
	},

	/*
		Get all the galleries for a particular account
	*/
	retrieveAccount : function (req, res){
		AccountService.getAccount (req.params.accountid, function(accountInfo){
			res.json (accountInfo);
		},
		function (err){
			res.serverError (err);
		})
	},

	index : function (req, res){
		AccountService.getAccount (req.params.accountid, function(accountInfo){
			res.view ('account', {account : accountInfo});
		},
		function (err){
			res.serverError (err);
		})
	}	
};

