# Passport-42 example

This example demonstrates how to use [Express](http://expressjs.com/) 4.x and
[Passport-42](http://www.passportjs.org/packages/passport-42/) to authenticate
users using [42 OAuth 2.0 API](https://api.intra.42.fr/apidoc).
Use this example as a starting point for your own web applications.

## Instructions

To install this example on your computer, clone the repository and install
dependencies.

```bash
$ git clone https://github.com/hakkisabah/passport-42-example.git
$ cd passport-42-example
$ npm install
```

Development(nodemon installed globally):
```bash
npm run dev
```

Serverless deployment(needs AWS CLI and serverless cli with globally installed
```bash
npm run deploy
```

Register [an app](https://profile.intra.42.fr/oauth/applications) on 42 intra
and set the redirect URI to `http://127.0.0.1:4142/login/42/return`.

Start the server.

```bash
$ FORTYTWO_CLIENT_ID="xxxxxx" FORTYTWO_CLIENT_SECRET="xxxxxx" npm run start
```
or 

```bash
if work under development mode, use .env file to set the client ID and client secret.
```

an also

#### <i>you will use serverless framework to deploy the server with <u>secretenv.json</u> file.</i>


Open a web browser and navigate to
[http://localhost:4142/](http://127.0.0.1:4142/)
to see the example in action.
