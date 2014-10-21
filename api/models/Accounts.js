/**
* Accounts.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function (mongoose){

	var Schema = mongoose.Schema;

	var AccountsSchema = new Schema({
		accountId 	: String,
		userId		: String,
		password    : String,
		gallery : [{
			id : String,
			createdOn : Date,
			updatedOn : Date,
			visibility : String,
			images : [{
				imageid : {    
					type: Schema.Types.ObjectId,
    				ref: 'Images'
				},
				savedOn : Date,
				favourite : Boolean,
			}]
		}]
	});

	return mongoose.model ('Accounts', AccountsSchema);
};

