import React from "react";
import SmallCard from "./smallCard";
import ModalComponent from "../Modal/ModalComponent";
import axios from "axios";

export default function ModalCard(props) {
  const [showModal, setShowModal] = React.useState(false);

  const cancelModal = () => {
    setShowModal(false);
  };
  const submitModel = () => {
    const options = {
      body: {
        perkID: props.Perk.id,
      },
      headers: {
        "x-clerkid": "Krishnna1234",
      },
    };

    axios({
      method: "post",
      url: "http://localhost:3000/employee/perks/purchase",
      headers: options.headers,
      data: options.body,
    })
      .then((resp) => {
        alert(resp.data.message);

        window.location.reload();
      })
      .catch((err) => {
        alert(err.response.data.message);

        setShowModal(false);
      });
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
