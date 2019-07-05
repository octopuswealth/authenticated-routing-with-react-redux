import * as constants from "../constants";
import { ICurrent } from "../types";

export interface IAuthenticate {
  type: constants.AUTHENTICATE;
}

export function authenticate(): IAuthenticate {
  return {
    type: constants.AUTHENTICATE,
  };
}

export interface IUnauthenticate {
  type: constants.UNAUTHENTICATE;
}

export function unauthenticate(): IUnauthenticate {
  return {
    type: constants.UNAUTHENTICATE,
  };
}

export type AuthenticationAction = IAuthenticate | IUnauthenticate;
