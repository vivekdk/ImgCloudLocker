/**
* Images.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = function (mongoose){

	var Schema = mongoose.Schema;

	var ImagesSchema = new Schema({
		sourcelinkUrl : String,
		md5hash : String,
		name : String,
		tags : [String],
		s3Link : String,
		visibility : String,
		likes : Number
	});

	return mongoose.model ('Images', ImagesSchema);
};
