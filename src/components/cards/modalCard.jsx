import React from "react";
import SmallCard from "./smallCard";
import ModalComponent from "../Modal/ModalComponent";

export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);

  const cancelModal = () => {
    console.log("Cancel Modal");
    setShowModal(false);
  };
  const submitModel = () => {
    console.log("Submit Modal");
    setShowModal(false);
  };

  return (
    <>
      <SmallCard onClick={() => setShowModal(true)} />

      {showModal ? (
        <ModalComponent cancelModal={cancelModal} submitModel={submitModel} />
      ) : null}
    </>
  );
}
