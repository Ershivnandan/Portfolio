import React from 'react';
import { useState } from 'react';


const Contact = () =>{

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
                <div className="container-fluid contact-color ">
                    <div id='footermain' className="container text-light">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 col-sm-12 margin-contact">
                                <div className="container d-flex justify-content-center contact-left">
                                    <div className="about-text mt-4">
                                        <div className="heading d-flex justify-content-center">
                                            <h3>ABOUT ME</h3>
                                        </div>
                                        <div className="about-area mt-4 mb-4">
                                            <span>My aim is to work as a software developer, engineer,
                                                or in a related position that provides key participation, team oriented tasks,
                                                healthy challenges, and career opportunities.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 margin-contact">
                                <div className="container d-flex justify-contact-center contact-right">
                                    <div className="about-text mt-4">
                                        <div className="d-flex justify-contact-center contact-right-heading">
                                            <h3>CONTACT DETAILS</h3>
                                        </div>

                                        <div className="contact-item">
                                            <ul>
                                                <li>
                                                    <div className="phone">
                                                        <span>Phone : </span>
                                                        <span>+0761-3561024</span>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="linkedin">
                                                        <span>LinkedIn : </span>
                                                        <span>shivnandansoni</span>
                                                    </div>

                                                </li>
                                                <li>
                                                    <div className="instagram">
                                                        <span>Instagram : </span>
                                                        <span>_its_shibbu_</span>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6 col-sm-12 margin-contact">
                                <div className="container d-flex justify-contact-center contact-right">
                                    <div className="about-text mt-4">
                                        <div className="d-flex justify-contact-center contact-right-heading">
                                            <h3>FOLLOW ME ON</h3>
                                        </div>
                                        <div className="navigationtoFollow">

                                            <span className='d-flex justify-content-center '>
                                                <ul className='skillList'>
                                                    <li>

                                                        <a className='gmail-deco gmail-deco1 text-light' onClick={openpopup} href='#mail-box1'>
                                                            Gmail &nbsp;
                                                            <i className="fas fa-envelope"></i>
                                                        </a>
                                                    </li>
                                                    <li>

                                                        <a className='gmail-deco text-light' href='https://www.linkedin.com/in/shivnandansoni/' target='new'>
                                                            Linkedin &nbsp;
                                                            <i className="fa-brands fa-linkedin"></i>
                                                        </a>
                                                    </li>
                                                    <li>

                                                        <a className='gmail-deco text-light' href='https://github.com/Ershivnandan' target='new'>
                                                            Github &nbsp;
                                                            <i className="fa-brands fa-github"></i>
                                                        </a>
                                                    </li>
                                                    <li>

                                                        <a className='gmail-deco text-light' href='/'>
                                                            Portfolio &nbsp;
                                                            <i className="fa-solid fa-image-portrait"></i>
                                                        </a>
                                                    </li>
                                                </ul>
                                            </span>
                                        </div>
                                    </div>
                                </div>
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
                                    <button className=' btn btn-primary mr-4' onClick={handleEmailSend}>Send Email</button>
                                    <button className=' btn btn-primary ml-2' onClick={closepopup}>Cancle</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Mail Box  */}

            </>
        )
}


export default Contact
