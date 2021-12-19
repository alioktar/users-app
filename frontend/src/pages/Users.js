import React from "react";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SubHeader from "../components/SubHeader";
import UserActions from "../store/actions/user";

function Users() {
  const [columns, setColumns] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [toggleCleared, setToggleCleared] = React.useState(false);
  const [toggleSelectable, setToggleSelectable] = React.useState(false);
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleButtonClick = (row) => {
    window.confirm(`Are you sure you want to update:\r ${row.name}?`);
  };

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
          <button onClick={() => handleButtonClick(row)}>Update</button>
        ),
        ignoreRowClick: true,
        allowOverflow: true,
        button: true,
      },
    ]);
  }, [dispatch]);

  const handleRowSelected = React.useCallback(
    (state) => {
      dispatch(UserActions.setSelectedRows(state.selectedRows));
    },
    [dispatch]
  );

  const contextActions = React.useMemo(() => {
    const handleDelete = () => {
      if (
        window.confirm(
          `Are you sure you want to delete:\r ${user.selectedRows.map(
            (r) => r.name
          )}?`
        )
      ) {
        setToggleCleared(!toggleCleared);
      }
    };

    return (
      <button onClick={handleDelete} style={{ backgroundColor: "red" }}>
        Delete
      </button>
    );
  }, [toggleCleared, user.selectedRows]);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <SubHeader
        filterText={filterText}
        handleClear={handleClear}
        setFilterText={setFilterText}
        toggleSelectable={toggleSelectable}
        setToggleSelectable={setToggleSelectable}
      />
    );
  }, [filterText, resetPaginationToggle, toggleSelectable]);

  return (
    <div className="h-full flex flex-col">
      <Header title={"Users Page"} />
      <section className="flex-1">
        <DataTable
          subHeader
          pagination
          title="Users"
          columns={columns}
          progressPending={user.loading}
          contextActions={contextActions}
          selectableRows={toggleSelectable}
          clearSelectedRows={toggleCleared}
          onSelectedRowsChange={handleRowSelected}
          subHeaderComponent={subHeaderComponentMemo}
          paginationResetDefaultPage={resetPaginationToggle}
          data={user.users.filter(
            (item) =>
              (item.name &&
                item.name.toLowerCase().includes(filterText.toLowerCase())) ||
              (item.email &&
                item.email.toLowerCase().includes(filterText.toLowerCase()))
          )}
        />
      </section>
      <Footer />
    </div>
  );
}

export default Users;
