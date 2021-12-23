import React from "react";
import { useDispatch, useSelector } from "react-redux";

import UserActions from "../../../store/actions/user";
import Modal from "../../../components/Modal";

function DetailsModal() {
  const dispatch = useDispatch();
  const { selectedUser, showSaveModal } = useSelector((state) => state.user);

  return (
    <Modal
      title="User Details"
      showFooter={false}
      isShown={selectedUser && !showSaveModal}
      onClose={() => dispatch(UserActions.setSelectedUser(null))}
    >
      <>
        <h4 className="font-medium mb-2 text-xl"> {selectedUser?.name}</h4>
        <p>
          <span className="font-medium text-sm">Email</span> :{" "}
          <span>{selectedUser?.email}</span>
        </p>
        <p>
          <span className="font-medium text-sm">Address</span> :{" "}
          <span>{selectedUser?.address}</span>
        </p>
      </>
    </Modal>
  );
}

export default DetailsModal;
