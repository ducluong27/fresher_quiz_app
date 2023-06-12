import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { FcPlus } from 'react-icons/fc'

const ModalCreateUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("USER");
  const [image, setImage] = useState("");
  const [previewImage, setPreviewImage] = useState("");
  const handleUpload = (e) => {
    if (e.target && e.target.files && e.target.files[0]){
      setPreviewImage(URL.createObjectURL(e.target.files[0]));
      setImage(e.target.files[0]);
    } else {
      // setPreviewImage("");
    }
  }

  return (
    <>
      <Button variant="info" onClick={handleShow}>
        <FcPlus/>Add User
      </Button>

      <Modal show={show} onHide={handleClose} size='xl' backdrop="static" className='modal-add-user'>
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label for="inputEmail4" className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="col-md-6">
              <label for="inputPassword4" className="form-label">Password</label>
              <input type="password" className="form-control" id="inputPassword4" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <div className="col-md-6">
              <label for="inputCity" className="form-label">User Name</label>
              <input type="text" className="form-control" id="inputUserName" value={userName} onChange={(e) => setUserName(e.target.value)}/>
            </div>
            <div className="col-md-4">
              <label for="inputState" className="form-label">Role</label>
              <select id="inputState" className="form-select" onChange={(e) => setRole(e.target.value)}>
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>
            <div className="col-md-12">
              <label for="inputImage" className="form-label label-upload" htmlFor='label-upload-image'> <FcPlus/> Upload Image</label>
              <input type="file" className="form-control" hidden id='label-upload-image' onChange={(e) => handleUpload(e)}/>
            </div>
            <div className="col-md-12 img-preview">
              {
                previewImage ?
                <img src={previewImage} alt='preview image'/> :
                <span>Preview Image</span>
              }
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateUser;