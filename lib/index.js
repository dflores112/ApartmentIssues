const express = require('express');

const app = express();
app.use(express.json());
const port = 3000;

require('./config');

// require('./engine')(app);

require('./routes')(app);

// require('./static')(app);

// require('./server')(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

module.exports = app;
