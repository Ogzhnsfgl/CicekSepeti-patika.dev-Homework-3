import React from 'react';
import ReactModal from 'react-modal';
import Rating from './Rating';

const Modal = (props) => {
  /* Requirements */
  const { title, duration, author, embedLink } = props.item;
  const { setShowModal, showModal, stars, setStars } = props;

  return (
    <ReactModal
      className="ReactModal"
      isOpen={showModal}
      contentLabel="Minimal Modal Example"
      ariaHideApp={false}
    >
      <div className="modal-info">
        <div className="modal-info-title">{title}</div>
        <div className="modal-info-author">{author}</div>
        <div className="modal-info-detail">
          <div className="modal-info-duration">Duration: {duration} </div>
          <Rating item={props.item} stars={stars} setStars={setStars} />
        </div>
      </div>
      <div className="modal-video">
        <iframe
          width="500"
          height="315"
          src={`${embedLink}`}
          title={`${title}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={() => setShowModal(!showModal)}>X</button>
    </ReactModal>
  );
};

export default Modal;
