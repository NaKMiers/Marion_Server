function routes(app) {
   app.use('/', (req, res) => {
      res.send('This is home page')
   })
}

module.exports = routes
