import React from 'react';
import { NavLink } from 'react-router-dom';
const Common = (props) => {
    return (
        <>
            <section id='header' className=' d-flex align-items-center'>
                <div className="container-fluid">
                    <div className="row ">
                        <div className="col-10 mx-auto">
                            <div className="row" >
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1 >{props.name} <br /> <strong className='brand-name'>My Business App</strong></h1>
                                    <h2 className='my-3'>
                                        We are the team of talented developer making websites.
                                    </h2>
                                    <div className="mt-3">
                                        <NavLink to={props.visit} className='btn btn-outline-primary'>{props.btnname}</NavLink>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1  header-img text-center">
                                    <img src={props.imgsrc} className='position-relative img-fluid animated' alt="" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Common;