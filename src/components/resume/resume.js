import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Eduresume from './Eduresume';
import Projectstraining from './Projects&training';
import Technicalskill from './Technicalskill';


// import { Document, Page } from 'react-pdf';


const Resume = () => {

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


  const navigateDestination = useNavigate();

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
      <div className="container-fluid mt-5">
        <div className="d-flex justify-content-center">
          <span className='text-dark'>
            <h1>Shiv Nandan's Resume</h1>
          </span>

        </div>

        <div className="shivs-resume mt-4 mb-5">
          <div className="container shivResrmecont">

            <div className="headingitems mt-3">
              <h3>Shiv Nandan Soni</h3>
              <span>482002, <i class="fa-solid fa-location-pin"></i> Jabalpur M.p.</span>
              <span className='d-flex justify-content-center'>
                <a className='gmail-deco gmail-deco1 mr-4' onClick={openpopup} href='#mail-box1'>
                  Gmail &nbsp;
                  <i className="fas fa-envelope"></i>
                </a>
                <a className='gmail-deco ml-4 mr-4' href='https://www.linkedin.com/in/shivnandansoni/' target='new'>
                  Linkedin &nbsp;
                  <i className="fa-brands fa-linkedin"></i>
                </a>
                <a className='gmail-deco ml-4 mr-4' href='https://github.com/Ershivnandan' target='new'>
                  Github &nbsp;
                  <i className="fa-brands fa-github"></i>
                </a>
                <a className='gmail-deco ml-4 mr-4' href='/'>
                  Portfolio &nbsp;
                  <i className="fa-solid fa-image-portrait"></i>
                </a>
              </span>
              <hr />
            </div>
            <div className="d-flex justify-content-start mt-3">
              <span className='text-dark'>
                <h3>Education</h3>
              </span>

            </div>
            <Eduresume />
            <div className="d-flex justify-content-start mt-3">
              <span className='text-dark'>
                <h3>Projects & Trainings</h3>
              </span>
            </div>

            <Projectstraining />
            <div className="d-flex justify-content-start mt-3">
              <span className='text-dark'>
                <h3>Technical Skills</h3>
              </span>
            </div>
            <Technicalskill/>
          </div>
        </div>


      </div>

      {/* Mail Box  */}

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
                <button className=' btn btn-primary mr-4' onClick={handleEmailSend}>Send Email</button>
                <button className=' btn btn-primary ml-2' onClick={closepopup}>Cancle</button>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Mail Box  */}
      {/* Mail Box  */}



      <div className="container">
        <div className="d-flex justify-content-center">
          <button onClick={() => navigateDestination('/')} id='navtoabout' className="btn btn-dark m-3">Go to Home</button>
        </div>
      </div>


    </>
  )
}

export default Resume
