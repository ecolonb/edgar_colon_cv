require('./config/config');
const express = require('express');
const app = new express();
const { Routes: routes } = require('./routes/web');
const port = process.env.PORT;

app.use(express.static('public'));
app.use('/', routes);
app.listen(port, () => {
  console.log('Server on: http://localhost:' + port);
});
