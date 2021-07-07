const express = require('express');
const morgan = require('morgan');
const exphbs  = require('express-handlebars');
const path = require('path') ;
const app = express();
const port = 3000;

const connectDB = require('./model/connectDB');
const route = require('./routes/index');



app.use(morgan('combined'));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname , 'public')));

connectDB.connect();
route(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})