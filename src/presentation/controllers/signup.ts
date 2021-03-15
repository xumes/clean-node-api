
import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissinParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    if (!httpRequest.body.name) {
      return badRequest(new MissinParamError('name'))
    }

    if (!httpRequest.body.email) {
      return badRequest(new MissinParamError('email'))
    }
  }
}
