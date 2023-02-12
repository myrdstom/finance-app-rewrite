import { rest } from "msw";

const baseURL = process.env.REACT_APP_BASE_URL;

const mockHandler = (method) => (api, data, status) =>
  rest[method](`${baseURL}/${api}`, (req, res, ctx) =>
    res(ctx.status(status), ctx.json(data))
  );

export const mockHandlers = (endpoint, method) => {
  if (typeof endpoint === "string") {
    return [mockHandler(method)(endpoint, [], 200)];
  }

  if (Array.isArray(endpoint)) {
    return endpoint.map((item) => {
      const isString = typeof item === "string";
      return mockHandler(method)(
        isString ? item : item?.endpoint,
        isString ? [] : item?.data,
        isString ? 200 : item?.status || 200
      );
    });
  }
  return [];
};
