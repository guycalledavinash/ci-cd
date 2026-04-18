const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', `${__dirname}/views`);
app.use(express.static(`${__dirname}/public`));

app.get('/healthz', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.get('/', (req, res) => {
  const user = req.query.user || 'Developer';

  res.render('index', {
    greeting: `Hello, ${user}!`,
    timestamp: new Date().toISOString(),
    podName: process.env.HOSTNAME || 'local'
  });
});

if (require.main === module) {
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
}

module.exports = app;
