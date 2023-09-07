import { TextField } from "@mui/material";
import React, { Fragment } from "react";
import { Modal } from "react-bootstrap";
import ButtonStyle from "../sub-componenets/ButtonStyle";
import { multilanguage } from "redux-multilanguage";

const ModalCard = ({ onHide, show, strings }) => {


    

  return (
    <Fragment>
      <Modal show={show} onHide={onHide} className="card-modal px-2">
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center mb-30 mt-30">
                <img
                  src={
                    process.env.REACT_APP_PUBLIC_URL +
                    "./assets/img/visa-mastercard.png"
                  }
                  className="img-fluid"
                  height={100}
                  width={100}
                />
              </div>
              <h6 className="text-center mb-3 fw-600 text-capitalize">
                {" "}
                {strings["add_visa_card"]}{" "}
              </h6>
              <div className="col-12 col-md-12 mb-3">
                <label>{strings["card_number"]} :</label>
                <input type="number" maxLength={16} />
              </div>

              <div className="col-12 col-md-12 mb-3">
                <label>{strings["card_author"]} :</label>
                <input type="text" />
              </div>

              <div className="col-12 col-md-12 mb-3">
                <label>{strings["date_expire"]} : </label>
                <div className="d-flex gap-3">
                  <input
                    className="col-3"
                    type="number"
                    value=""
                    maxLength={31}
                  />
                  <input
                    className="col-4"
                    type="number"
                    value=""
                    maxLength={12}
                  />
                  <input
                    className="col-4"
                    type="number"
                    value=""
                    maxLength={2026}
                  />
                </div>
              </div>

              <div className="col-12 mb-3">
                <label>{strings["security_code"]} : </label>
                <div className="d-flex gap-3">
                  <input className="col-3" type="number" maxLength={4} />
                </div>
              </div>

              <div className="text-center mb-30 mt-30">
                <ButtonStyle
                  classBtn="btn-style-3 hover-style-2"
                  classCol="col-6"
                  title={strings["continuer"]}
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default multilanguage(ModalCard);
