import { combineReducers } from "redux";
import authReducer from "features/auth/auth.reducer";
import clientReducer from "features/clients/clients.reducer";
import loansReducer from "redux/reducers/loans.reducer";
import paymentsReducer from "redux/reducers/payments.reducer";

const mainReducer = combineReducers({
  authentication: authReducer,
  clients: clientReducer,
  loans: loansReducer,
  payments: paymentsReducer,
});
export default mainReducer;
