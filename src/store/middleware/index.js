import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";
import { registerMiddleware } from "./registerMiddleware";
import { translationMiddleware } from "./translationMiddleware";

export default applyMiddleware(
  loginMiddleware,
  sessionMiddleware,
  registerMiddleware,
  translationMiddleware
);