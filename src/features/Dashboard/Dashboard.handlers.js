import { rest } from "msw";
import currencyData from "./Dashboard.data.json";

export const useDashboardHandlers = [
  rest.get(
    "https://currency-converter5.p.rapidapi.com/currency/convert",
    (req, res, ctx) => res(ctx.status(200), ctx.json(currencyData))
  ),
];
