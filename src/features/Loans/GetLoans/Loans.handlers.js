import { mockHandlers } from "utils/utils";
import clientLoans from "./Loans.data.json";

export const useGetLoanHandlers = mockHandlers(
  [{ endpoint: "finance/manager/email", data: clientLoans }],
  "get"
);
