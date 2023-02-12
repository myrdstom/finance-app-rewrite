import { mockHandlers } from "utils/utils";
import registrationData from "./Registration.data.json";

export const useRegistrationHandlers = mockHandlers(
  [{ endpoint: "auth", data: registrationData }],
  "post"
);
