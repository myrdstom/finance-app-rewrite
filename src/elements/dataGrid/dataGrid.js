import React, { useState } from "react";
import Box from "@mui/material/Box";
import StraightIcon from "@mui/icons-material/Straight";
import { ONE_REM_TO_PX } from "styles/theme";
import { MUIDataGrid, DownIcon } from "./dataGrid.styles";

export const DataGrid = ({
  columns,
  rows,
  height,
  headerHeight = 2.5,
  hideColumn,
}) => {
  const [pageSize, setPageSize] = useState(5);
  /**
   * borderRadius is found on the .MuiDataGrid-root class but cant seem to target in in
   * styled components hence the use of the `sx prop` in MUIDataGrid
   */
  return (
    <Box sx={{ height, width: "100%" }}>
      <MUIDataGrid
        rows={rows}
        columns={columns}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        rowsPerPageOptions={[2, 5, 10, 20]}
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
        checkboxSelection={false}
        headerHeight={headerHeight * ONE_REM_TO_PX}
        disableColumnMenu={false}
        columnVisibilityModel={{
          status: false,
          [hideColumn]: false,
        }}
        components={{
          ColumnSortedDescendingIcon: DownIcon,
          ColumnSortedAscendingIcon: StraightIcon,
        }}
      />
    </Box>
  );
};

export default DataGrid;
