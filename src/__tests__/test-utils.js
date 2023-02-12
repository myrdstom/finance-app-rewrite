import { setupServer } from "msw/node";
import { useLoginHandlers } from "features/Auth/Login/Login.handlers";
import { useRegistrationHandlers } from "features/Auth/Registration/Registration.handlers";
import { useGetLoanHandlers } from "features/Loans/GetLoans/Loans.handlers";
import { useDashboardHandlers } from "../features/Dashboard/Dashboard.handlers";

let server;

export function startServer() {
  server = setupServer(
    ...useLoginHandlers,
    ...useRegistrationHandlers,
    ...useGetLoanHandlers,
    ...useDashboardHandlers
  );
  return server;
}

// export function getServer() {
//   return server;
// }
