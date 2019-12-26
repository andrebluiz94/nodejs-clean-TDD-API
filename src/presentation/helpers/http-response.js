const MissingParamError = require('./missing-param-error')
const UnaunthorizedError = require('./unaunthorized-error')
const ServerError = require('./server-error')
module.exports = class HttpResponse {
  static badRequest (paramName) {
    return {
      statusCode: 400,
      body: new MissingParamError(paramName)
    }
  }

  static serverError () {
    return {
      statusCode: 500,
      body: new ServerError()
    }
  }

  static unaunthorizedErro () {
    return {
      statusCode: 401,
      body: new UnaunthorizedError()
    }
  }

  static ok (data) {
    return {
      statusCode: 200,
      body: data
    }
  }
}
