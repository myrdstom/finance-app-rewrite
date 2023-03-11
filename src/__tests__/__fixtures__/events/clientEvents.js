import { client } from "../client";

export const successfulClientsEvent = {
  client: {},
  clients: {
    address: "plot 65 Ggaba Road",
    city: "kampala",
    country: "Uganda",
    email: "info@ape.com",
    name: "Africa Power and Equipment",
    number: "+256777777",
  },
  delete: false,
  editClient: false,
  error: {},
};

export const addClientEvent = {
  clients: [],
  client,
  error: {},
  delete: false,
  editClient: false,
};

export const deleteClientEvent = {
  clients: [],
  client: {},
  error: "",
  delete: true,
  editClient: false,
};

export const failedClientEvent = {
  clients: [],
  client: {},
  error: undefined,
  delete: false,
  editClient: false,
};

export const editClientEvent = {
  clients: [],
  client: {},
  delete: false,
  editClient: true,
  error: "",
};

export const getAClient = {
  client: {
    address: "plot 65 Ggaba Road",
    city: "kampala",
    country: "Uganda",
    email: "info@ape.com",
    name: "Africa Power and Equipment",
    number: "+256777777",
  },
  clients: [],
  delete: false,
  editClient: false,
  error: {},
};
