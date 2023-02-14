import { mockHandlers } from "utils/utils";
import registrationData from "./registration.data.json";

export const useRegistrationHandlers = mockHandlers(
  [{ endpoint: "auth", data: registrationData }],
  "post"
);
