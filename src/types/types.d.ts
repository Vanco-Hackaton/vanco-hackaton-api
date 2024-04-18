import { Response, Request, Send } from "express";

export interface StandardResponse<T> extends Response {
  json: Send<
    {
      message?: string;
      error?: Error;
      data?: T;
    },
    this
  >;
}

export interface StandardRequest<T, U> extends Request {
  body: T;
  query: U;
}

export interface StandardRequestQuery<T> extends Request {
  query: T;
}

export interface StandardRequestBody<T> extends Request {
  body: T;
}
