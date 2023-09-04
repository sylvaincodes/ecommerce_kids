import React from "react";
import { Fragment } from "react";
import { Modal } from "react-bootstrap";
import ButtonStyle from "../sub-componenets/ButtonStyle";

const LoginModal = ({ show, onHide, strings }) => {
  return (
    <Fragment>
      <Modal show={show} onHide={onHide} className="login-modal px-2">
        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <div className="row">
            <div className="col-12">
              <div className="wrapper">
                <div className="row mb-3">

                  <h3 className="text-center mb-3 fw-600 text-capitalize"> {strings['login']} </h3>
                  <div className="col-12 col-md-12 mb-3">
                    <label>{strings['email']}</label>
                    <input type="text" />
                  </div>

                  <div className="col-12 col-md-12 mb-3">
                    <label>{strings['password']}</label>
                    <input type="text" />
                  </div>

                  <ButtonStyle classBtn="btn-style-3 hover-style-2" classCol="col-6" title={strings['continuer']}/>

                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default LoginModal;
