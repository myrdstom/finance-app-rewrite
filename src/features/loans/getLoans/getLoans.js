import React, { useEffect, useState } from "react";
import ResponsiveDrawer from "layouts/drawer";
import { DataGridContainer } from "components/dataGridContainer/dataGridContainer";
import { useDispatch, useSelector } from "react-redux";
import { Box, ListItemText, MenuItem, Stack, Typography } from "@mui/material";
import { getLoans } from "../actions/loans/actions/loan.actions";
import { DataGrid } from "../../../elements/dataGrid";
import { MUIStack } from "../../../styles/styles";
import { deleteClient } from "../../clients/actions/clients/actions/client.actions";
import KebabMenu from "../../../components/kebabMenu";
import { COLORS } from "../../../styles/theme";
import { EditClient } from "../../clients/editClient";
import { DeleteModal } from "../../../components/deleteModal";
import { AddLoan } from "../addLoan";

const columns = [
  { field: "id", headerName: "ID", width: 0 },
  {
    field: "name",
    headerName: "Client",
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
    field: "amount",
    headerName: "Amount",
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={2} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "principle",
    headerName: "Principle",
    flex: 1,
    minWidth: 100,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={3} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "rate",
    headerName: "Interest Rate",
    width: 50,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} pl={4} width="100%">
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "dateDisbursed",
    headerName: "Date Disbursed",
    flex: 1,
    minWidth: 50,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} width="100%" pl={5}>
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "months",
    headerName: "Months",
    width: 50,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} width="100%" pl={5}>
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "interestAmount",
    headerName: "Interest Amount",
    flex: 1,
    minWidth: 50,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} width="100%" pl={5}>
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "totalOwed",
    headerName: "Total Owed",
    flex: 1,
    minWidth: 50,
    renderCell: (params) => (
      <MUIStack justifyContent="flex-start" pt={2} width="100%" pl={5}>
        <Stack direction="row" gap={11}>
          <Typography variant="w7">{params.value}</Typography>
        </Stack>
      </MUIStack>
    ),
  },
  {
    field: "comment",
    headerName: "Comment",
    flex: 1,
    minWidth: 100,
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
      const [openLoan, setOpenLoan] = useState(false);
      const [openDelete, setOpenDelete] = useState(false);
      const dispatch = useDispatch();

      const { id, name } = params.row;

      const handleDelete = async (loanId) => {
        dispatch(deleteClient(loanId));
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
                onClick={() => setOpenLoan(true)}
                clientId={id}
              >
                Loan Payments
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
            {openLoan && (
              <EditClient
                setOpen={setOpenLoan}
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

const GetLoans = () => {
  const [allLoans, setAllLoans] = useState([]);
  const [openAdd, setOpenAdd] = useState(false);
  const [loanHeadings, setLoanHeadings] = useState([]);
  const dispatch = useDispatch();
  const loans = useSelector((state) => state?.loans.loans);
  const removeLoan = useSelector((state) => state?.loans.delete);
  const editLoan = useSelector((state) => state?.loans.editClient);

  useEffect(() => {
    if (removeLoan === true) {
      dispatch(getLoans());
    }
    if (editLoan) {
      dispatch(getLoans());
    }
    dispatch(getLoans());
  }, [removeLoan, getLoans]);

  useEffect(() => {
    if (loans) {
      const cleanedLoans = loans.map(
        ({
          client,
          loanId,
          amount,
          pendingPrinciple,
          rate,
          dateDisbursed,
          months,
          interestAmount,
          totalOwed,
          comment,
        }) => ({
          id: loanId,
          name: client,
          amount,
          principle: pendingPrinciple,
          rate,
          dateDisbursed,
          months,
          interestAmount,
          totalOwed,
          comment,
        })
      );

      const heading = [
        {
          title1: "Loans Registered",
          title2: null,
        },
        {
          title1: cleanedLoans.length,
          title2: "Loans",
        },
      ];
      setLoanHeadings(heading);
      setAllLoans(cleanedLoans);
    }
  }, [loans]);

  return (
    <ResponsiveDrawer>
      <DataGridContainer
        headings={loanHeadings}
        setOpenAdd={setOpenAdd}
        buttonTitle="Add Loan"
      >
        <DataGrid
          columns={columns}
          rows={allLoans}
          rowHeight={2.7}
          height="27rem"
          headerHeight={2}
          hideColumn="id"
        />
      </DataGridContainer>
      {openAdd && <AddLoan setOpen={setOpenAdd} title="Add Loan" />}
    </ResponsiveDrawer>
  );
};

export default GetLoans;
