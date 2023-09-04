import React, { Fragment } from 'react'
import Countdown from "react-countdown-now";
import Renderer from '../../components/countdown/Renderer';
import { Link } from 'react-router-dom';
import { multilanguage } from 'redux-multilanguage'

const CountdownNow = ({ dateTime,strings }) => {
  return (
    <Fragment>
        <div className='countdown-area'>
            <div className='container'>
                <div className='row gap-3 wrapper'>
                    <div className='col-12'>
                        <div className='countdown-content'>
                            <h3 className='title'>
                                {strings['offre_du_jour']}
                            </h3> 
                            <Countdown date={new Date(dateTime)} renderer={Renderer} />                        
                            <div className='custom-btn btn-hover'>
                                <Link className=' rounden-btn'>
                                {strings['acheter']} 
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className='col-12'>
                        <Link to="/">
                            <img src='./assets/img/banner/deal-4.jpg' className='img-fluid' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>
  )
}

export default multilanguage(CountdownNow)