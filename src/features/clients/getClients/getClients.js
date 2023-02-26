import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ResponsiveDrawer from "layouts/drawer";
import { DataGridContainer } from "components/dataGridContainer/dataGridContainer";
import { DataGrid } from "elements/dataGrid";
import { MUIStack } from "styles/styles";
import {
  Box,
  Link,
  ListItemText,
  MenuItem,
  Stack,
  Typography,
} from "@mui/material";
import KebabMenu from "components/kebabMenu";
import { COLORS } from "styles/theme";
import { getClients } from "../actions/clients/actions/client.actions";
import { EditClient } from "../editClient";

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
      const [openAdd, setOpenAdd] = useState(false);
      const [openEdit, setOpenEdit] = useState(false);

      return (
        <MUIStack justifyContent="space-evenly" width="100%" pr={4}>
          <Stack direction="row" justifyContent="flex-end" gap={2.3}>
            <Box mt={1}>
              <Link
                underline="none"
                href={`/clients/edit-client/${params.row.id}`}
              >
                <Typography variant="w9" onClick={() => setOpenAdd(true)}>
                  Add Client
                </Typography>
              </Link>
            </Box>
            <KebabMenu color={COLORS.BLUE} width="1rem" height="1rem">
              <Box>
                <MenuItem onClick={() => setOpenEdit(true)}>
                  <ListItemText>Edit</ListItemText>
                </MenuItem>
                <MenuItem>
                  <ListItemText sx={{ color: COLORS.RED }}>Remove</ListItemText>
                </MenuItem>
              </Box>
            </KebabMenu>
            {openEdit && (
              <EditClient
                setOpen={setOpenEdit}
                title="Edit Client"
                clientId={params.row.id}
              />
            )}
            {openAdd && (
              <EditClient
                setOpen={setOpenEdit}
                title="Edit Client"
                clientId={params.row.clientId}
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
  const dispatch = useDispatch();
  const clients = useSelector((state) => state?.clients.clients);
  const deleteClient = useSelector((state) => state?.clients.delete);
  const editClient = useSelector((state) => state?.clients.editClient);
  useEffect(() => {
    if (deleteClient === true) {
      dispatch(getClients());
    }
    if (editClient) {
      dispatch(getClients());
    }
    dispatch(getClients());
  }, [deleteClient, editClient]);

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
      setAllClients(cleanedClients);
    }
  }, [clients]);

  return (
    <ResponsiveDrawer>
      <DataGridContainer section="Add Client">
        <DataGrid
          columns={columns}
          rows={allClients}
          rowHeight={2.7}
          height="27rem"
          headerHeight={2}
          hideColumn="id"
        />
      </DataGridContainer>
    </ResponsiveDrawer>
  );
};

export default GetClients;
