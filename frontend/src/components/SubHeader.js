import React from "react";
import Button from "./Button";
import FilterComponent from "./FilterComponent";

function SubHeader({
  filterText,
  handleClear,
  setFilterText,
  toggleSelectable,
  setToggleSelectable,
}) {
  return (
    <>
      <Button label="New User" className="bg-green-400 border-green-400 mr-2" />
      <Button
        label="Delete User / Users"
        className="bg-red-500 mr-2 border-red-500"
        onClick={() => setToggleSelectable(!toggleSelectable)}
      />
      <FilterComponent
        filterText={filterText}
        handleClear={handleClear}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </>
  );
}

export default SubHeader;
