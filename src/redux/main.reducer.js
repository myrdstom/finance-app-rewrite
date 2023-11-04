import { combineReducers } from "redux";
import authReducer from "features/auth/auth.reducer";
import clientReducer from "features/clients/clients.reducer";
import loansReducer from "features/loans/loans.reducer";
import paymentsReducer from "features/payments/payments.reducer";

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
  loans: loansReducer,
  payments: paymentsReducer,
});
export default mainReducer;
