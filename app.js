import express from 'express';
import fs from 'fs';

const app = express();
const port = 3000;

app.use(express.static('public'));
const index = fs.readFileSync('public/index.html', 'utf8');
app.get('/app', (req, res) => res.type('html').send(index));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
