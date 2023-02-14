import { setupServer } from "msw/node";
import { useLoginHandlers } from "features/auth/login/login.handlers";
import { useRegistrationHandlers } from "features/auth/registration/registration.handlers";
import { useGetLoanHandlers } from "features/loans/loans.handlers";
import { useDashboardHandlers } from "features/dashboard/dashboard.handlers";
import { useClientHandlers } from "features/clients/clients.handlers";

let server;

export function startServer() {
  server = setupServer(
    ...useLoginHandlers,
    ...useRegistrationHandlers,
    ...useGetLoanHandlers,
    ...useDashboardHandlers,
    ...useClientHandlers
  );
  return server;
}

// export function getServer() {
//   return server;
// }
