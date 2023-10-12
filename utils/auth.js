const withAuth = (req, res, next) => {
  // If the user is not signed in, redirect the request to the sign in route
  if (!req.session.signed_in) {
    res.redirect('/signin');
  } else {
    next();
  }
};

module.exports = withAuth;
