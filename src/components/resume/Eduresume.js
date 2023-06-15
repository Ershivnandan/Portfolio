import React from 'react';
import '../compoStyle/custom.css';

import GlobalImg from '../Images/globalclg.jpg';
import KhalsaImg from '../Images/khalsaSchool.jpeg'

export default function Eduresume() {

    return (
        <>
            {/* Education  */}
            <div className="mt-4 mb-3">
                <ul className=" nav nav-tabs nav-sec2" id="myTab" role="tablist">
                    <li className="d-flex justify-content-center nav-item col-md-4 " role="presentation">
                        <button className="nav-link active text-center text-dark justify-content-center" id="business-tab" data-toggle="tab" data-target="#home" type="button"
                            role="tab" aria-controls="home" aria-selected="true">
                            <i className="fa-solid fa-graduation-cap"> &nbsp;</i>
                            Engineering
                        </button>
                    </li>
                    <li className=" d-flex justify-content-center nav-item col-md-4 text-center" role="presentation">
                        <button className="nav-link text-dark" id="advance-tab" data-toggle="tab" data-target="#profile" type="button"
                            role="tab" aria-controls="profile" aria-selected="false">
                            <i className="fa-solid fa-school"> &nbsp;</i>
                            12th
                        </button>
                    </li>
                    <li className=" d-flex justify-content-center nav-item col-md-4 text-center" role="presentation">
                        <button className="nav-link text-dark" id="it-tab" data-toggle="tab" data-target="#contact" type="button"
                            role="tab" aria-controls="contact" aria-selected="false">
                            <i className="fa-solid fa-chalkboard-user"> &nbsp;</i>
                            10th
                        </button>
                    </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row text-muted">
                            <div className="col-md-6">
                                <img className="imgclg" src={GlobalImg} alt="Image-building" />
                            </div>
                            <div className="col-md-6 ">
                                <p className="p-main">

                                    <p>
                                        Completed Bachelor of technology in Electronics and Communication Engineering
                                        from Baderia Global Institute of Engineering and Management, Jabalpur. I have gained 8.02/10
                                        CGPA in by B.Tech.

                                    </p>

                                    <ul className='mb-5 mt-4'>
                                        <li>4 years of Bachelor degree.</li>
                                        <li>Participated in robo race.</li>
                                        <li>Created EIRA (the chatbot) as major project</li>
                                        <li>Participated in ASTIR microchip workshop.</li>
                                        <li>Learned basic concepts of software Engineering. (extra study)</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row text-muted">
                            <div className="col-md-6">
                                <img className="imgclg" src={KhalsaImg} alt="Image-building" />
                            </div>
                            <div className="col-md-6">
                                <p className=' p-main'>
                                    <p>
                                        Completed my Heigher Secondary (12th) Study from Guru Gobind Singh Khalsa Heigher
                                        Secondary School Hindi Medium, 4th Bridge Jabalpur. I have comleted my Heigher secondary studies
                                        from Physics, Chemistry, Maths. I have gained 60/100 percentage
                                        in my heigher studies.

                                    </p>

                                    <ul>
                                        <li>Heigher Secondary in Maths/Science.</li>
                                        <li>School Headboy.</li>
                                        <li>Hosted the webinar of Motivational speaker Mr. Awais Ambar sir.</li>
                                        <li>Managed the school funcation and deciplin as Headboy.</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row text-muted img3-sec2">
                            <div className="col-md-6">
                                <img className="imgclg" src={KhalsaImg} alt="Image-building" />
                            </div>
                            <div className="col-md-6 ">
                                <p className=' p-main'>
                                    <p>
                                        Completed my Heigher Studies (10th) Study from Guru Gobind Singh Khalsa Heigher
                                        Secondary School Hindi Medium, 4th Bridge Jabalpur. I have gained 60/100 percentage
                                        in my heigher studies.

                                    </p>

                                    <ul className='mt-5 mb-4'>
                                        <li>Completed Heigh schooling.</li>
                                        <li>Heigh school headboy.</li>
                                        <li>Cultural Incharge.</li>
                                        <li>House Manager.</li>
                                    </ul>
                                </p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* Education  */}

        </>
    )
}
