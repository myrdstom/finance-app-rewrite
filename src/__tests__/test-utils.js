import { setupServer } from "msw/node";
import { useLoginHandlers } from "features/auth/login/login.handlers";
import { useRegistrationHandlers } from "features/auth/registration/register.handlers";
import { useGetLoanHandlers } from "features/loans/getLoans/loans.handlers";
import { useDashboardHandlers } from "../features/dashboard/dashboard.handlers";

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
