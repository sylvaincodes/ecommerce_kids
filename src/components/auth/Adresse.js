import React from "react";

const Adresse = () => {
  return (
    <div className="login-area-wrapper">
      <h4 className="pb-20">Créer un compte</h4>
      <form>
        <div className="row mb-6">
          <div className="col-3 mb-3">
            <label className="d-flex align-items-center">
              Monsieur
              <input name="genre" type="radio" />
            </label>
          </div>

          <div className="col-3 mb-3">
            <label className="d-flex align-items-center">
              Madame
              <input name="genre" type="radio" />
            </label>
          </div>
        </div>

        <div className="row mb-6">
          <div className="col-12 col-md-6 mb-3">
            <label>Nom</label>
            <input type="text" />
          </div>

          <div className="col-12 col-md-6 mb-3">
            <label>Prénom</label>
            <input type="text" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>Date de naissance</label>
            <input type="text" />
          </div>

          <div className="col-12 col-md-6">
            <label>Téléphone</label>
            <input type="text" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-12 col-md-6">
            <label>Pays</label>
            <input type="text" />
          </div>
          <div className="col-12 col-md-6">
            <label>Ville</label>
            <input type="text" />
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-4">
            <label>Code postal</label>
            <input type="text" />
          </div>

          <div className="col-8">
            <label>Numéro et nom de rue</label>
            <input type="text" />
          </div>
        </div>

        <div class="d-flex flex-row bd-highlight mb-3">
          <div class="p-2 bd-highlight">
            <p>S'abonner et recevoir les bons plans Cdiscount par : </p>
            <div className="row">
              
              <label className="col-6 flex-row">
                <input type="checkbox" name="subscribe_email" className="checkbox"/>
                <span className="">EMAIL</span>
              </label>

              <label className="col-6 flex-row">
                <input type="checkbox" name="subscribe_sms" className="checkbox"/>
                <span>SMS</span>
              </label>

            </div>
          </div>
        </div>

        <button type="submit" class="btn btn-style hover-style-2">
          Continuer
        </button>
      </form>
    </div>
  );
};

export default Adresse;
