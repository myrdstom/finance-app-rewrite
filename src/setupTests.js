import "@testing-library/jest-dom";
import { startServer } from "./__tests__/test-utils";

const server = startServer();

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
