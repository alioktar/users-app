import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../../components/Input";

import Modal from "../../../components/Modal";
import UserActions from "../../../store/actions/user";

function SaveModal() {
  const [user, setUser] = React.useState({
    id: 0,
    name: "",
    email: "",
    address: "",
  });

  const dispatch = useDispatch();
  const { selectedUser, showSaveModal } = useSelector((state) => state.user);

  React.useEffect(() => {
    if (selectedUser) {
      setUser(selectedUser);
    }
  }, [selectedUser]);

  const handleModalClose = () => {
    setUser({});
    dispatch(UserActions.setSelectedUser(null));
    dispatch(UserActions.showSaveModal(false));
  };

  const handleSave = () => {
    alert(JSON.stringify(user));
  };

  const handleChange = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <Modal
      showFooter={true}
      onSave={handleSave}
      title="Add/Update User"
      isShown={showSaveModal}
      onClose={handleModalClose}
    >
      <div>
        <div className="mb-4 flex flex-col">
          <span className="mb-2 font-medium text-sm">Name</span>
          <Input
            name="name"
            placeholder="Please enter user name"
            text={user.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4 flex flex-col">
          <span className="mb-2 font-medium text-sm">Email</span>
          <Input
            name="email"
            type="email"
            text={user.email}
            onChange={handleChange}
            placeholder="Please enter user email"
          />
        </div>
        <div className="flex flex-col">
          <span className="mb-2 font-medium text-sm">Address</span>
          <Input
            name="address"
            text={user.address}
            onChange={handleChange}
            placeholder="Please enter user address"
          />
        </div>
      </div>
    </Modal>
  );
}

export default SaveModal;
