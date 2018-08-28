const express = require('express')
const sslRedirect = require('heroku-ssl-redirect')

const app = express()
app.use(sslRedirect())

app.use('/', express.static('public'))

const server = app.listen(process.env.PORT, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Now serving at http://%s:%s', host, port)
});
