
const path = require('path');
const express = require('express');


const port = process.env.port || 8080;
const dist = path.resolve(__dirname, '..', 'client', 'dist');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/', express.static(dist));

app.get('*', (req, res) => {
  res.sendFile(path.resolve(dist, 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is listening on http://127.0.0.1:${port}`);
});