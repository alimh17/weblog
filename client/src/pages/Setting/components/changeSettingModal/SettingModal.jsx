import React from "react";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { Button, Modal } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";

import style from "./SettingModal.module.css";
import { updateProfileAction } from "../../../../action/ProfileAction";

const SettingModal = (props) => {
  const dispatch = useDispatch();
  const { addToast } = useToasts();

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      dir="rtl"
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          تغییر مشخصات
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form className="d-flex flex-column">
          <input className="my-3" />
          <textarea name="" id="" cols="30" rows="10" className=""></textarea>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default SettingModal;
