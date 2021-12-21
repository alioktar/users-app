import React from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import UserActions from "../../../store/actions/user";
import Button from "../../../components/Button";
import TableSubHeader from "./TableSubHeader";

function Table() {
  const [columns, setColumns] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleUpdateClick = React.useCallback(
    (row) => {
      dispatch(UserActions.showSaveModal(true));
      dispatch(UserActions.setSelectedUser(row));
    },
    [dispatch]
  );

  const handleRowSelected = React.useCallback(
    (state) => {
      dispatch(UserActions.setSelectedRows(state.selectedRows));
    },
    [dispatch]
  );

  const handleRowClicked = React.useCallback(
    (row) => {
      dispatch(UserActions.setSelectedUser(row));
    },
    [dispatch]
  );

  React.useEffect(() => {
    dispatch(UserActions.getUsers());
    setColumns([
      {
        name: "Name",
        selector: (row) => row.name,
        sortable: true,
      },
      {
        name: "Email",
        selector: (row) => row.email,
        sortable: true,
      },
      {
        name: "Address",
        selector: (row) => row.address,
        sortable: true,
      },
      {
        cell: (row) => (
          <button onClick={() => handleUpdateClick(row)}>Update</button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ]);
  }, [dispatch, handleUpdateClick]);

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${user.selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        dispatch(UserActions.clearSelectedRows(!user.clearSelectedRows));
      }
    };

    return (
      <Button
        label="Delete"
        onClick={handleDelete}
        className="bg-red-500 mr-2 border-red-500"
      />
    );
  }, [dispatch, user.clearSelectedRows, user.selectedRows]);

  const subHeaderComponent = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <TableSubHeader
        filterText={filterText}
        handleClear={handleClear}
        setFilterText={setFilterText}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      subHeader
      pagination
      title="Users"
      columns={columns}
      progressPending={user.loading}
      contextActions={contextActions}
      onRowClicked={handleRowClicked}
      selectableRows={user.rowsSelectable}
      onSelectedRowsChange={handleRowSelected}
      clearSelectedRows={user.clearSelectedRows}
      subHeaderComponent={subHeaderComponent}
      paginationResetDefaultPage={resetPaginationToggle}
      data={user.users.filter(
        (item) =>
          (item.name &&
            item.name.toLowerCase().includes(filterText.toLowerCase())) ||
          (item.email &&
            item.email.toLowerCase().includes(filterText.toLowerCase()))
      )}
    />
  );
}

export default Table;
