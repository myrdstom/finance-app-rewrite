import { mockHandlers } from "utils/utils";
import loginData from "./Login.data.json";

export const useLoginHandlers = mockHandlers(
  [{ endpoint: "auth/login", data: loginData }],
  "post"
);
