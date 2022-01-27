import { applyMiddleware } from "redux";
import { loginMiddleware } from "./loginMiddleware";

export default applyMiddleware(loginMiddleware);
