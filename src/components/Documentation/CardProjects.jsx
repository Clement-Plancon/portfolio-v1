import React, { Fragment } from "react";
import { useRef } from "react";

const CardProjects = ({
  block,
  element,
  modifier,
  titles,
  text,
  logoModal,
  textModal,
  iconModal,
  linkModal
}) => {
  const displayModalRef = useRef(null);
  const displayModal = () => {
    displayModalRef.current.classList.add("cardModal");
    displayModalRef.current.classList.remove("cardModalNone");
  };
  const removeModal = () => {
    displayModalRef.current.classList.remove("cardModal");
    displayModalRef.current.classList.add("cardModalNone");
  };
  const modalClickPrevent = (e) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };

  return (
    <Fragment>
      <div className={`${block} ${block}${modifier}`} onClick={displayModal}>
        <h3>{titles}</h3>
        <p>{text}</p>
      </div>
      <div
        className="cardModalNone"
        ref={displayModalRef}
        onClick={removeModal}
      >
        <div className="containerModal" onClick={modalClickPrevent}>
          <div className="logoContainer">
            <img src={logoModal} alt="" />
          </div>
          <div className="breakLine"></div> 
             
          {textModal}
          {iconModal}
          <a href={linkModal} target="_blank">Lien vers le site</a>       
          <div className="exitModal" onClick={removeModal}>
            X
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default CardProjects;
