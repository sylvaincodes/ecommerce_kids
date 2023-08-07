import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

const Newsletter = () => {
  return (
    <Fragment>
        <div className='newsletter-area'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 wrapper'>
                        <h3 className='title'>
                            nous rejoindre
                        </h3>
                        <p className='text-center'> souscrire à notre newsletter pour recevoir nos nouvelles </p>

                        <div className='col-12 col-md-10 col-lg-8 m-auto'>
                            <input className='' placeholder="votre adresse email"
                            required />
                        </div>

                        <div className="fadeInUp custom-btn  btn-hover" >
                                    <Link to="/" className="outline animated rounden-btn btn-sm">
                                        acheter
                                    </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default Newsletter