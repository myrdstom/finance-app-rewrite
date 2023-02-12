import { mockHandlers } from "utils/utils";
import registrationData from "./register.data.json";

export const useRegistrationHandlers = mockHandlers(
  [{ endpoint: "auth", data: registrationData }],
  "post"
);
