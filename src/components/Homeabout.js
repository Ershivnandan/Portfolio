import React from 'react';
import './compoStyle/custom.css';

export default function Homeabout() {
  return (
    <>
        <div className="container mb-4" id='about'>
            
            <div className="about-item margin-about" >
              <div className="row">
                  <div className="col-lg-6 col-md-12 col-sm-12">

                        <div className="heading-about mb-3">
                          <h1 className='mb-3'>ABOUT MYSELF</h1>
                          <span className='text-muted'>
                            <p>I am Shiv Nandan Soni and I have completed my B.Tech from Global Engineering College, Jabalpur, M.p. 
                                I have worked on web related project, sucessfully created websites that are completely responsive. I am currently
                                doing Internship at Engineering Innovation Research Lab as web Designer Intern. I have good command on HTML, CSS,Bootstrap
                                and React.js. I have also worked on Figma Designing Tool, Filmora video Editing software and FL Studio (Audio Enginering Software). </p>
                          </span>
                        </div>

                        <div className="box-item ">
                          <div className="row">
                            <div className="col-md-4">
                                <div className="wel-item">
                                  <span className='icon-box'>
                                    <i className="fa-solid fa-database"></i>
                                  </span>
                                  <h5 className='text-bold'>
                                    8.02 CGPA
                                  </h5>
                                  <span className='text-muted'>
                                    B.Tech Score
                                  </span>
                                </div>                                
                            </div>
                            <div className="col-md-4">
                                <div className="wel-item">
                                <span className='icon-box'>
                                    <i className="fa-solid fa-book"></i>
                                  </span>
                                  <h5 className='text-bold'>
                                    60%
                                  </h5>
                                  <span className='text-muted'>
                                    12th Score
                                  </span>
                                  </div>          
                            </div>
                            <div className="col-md-4">
                                <div className="wel-item">
                                <span className='icon-box'>
                                    <i className="fa-solid fa-book-open-reader"></i>
                                  </span>
                                  <h5 className='text-bold'>
                                    60%
                                  </h5>
                                  <span className='text-muted'>
                                    10th Score
                                  </span>
                                  </div>          
                            </div>
                          </div>
                        </div>
                  </div>


                  <div className="col-lg-6 col-md-12 col-sm-12">

                    <div className="container-fluid ml-3">
                        <div className="databar mt-5">
                            <div className="data-itemBar">
                              <h5 className='text-muted'>Html</h5>
                                <div className="bar">
                                  <div className="bardata-color1" role='progressbar' area-valuenow='50' aria-valuemin="0"
                                  aria-valuemax="100" ></div>
                                </div>
                            </div>
                        </div>

                        <div className="databar mt-4">
                            <div className="data-itemBar">
                              <h5 className='text-muted'>Css</h5>
                                <div className="bar">
                                  <div className="bardata-color1"></div>
                                </div>
                            </div>
                        </div>

                        <div className="databar mt-4">
                            <div className="data-itemBar">
                              <h5 className='text-muted'>Bootstrap</h5>
                                <div className="bar">
                                  <div className="bardata-color1"></div>
                                </div>
                            </div>
                        </div>

                        <div className="databar mt-4">
                            <div className="data-itemBar">
                              <h5 className='text-muted'>Java Script</h5>
                                <div className="bar">
                                  <div className="bardata-color1"></div>
                                </div>
                            </div>
                        </div>

                        <div className="databar mt-4">
                            <div className="data-itemBar">
                              <h5 className='text-muted'>React.JS</h5>
                                <div className="bar">
                                  <div className="bardata-color1"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                  </div>
              </div>
            </div>
        </div>
    </>
  )
}
