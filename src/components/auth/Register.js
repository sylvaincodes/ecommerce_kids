import React from "react";

const Register = ({
  setModalLogin,
  strings
}) => {
  return (
    <div className="login-area-wrapper">
      <h4 className="pb-20">{strings['creer_compte']}</h4>
      <form>

        <div className="row mb-6">
          <div className="col-12 col-md-6 mb-3">
            <label>{strings['email']}</label>
            <input type="text" />
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label>{strings['password']}</label>
            <input type="text" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>{strings['confirm_password']}</label>
            <input type="text" />
          </div>
        </div>

        <button type="submit" class="btn btn-style hover-style-2">{strings['continuer']}</button>

      </form>

      <h5>
        {strings['go_login_text']} &nbsp;
        <button onClick={() => setModalLogin(true)}>
          <strong>{strings['here']}</strong>
        </button>
      </h5>
    </div>
  );
};

export default Register;
