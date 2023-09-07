import React,{ useState} from "react";
import { Tab, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { multilanguage } from 'redux-multilanguage'

const ProductInformation = ({ strings }) => {

    const [desctab, setDesctab] = useState("");

    const handleDescActive = (e) =>{
        const allDescTab = document.querySelectorAll('.tab-description');
        const allDescTabContent = document.querySelectorAll('.tab-content');

        allDescTab.forEach(element => {
            element.classList.remove('active');
        });
        
        allDescTabContent.forEach(tab => {
            tab.classList.remove('active');
        });

        e.currentTarget.classList.toggle('active');
        const eventkey = e.currentTarget.getAttribute('eventkey');
        document.querySelector('.'+eventkey).classList.add('active')

    }

  return (
    <div className="description-review-area">
      <div className="product-review-wrapper">
        <div className="description-review-wrapper">
          <ul className="description-review-topbar">
            <li eventkey="aditionnalInfo" className="tab-description  active" onClick={e => handleDescActive(e)}>
              { strings['informations_additionnelles']}
            </li>
            <li eventkey="description" className="tab-description " onClick={e => handleDescActive(e)}>{ strings['description']}</li>
            <li eventkey="avis" className="tab-description" onClick={e => handleDescActive(e)}>{ strings['avis']} (3)</li>
          </ul>
          <div  className="description-review-content">
            <div className="tab-content aditionnalInfo">
              <div className="tab-content-wrapper">
                <ul>
                  <li>
                    {" "}
                    <span>{ strings['poids']} : </span> 400 g{" "}
                  </li>
                  <li>
                    {" "}
                    <span>{ strings['dimensions']} :</span> 10 x 10 cm{" "}
                  </li>
                  <li>
                    {" "}
                    <span>{ strings['materials']} :</span> 60% cotton, 40% polyester{" "}
                  </li>
                  <li>
                    {" "}
                    <span>{ strings['infos']} :</span> autres{" "}
                  </li>
                </ul>
              </div>
            </div>

            <div className="tab-content description">
              <div className="tab-content-wrapper">
                <p>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam, eaque
                  ipsa quae ab illo inventore veritatis et quasi architecto
                  beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
                  quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi
                  nesciunt. Neque porro quisquam est, qui dolorem ipsum quia
                  dolor sit amet, consectetur, adipisci velit, sed quia non
                  numquam eius modi tempora incidunt ut labore et dolore magnam
                  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
                  nostrum exercitationem ullam corporis suscipit laboriosam,
                  nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                  iure reprehenderit qui in ea voluptate velit esse quam nihil
                  molestiae consequatur, vel illum qui dolorem eum fugiat quo
                  voluptas nulla pariatur? Nor again is there anyone who loves
                  or pursues or desires to obtain pain of itself, because it is
                  pain, but because occasionally circumstances occur in which
                  toil and pain can procure him some great pleasure. To take a
                  trivial example, which of us ever undertakes laborious
                  physical exercise, except to obtain some advantage from it?
                  But who has any right to find fault with a man who chooses to
                  enjoy a pleasure that has no annoying consequences, or one who
                  avoids a pain that produces no resultant pleasure?
                </p>
              </div>
            </div>

            <div className="tab-content avis active">
              <div className="row">
                <div className="col-lg-7">
                  <div className="review-wrapper">
                    <div className="single-review">
                      <div className="review-img">
                        <img
                          src={
                            process.env.REACT_APP_PUBLIC_URL +
                            "/assets/img/testimonial/1.png"
                          }
                          alt="" className="img-fluid"
                        />
                      </div>
                      <div className="review-content">
                        <div className="review-top-wrap">
                          <div className="review-left">
                            <div className="review-name">
                              <h4>White Lewis</h4>
                            </div>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="review-left">
                            <button> {strings['repondre']} </button>
                          </div>
                        </div>
                        <div className="review-bottom">
                          <p>
                            Vestibulum ante ipsum primis aucibus orci
                            luctustrices posuere cubilia Curae Suspendisse
                            viverra ed viverra. Mauris ullarper euismod
                            vehicula. Phasellus quam nisi, congue id nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="single-review child-review">
                      <div className="review-img">
                        <img
                          src={
                            process.env.REACT_APP_PUBLIC_URL +
                            "/assets/img/testimonial/1.png"
                          }
                          alt="" className="img-fluid"
                        />
                      </div>
                      <div className="review-content">
                        <div className="review-top-wrap">
                          <div className="review-left">
                            <div className="review-name">
                              <h4>White Lewis</h4>
                            </div>
                            <div className="review-rating">
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                              <i className="fa fa-star" />
                            </div>
                          </div>
                          <div className="review-left">
                            <button>{strings['repondre']}</button>
                          </div>
                        </div>
                        <div className="review-bottom">
                          <p>
                            Vestibulum ante ipsum primis aucibus orci
                            luctustrices posuere cubilia Curae Suspendisse
                            viverra ed viverra. Mauris ullarper euismod
                            vehicula. Phasellus quam nisi, congue id nulla.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="ratting-form-wrapper pl-50">
                    <h3>{strings['add_review']}</h3>
                    <div className="ratting-form">
                      <form action="#">
                        <div className="star-box">
                          <span> {strings['note']} : </span>
                          {/* <div className="ratting-star">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                          </div> */}

                          <select className="form-control mb-3">
                            <option value="1">
                                1/5 ( {strings['je_deconseille']} )
                            </option>
                            <option value="2">
                                2/5 ( {strings['laisse_a_desire']} )
                            </option>
                            <option value="3">
                                3/5 ( {strings['satisfaisant']} )
                            </option>
                            <option value="4">
                                4/5 ( {strings['interessant']} )
                            </option>
                            <option value="5">
                                5/5 ({strings['je_recommande']} )
                            </option>
                          </select>
                          
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <div className="rating-form-style mb-10">
                              <input placeholder={strings['nom']} type="text" />
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="rating-form-style mb-10">
                              <input placeholder={strings['email']} type="email"/>
                            </div>
                          </div>
                          <div className="col-md-12">
                            <div className="rating-form-style form-submit">
                              <textarea
                                name="review"
                                placeholder={strings['commentaire']}
                                defaultValue={""}
                              />
                              <input value={strings['send']} type="submit" defaultValue="Submit"/>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default multilanguage(ProductInformation);
