const serverlessExpress = require('@vendia/serverless-express')
const app = require('./bin/www')

app.listen(app.get('port'))

module.exports.universal = async (event, context) => {
  const serverlessExpressInstance = serverlessExpress({ app })
  return serverlessExpressInstance(event, context)
}
