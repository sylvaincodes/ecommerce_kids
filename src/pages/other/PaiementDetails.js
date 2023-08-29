import React from "react";
import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Layout from "../../layouts/Layout";
import BreadcrumbItem from "../../components/breadcrumb/BreadcrumbItem";
import AdresseModal from "../../components/sub-componenets/AdresseModal";
import { useState } from "react";
import { Link } from "react-router-dom";

const PaiementDetails = () => {
  const [editAdresse, setEditAdresse] = useState(false);

  const selectAdresse = () =>{

  }


  return (
    <Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title> Ecommerce - Details du paiement </title>
        <meta name="description" content="Page récap paiement des produits" />
      </Helmet>

      <Layout>
        <div className="breadcrumb-area bg-gray-3">
          <div className="container-fluid">
            <div className="row">
              <ul className="breadcrumb">
                <BreadcrumbItem
                  link="/tous-les-produits"
                  title="boutique"
                ></BreadcrumbItem>
                <BreadcrumbItem link="#" title="/"></BreadcrumbItem>
                <BreadcrumbItem
                  link="#"
                  title="Détail des paiements"
                ></BreadcrumbItem>
              </ul>
            </div>
          </div>
        </div>

        <div className="checkout-details-area pt-60 pb-60">
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                <div className="checkout-details-widget adresse">
                  <h4 className="mb-3">
                    1 - <strong> Choisir une adresse de livraison </strong>
                  </h4>
                  <div className="card row  ms-3">
                    <div class="card-header">Votre adresse</div>
                    <ul className="list-group list-group-flush">
                      <li className="list-group-item">
                        <label className="flex-row">
                          <input
                            type="radio"
                            name="adresse"
                            className="radio"
                          />
                          <span>
                            {" "}
                            ADANDE SYLVAIN 229 , Fidjrosse , Cotonou, Benin
                            &nbsp;{" "}
                            <Link className="link-info">
                              Modifier ici
                              <AdresseModal
                                show={editAdresse}
                                onHide={() => setEditAdresse(false)}
                              />
                            </Link>
                          </span>
                        </label>
                      </li>

                      <li className="list-group-item">
                        <label className="flex-row">
                          <input
                            type="radio"
                            name="adresse"
                            className="radio"
                          />
                          <span>
                            {" "}
                            ADANDE SYLVAIN 229 , Fidjrosse , Cotonou, Benin
                            &nbsp;{" "}
                            <Link className="link-info">
                              Modifier ici
                              <AdresseModal
                                show={editAdresse}
                                onHide={() => setEditAdresse(false)}
                              />
                            </Link>
                          </span>
                        </label>
                      </li>
                    </ul>

                    <div class="card-footer">
                        <button className="btn btn-secondary" onClick={(e) => selectAdresse() }>
                            Sélectionner cette adresse
                        </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5">
                <div className="checkout-details-widget adresse">
                  <h4>1 Choisir une adresse de livraison</h4>
                  <div className="row">
                    <h5>Votre adresse</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

export default PaiementDetails;
