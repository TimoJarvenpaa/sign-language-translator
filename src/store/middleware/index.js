import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";
import { registerMiddleware } from "./registerMiddleware";

export default applyMiddleware(
  loginMiddleware,
  sessionMiddleware,
  registerMiddleware
);