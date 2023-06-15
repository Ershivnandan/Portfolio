import React from 'react';
import './compoStyle/custom.css';
import ShivsPic from './Images/ShivsPic.png';
import Homeabout from './Homeabout';
import Homeeducation from './Homeeducation';
import { useState } from 'react';

export default function Home() {

  // Mail Box Send 

  const [recipient, setRecipient] = useState('shivnandansoni64@gmail.com');
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');


  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleBodyChange = (event) => {
    setBody(event.target.value);
  };

  const handleEmailSend = () => {
    const emailUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = emailUrl;
    setExtraClass('');
  };
  
  
  // Mail Box Send 


  // Open Pop-Up for Email Fun 
  
  const [extraClass, setExtraClass] = useState('');
  
  const openpopup = () => {

    setExtraClass('mailbox-open');
  };
  const closepopup = () => {

    setExtraClass('');
  };
  
  // Open Pop-Up for Email Fun 

  return (


    <>
      <div className="container-fluid">

        <div className="container-fluid-home">
          {/* Contains the color of the top bar  */}
        </div>

        <div className="container HomeContainer mb-5">
          <div className="homeContent">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12 ">

                <div className="d-flex justify-content-center">
                  <img className='ProfileImage' src={ShivsPic} alt="Shiv Pic" />
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-12">

                <div className="d-block justify-content-start text-area ml-2 mb-1">
                  <span className='d-block '>
                    <h5 className='margin-intro '>HELLO EVERYBODY, I AM</h5>
                  </span>
                  <span className='d-block justify-content-center '>
                    <h1 className="mt-4">
                      SHIV NANDAN SONI
                    </h1>
                    
                  </span>

                  <span className='d-block justify-content-center'>
                    WEB DESIGNER / DEVELOPER
                  </span>

                  <span className='d-block justify-content-center mt-4 mr-2'>
                    I am working as a web developer, working command on HTML, CSS, BOOTSTRAP, REACT.JS, JS etc.
                    I have worked on different projrct based on web designing for businesses.
                  </span>

                  <div className="details-list mt-3">
                    <ul>
                      <li>
                        <span className='icon-contact2'>
                          <i className="fa-solid fa-calendar-days ico-color"></i>
                          <span className='text-dark ml-3'>28 July 2001</span>
                        </span>
                      </li>
                      <li className='mt-3'>
                        {/* onClick={mailBox} */}
                        <span onClick={() => openpopup()} className='icon-contact'  href='#mail-box1'>
                          <i className="fa-solid fa-envelope ico-color"></i>
                          <span className='text-dark ml-3 gmail-sec text-truncate'>
                            Mail Me
                          </span>
                        </span>
                      </li>
                      <li className='mt-3'>
                        <span className='icon-contact2'>
                          <i className="fa-solid fa-house ico-color"></i>
                          <span className='text-dark ml-3'>28 July 2001</span>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Mail Box  */}

            <div className="mail-box">
              <div id='mail-box1' className={`mailbox-content ${extraClass}`}>
                <div className="d-flex justify-content-center">

                      <div className=''>
                        <div className="mail-ico d-flex justify-content-center mb-3">
                            <span className='mail-ico-box '>
                                <i className="fa-sharp fa-solid fa-envelopes-bulk"></i>
                            </span>
                        </div>
                        <div>
                          <span className='mt-5'>
                            <label htmlFor="subject">Subject</label>
                          </span>
                          <input className='input-group' type="text" id="subject" value={subject} onChange={handleSubjectChange} />
                        </div>
                        <div>
                          
                            <span className='d-block mt-3'>
                              <label htmlFor="body">Enter Your Message</label>
                            </span>
                            <span>

                                 <textarea id="text-body" value={body} onChange={handleBodyChange} />
                            </span>
                          
                        </div>
                        <div className="btn-area">
                          <button className= ' btn btn-primary mr-4' onClick={handleEmailSend}>Send Email</button>
                          <button className= ' btn btn-primary ml-2' onClick={closepopup}>Cancle</button>
                        </div>
                      </div>

                </div>
              </div>
            </div>

            {/* Mail Box  */}
          </div>


        </div>



        <Homeabout />

        <Homeeducation />


      </div>



    </>

  )
}



