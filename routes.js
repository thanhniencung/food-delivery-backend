const { addFood } = require('./food_model')
const { router, get } = require('microrouter')
  
const notfound = (req, res) => send(res, 404, 'Not found route')
 
exports.routes = router(
    get('/food/add', addFood), 
    get('/*', notfound)
);