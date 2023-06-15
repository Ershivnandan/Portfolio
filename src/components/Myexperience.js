import React from 'react';
import './compoStyle/custom.css';

export default function Myexperience() {
  return (
   <>
        <div className="container d-flex justify-content-center mt-experience">

            <div className="experience-item">
                <ul className='list'>
                    <li>
                        <span></span>
                        <div className="data-edu">
                            <div className="d-flex text-muted">Aug 2017 - Current</div>
                            <div className="about-edu">
                                <h5>Filmora Video Editing</h5>
                                <span className='text-muted'>
                                    Video Editing <br />
                                    color filtring (Part Time)
                                </span>
                            </div>
                        </div>

                    </li>
                    <li>
                        <span></span>
                            <div className="data-edu">
                                <div className="d-flex text-muted">Aug 2018 - Aug 2023</div>
                                <div className="about-edu">
                                    <h5>Audio Engineering</h5>
                                    <span className='text-muted'>
                                        Audio Editing / Recording <br />
                                        Music Editing (Part Time)
                                    </span>
                                </div>
                            </div>

                    </li>
                    <li>
                        <span></span>
                            <div className="data-edu">
                                <div className="d-flex text-muted">Jan 2022 - Current</div>
                                <div className="about-edu">
                                    <h5>Web Development</h5>
                                    <span className='text-muted'>
                                        Web Designing <br />
                                        (Part Time / Experience)
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
