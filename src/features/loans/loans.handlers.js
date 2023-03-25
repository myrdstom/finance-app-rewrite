import { mockHandlers } from "utils/utils";
import clientLoans from "./loans.data.json";

export const useGetLoanHandlers = mockHandlers(
  [{ endpoint: "finance/manager/email", data: clientLoans }],
  "get"
);

//tette
