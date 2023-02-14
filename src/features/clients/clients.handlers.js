import { mockHandlers } from "utils/utils";
import clientData from "./getClients/getClients.data.json";

export const useClientHandlers = mockHandlers(
  [{ endpoint: "client/manager/email", data: clientData }],
  "get"
);
