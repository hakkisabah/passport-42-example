process.env.NODE_ENV = 'development';
const app = require('./bin/www');
// Server for local development

app.listen(app.get('port'), () => {
  console.log(`Server running at http://localhost:${app.get('port')}/`);
});
