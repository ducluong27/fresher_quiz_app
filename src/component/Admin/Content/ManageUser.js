import ModalCreateUser from "./ModalCreateUser"
import "./ManageUser.scss";

const ManageUser = (props) => {
  return (
    <div classNameName='manage-user-container'>
      <div classNameName='title'>
        <h6>Manage users</h6>
      </div>
      <div classNameName='user-content'>
        <div>
          <span>Table users</span>
        </div>
        <ModalCreateUser />
      </div>
    </div>
  )
}

export default ManageUser