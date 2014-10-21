/**
 * AccountServices
 * Vivek D K
 * 
 * 21st October
 *
  */


module.exports = {

    getAccount: function(accountId, callback) {

        var promise = Accounts.findOne({accountId : accountId})
        .populate ({
            path : 'gallery.images.imageid'
        })
        .exec();
        promise
            .then (
                /* Success */
                function(accountGallery){
                    callback (accountGallery);
                },
                /* failure */
                function(err){                  
                    callback (err);
                }   
            )
            .end(); 

    }
};