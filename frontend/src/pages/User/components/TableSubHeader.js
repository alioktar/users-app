import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../../../components/Button";
import FilterComponent from "../../../components/FilterComponent";
import UserActions from "../../../store/actions/user";

function TableSubHeader({ filterText, handleClear, setFilterText }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const handleDeleteClick = () => {
    dispatch(UserActions.rowsSelectable(!user.rowsSelectable));
  };

  const handleNewUserClick = () => {
    dispatch(UserActions.showSaveModal(true));
  };

  return (
    <div className="w-full flex justify-end flex-col sm:flex-row">
      <Button
        label="New User"
        className="bg-emerald-500 border-emerald-500 active:bg-emerald-600 mb-2 sm:mb-0 sm:mr-2"
        onClick={handleNewUserClick}
      />
      <Button
        label="Delete User / Users"
        className="bg-red-500 mb-2 sm:mb-0 sm:mr-2 border-red-500"
        onClick={handleDeleteClick}
      />
      <FilterComponent
        filterText={filterText}
        handleClear={handleClear}
        onChange={(e) => setFilterText(e.target.value)}
      />
    </div>
  );
}

export default TableSubHeader;
