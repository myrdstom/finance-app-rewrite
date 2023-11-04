import * as Yup from "yup";
import {
  ADDRESS_REQUIRED,
  CITY_REQUIRED,
  COUNTRY_REQUIRED,
  CLIENT_EMAIL_REQUIRED,
  CLIENT_NUMBER_REQUIRED,
  CLIENT_NAME_REQUIRED,
} from "constants/features/clients";

export const addClientYupObject = Yup.object({
  clientName: Yup.string().required(CLIENT_NAME_REQUIRED),
  address: Yup.string().required(ADDRESS_REQUIRED),
  city: Yup.string().required(CITY_REQUIRED),
  country: Yup.string().required(COUNTRY_REQUIRED),
  clientContactEmail: Yup.string().required(CLIENT_EMAIL_REQUIRED),
  clientContactNumber: Yup.string().required(CLIENT_NUMBER_REQUIRED),
});
