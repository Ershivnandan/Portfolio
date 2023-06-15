import React from 'react';
import './compoStyle/custom.css';

export default function Myeducation() {
    return (
        <>
            <div className="container d-flex justify-content-center mt-experience">
               

                <div className="container d-flex justify-content-center experience-item">
                    <ul className='list'>
                        <li>
                            <span></span>
                            <div className="data-edu">
                                <div className="d-flex text-muted">Aug 2019 - Mar 2023</div>
                                <div className="about-edu2">
                                    <h5>B.Tech</h5>
                                    <span className='text-muted'>
                                        Electronics & <br />
                                        Communication Engineering(Full Time)
                                    </span>
                                </div>
                            </div>
                        </li>
                        <li>
                            <span></span>
                            <div className="data-edu">
                                <div className="d-flex text-muted">Mar 2018 - Mar 2019</div>
                                <div className="about-edu2">
                                    <h5>Heigher Secondary (12th)</h5>
                                    <span className='text-muted'>
                                         Physics, Chemistry &<br />
                                        Maths(Part Time)
                                    </span>
                                </div>
                            </div>

                        </li>
                        <li>
                            <span></span>
                            <div className="data-edu">
                                <div className="d-flex text-muted">Mar 2016 - Mar 2017</div>
                                <div className="about-edu2">
                                    <h5>Heigh Schooling (10th)</h5>
                                    <span className='text-muted'>
                                        Heigh Schooling study<br />
                                        (Full Time)
                                    </span>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
               

            </div>
        </>
    )
}
