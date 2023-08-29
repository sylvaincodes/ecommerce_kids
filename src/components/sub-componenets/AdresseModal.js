import React from "react";
import { Fragment } from "react";
import { Modal } from "react-bootstrap";
import ButtonStyle from "./ButtonStyle";

const AdresseModal = ({
    show, onHide 
}) => {
  return (
    <Fragment>
      <Modal show={show} onHide={onHide} className="login-modal px-2">
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="wrapper">
                <div className="row mb-3">
                  
                  <h3 className="text-center mb-3 fw-600">
                    {" "}
                    Modifier les détails de l'adresse{" "}
                  </h3>

                  <div className="col-12 col-md-12 mb-3">
                    <label>Pays</label>
                   <select>
                        <option>Bénin</option>
                        <option>France</option>
                   </select>
                  </div>
                  
                  <div className="col-12 col-md-12 mb-3">
                    <label>Nom complet ( Nom & Prénom )</label>
                    <input type="text" />
                  </div>

                  <div className="col-12 col-md-12 mb-3">
                    <label>Ville</label>
                    <input type="text" />
                  </div>

                  <div className="col-12 col-md-12 mb-3">
                    <label>Nom rue </label>
                    <input type="text" />
                  </div>

                  <div className="col-12 col-md-12 mb-3">
                    <label>Zip code </label>
                    <input type="text" />
                  </div>

                  <div className="col-12 col-md-12 mb-3">
                    <label> Numéro téléphone </label>
                    <input type="text" />
                  </div>

                  <ButtonStyle
                    classBtn="btn-style-3 hover-style-2"
                    classCol="col-6"
                    title="Continer"
                  />

                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default AdresseModal;
