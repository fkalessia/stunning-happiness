const app = require('express')()
const http = require('http').createServer(app)
const cors = require('cors')

const indexController = require('./controllers/earthquakeController')

app.use(cors())
app.get('/', indexController.index)

http.listen(process.env.PORT || 3000, function () {
  console.log('server listen on port : 8000')
})
