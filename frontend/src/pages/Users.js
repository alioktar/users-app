import React from "react";
import UserActions from "../store/actions/user";
import DataTable from "react-data-table-component";
import { useDispatch, useSelector } from "react-redux";
import FilterComponent from "../components/FilterComponent";

function Users() {
  const [columns, setColumns] = React.useState([]);
  const [filterText, setFilterText] = React.useState("");
  const [resetPaginationToggle, setResetPaginationToggle] =
    React.useState(false);

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

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
    ]);
  }, [dispatch]);

  const subHeaderComponentMemo = React.useMemo(() => {
    const handleClear = () => {
      if (filterText) {
        setResetPaginationToggle(!resetPaginationToggle);
        setFilterText("");
      }
    };

    return (
      <FilterComponent
        filterText={filterText}
        handleClear={handleClear}
        onChange={(e) => setFilterText(e.target.value)}
      />
    );
  }, [filterText, resetPaginationToggle]);

  return (
    <DataTable
      subHeader
      pagination
      columns={columns}
      progressPending={user.loading}
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
  );
}

export default Users;
