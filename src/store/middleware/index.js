import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleware";
import { sessionMiddleware } from "./sessionMiddleware";

export default applyMiddleware(loginMiddleware, sessionMiddleware);
