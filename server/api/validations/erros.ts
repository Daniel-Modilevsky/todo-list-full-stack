export const httpStatusCodes = {
  OK: 200,
  BAD_REQUEST: 400,
  NOT_FOUND: 404,
  CONFLICT: 409,
  UNSUPPORTED_TYPE: 415,
  INTERNAL_SERVER_ERROR: 500,
};

class BaseError extends Error {
  statusCode: number;

  constructor(name: string, statusCode: number) {
    super(name);
    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.statusCode = statusCode;
  }
}

export class InternalServerException extends BaseError {
  constructor(name, statusCode = httpStatusCodes.INTERNAL_SERVER_ERROR) {
    super(name, statusCode);
  }
}

export class UnSupportedTypeException extends BaseError {
  constructor(name, statusCode = httpStatusCodes.UNSUPPORTED_TYPE) {
    super(name, statusCode);
  }
}

export class ConflictException extends BaseError {
  constructor(name, statusCode = httpStatusCodes.CONFLICT) {
    super(name, statusCode);
  }
}

export class NotFoundedException extends BaseError {
  constructor(name, statusCode = httpStatusCodes.NOT_FOUND) {
    super(name, statusCode);
  }
}

export class BadRequestException extends BaseError {
  constructor(name, statusCode = httpStatusCodes.NOT_FOUND) {
    super(name, statusCode);
  }
}
