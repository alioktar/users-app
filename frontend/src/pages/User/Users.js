import React from "react";

import Table from "./components/Table";
import DetailsModal from "./components/DetailsModal";
import SaveModal from "./components/SaveModal";

function Users() {
  return (
    <section className="container flex-1">
      <DetailsModal />
      <SaveModal />
      <Table />
    </section>
  );
}

export default Users;
