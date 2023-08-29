import React from "react";

const Register = ({
  setModalLogin
}) => {
  return (
    <div className="login-area-wrapper">
      <h4 className="pb-20">Créer un compte</h4>
      <form>

        <div className="row mb-6">
          <div className="col-12 col-md-6 mb-3">
            <label>Email</label>
            <input type="text" />
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label>Mot de passe</label>
            <input type="text" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>Confirmer le mot de passe</label>
            <input type="text" />
          </div>
        </div>

        <button type="submit" class="btn btn-style hover-style-2">Continuer</button>

      </form>

      <h5>
        Vous aviez déja un compte ? Se connecter &nbsp;
        <button onClick={() => setModalLogin(true)}>
          <strong>ICI</strong>
        </button>
      </h5>
    </div>
  );
};

export default Register;
