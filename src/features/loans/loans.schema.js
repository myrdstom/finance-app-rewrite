import * as Yup from "yup";
import {
  CLIENT_REQUIRED,
  AMOUNT_REQUIRED,
  RATE_REQUIRED,
  DATE_DISBURSED_REQUIRED,
} from "../../constants/features/loans";

export const loanYupObject = Yup.object({
  client: Yup.string().required(CLIENT_REQUIRED),
  rate: Yup.string().required(RATE_REQUIRED),
  amount: Yup.string().required(AMOUNT_REQUIRED),
  comment: Yup.string(),
  selectedDate: Yup.string().required(DATE_DISBURSED_REQUIRED),
});
