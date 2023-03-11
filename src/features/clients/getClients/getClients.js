import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "layouts/drawer";
import { DataGridContainer } from "components/dataGridContainer/dataGridContainer";
import { DataGrid } from "elements/dataGrid";
import { MUIStack } from "styles/styles";
import { Box, ListItemText, MenuItem, Stack, Typography } from "@mui/material";
import KebabMenu from "components/kebabMenu";
import { COLORS } from "styles/theme";
import { DeleteModal } from "components/deleteModal";
import {
  deleteClient,
  getClients,
} from "../actions/clients/actions/client.actions";
import { EditClient } from "../editClient";
import { AddClient } from "../addClient";

const columns = [
  { field: "id", headerName: "ID", width: 0 },
  {
    field: "name",
    headerName: "Name",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "number",
    headerName: "Telephone Number",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={3} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "address",
    headerName: "Address",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={4} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "country",
    headerName: "Country",
    flex: 1,
    minWidth: 150,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} width="100%" pl={5}>
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "action",
    headerName: "",
    flex: 1,
    minWidth: 110,
    renderCell: (params) => {
      const [openEdit, setOpenEdit] = useState(false);
      const [openDelete, setOpenDelete] = useState(false);
      const dispatch = useDispatch();

      const { id, name } = params.row;

      const handleDelete = async (clientId) => {
        dispatch(deleteClient(clientId));
        setOpenDelete(false);
      };

      return (
        <MUIStack justifyContent="space-evenly" width="100%" pr={4}>
          <Stack
            direction="row"
            justifyContent="flex-end"
            gap={2.3}
            data-testid="custom-element"
          >
            <Box mt={1}>
              <Typography
                variant="w9"
                onClick={() => setOpenEdit(true)}
                clientId={id}
              >
                Edit Client
              </Typography>
            </Box>
            <KebabMenu color={COLORS.BLUE} width="1rem" height="1rem">
              <Box>
                <MenuItem>
                  <ListItemText
                    sx={{ color: COLORS.RED }}
                    onClick={() => setOpenDelete(true)}
                  >
                    Remove
                  </ListItemText>
                </MenuItem>
              </Box>
            </KebabMenu>
            {openEdit && (
              <EditClient
                setOpen={setOpenEdit}
                title="Edit Client"
                clientId={id}
              />
            )}
            {openDelete && (
              <DeleteModal
                open={openDelete}
                handleClick={() => setOpenDelete(false)}
                title={name}
                handleRemoveClick={() => handleDelete(id)}
                subtitle={name}
              />
            )}
          </Stack>
        </MUIStack>
      );
    },
  },
];

const GetClients = () => {
  const [allClients, setAllClients] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [clientHeadings, setClientHeadings] = useState([]);
  const dispatch = useDispatch();
  const clients = useSelector((state) => state?.clients.clients);
  const removeClient = useSelector((state) => state?.clients.delete);
  const editClient = useSelector((state) => state?.clients.editClient);

  useEffect(() => {
    if (removeClient === true) {
      dispatch(getClients());
    }
    if (editClient) {
      dispatch(getClients());
    }
    dispatch(getClients());
  }, [removeClient, editClient]);

  useEffect(() => {
    if (clients) {
      const cleanedClients = clients.map(
        ({
          clientId,
          clientContactEmail,
          clientName,
          clientContactNumber,
          address,
          city,
          country,
        }) => ({
          id: clientId,
          name: clientName,
          email: clientContactEmail,
          number: clientContactNumber,
          address: `${address}, ${city}`,
          country,
        })
      );

      const heading = [
        {
          title1: "Clients Registered",
          title2: null,
        },
        {
          title1: cleanedClients.length,
          title2: "Clients",
        },
      ];
      setClientHeadings(heading);
      setAllClients(cleanedClients);
    }
  }, [clients]);
  return (
    <ResponsiveDrawer>
      <DataGridContainer
        headings={clientHeadings}
        setOpenAdd={setOpenAdd}
        buttonTitle="Add Client"
      >
        <DataGrid
          columns={columns}
          rows={allClients}
          rowHeight={2.7}
          height="27rem"
          headerHeight={2}
          hideColumn="id"
        />
      </DataGridContainer>
      {openAdd && <AddClient setOpen={setOpenAdd} title="Add Client" />}
    </ResponsiveDrawer>
  );
};

export default GetClients;
