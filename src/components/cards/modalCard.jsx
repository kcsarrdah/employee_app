import React from "react";
import SmallCard from "./smallCard";
import ModalComponent from "../Modal/ModalComponent";

export default function ModalCard(props) {
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
      <SmallCard Perk={props.Perk} onClick={() => setShowModal(true)} />

      {showModal ? (
        <ModalComponent
          Perk={props.Perk}
          cancelModal={cancelModal}
          submitModel={submitModel}
        />
      ) : null}
    </>
  );
}
