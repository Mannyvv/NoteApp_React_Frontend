import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import Cookies from "js-cookie";
import { useEffect, useState } from "react";

const IntroModal = () => {
  const [modal, setModal] = useState(false);

  //Sets cookie with expiration of 3 days
  if (modal) {
    Cookies.set("demo-notes-firstvisit", "false", { expires: 3 });
  }

  //Checks for first cookies for first time visitor to show modal and set cookie
  useEffect(() => {
    if (!Cookies.get("demo-notes-firstvisit")) {
      setModal(true);
    }
  }, []);

  return (
    <Modal isOpen={modal} toggle={() => setModal(!modal)} >
      <ModalHeader>Welcome!</ModalHeader>
      <ModalBody>
        <p>Thank you for taking the time to visit and check out my project.</p>
        <i><b>Remember:</b></i> "Read a Note, Leave a Note"


      </ModalBody>
      <ModalFooter>
        <Button onClick={() => setModal(!modal)}>Let's Go!</Button>
      </ModalFooter>
    </Modal>
  );
};

export default IntroModal;
