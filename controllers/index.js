const router = require('express').Router();
const apiRoutes = require('./api/index');
//const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
//router.use('/api', apiRoutes);
// using seed files not api routes

module.exports = router;
