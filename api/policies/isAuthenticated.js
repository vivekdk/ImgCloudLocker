module.exports = function isAuthenticated (req, res, next) {

  // Check if the session http-only cookie is still active

  /*
    this piece of logic is standard and has not been implemented here
    However this would be the logic - Cookie Session store can be either be Redis/MongoDB 

    In this case we will assume an implicit authentication
  */

  req.session.isLoggedIn = true;
  next();
};