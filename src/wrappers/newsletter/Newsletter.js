import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { multilanguage } from 'redux-multilanguage'

const Newsletter = ({ strings }) => {
  return (
    <Fragment>
        <div className='newsletter-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 wrapper'>
                        <h3 className='title'>
                            {strings['nous_rejoindre']}
                        </h3>
                        <p className='text-center'> {strings['subscribe_to_newsletter']} </p>

                        <div className='col-12 col-md-10 col-lg-8 m-auto'>
                            <input className='' placeholder={strings['your_adresse']}
                            required />
                        </div>

                        <div className="fadeInUp custom-btn  btn-hover" >
                                    <Link to="/" className="outline animated rounden-btn btn-sm">
                                    {strings['acheter']}
                                    </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default multilanguage(Newsletter)