
const path = require('path');
const express = require('express');


const port = process.env.port || 8080;
const dist = path.resolve(__dirname, '..', 'client', 'dist');
const app = express();
const sequelize = require('./db/database.js');
const Catdetails = require('./db/database.js');
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(dist));


app.get('/cats', (req, res) => {

  Catdetails.findAll()
    .then((data) => {
      res.send(data)})
    .catch((err) => console.warn(err));
});
app.post('/removeCat', (req, res) => {

  console.log(req.body)
  const {id}= req.body
  console.log(id)


  Catdetails.destroy({where: {
    id: id

  }});


});
app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
});