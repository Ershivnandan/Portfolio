import React from 'react';



export default function Projectstraining() {

    const swiftUpElements = document.querySelectorAll('.swift-up-text');

    swiftUpElements.forEach(elem => {

        const words = elem.textContent.split(' ');
        elem.innerHTML = '';

        words.forEach((el, index) => {
            words[index] = `<span><i>${words[index]}</i></span>`;
        });

        elem.innerHTML = words.join(' ');

        const children = document.querySelectorAll('span > i');
        children.forEach((node, index) => {
            node.style.animationDelay = `${index * .2}s`;
        });

    });


    return (
        <>
            <div className="container-fluid mt-3">
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="container carousel-item active">
                            <div className="d-flex justify-content-center mt-3">
                                <h3 className='text-dark'>Eira : The guide bot</h3>
                            </div>

                            <div className="aboutpro d-flex justify-content-start mt-5 mb-5 mr-3 ml-3">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <span className='d-block'>
                                            Eira is an A.I. powred chat bot specially created & designed for such situatuions
                                            where the human might be unknown from the building/area. This guide bot helps people
                                            to aware about the places. Eira can chat with human and it can understand all the languages
                                            and generate the response according to the query. This robot is consist of google voice API to
                                            undrstand the different languages and generated the response.
                                        </span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <ul className='mt-3 mb-4'>
                                            <li>Python Programming language</li>
                                            <li>NumPy, NLTK, PyGlet, PyAudio.</li>
                                            <li>Google Voice API.</li>
                                            <li>Electronic Hardware.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>


                        </div>
                        <div className="container carousel-item">
                            <div className="d-flex justify-content-center mt-3">
                                <h3 className='text-dark'>Robot Car: A spy car</h3>
                            </div>

                            <div className="aboutpro d-flex justify-content-start mt-5 mb-5 mr-3 ml-3">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <span className='d-block'>
                                            The Robo car is designed for those situatuions where the normal human can not interfare,
                                            this car can run byitself and it can also control by the user with the help of an mobile application.
                                            The robo car is made for the robo rase organised by Global Engineering College.
                                            This car could be controlled by the voice recognition and it can avoide the obsticals
                                            with the help of ultrasonic sensor.

                                        </span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <ul className='mt-3 mb-4'>
                                            <li>Arduino Uno</li>
                                            <li>C++ Programming</li>
                                            <li>Ultrasonic Sensor, Motor Driver, Bluetooth Module, Microphone sensor.</li>
                                            <li>Arduino driver Application.</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="container carousel-item">
                            <div className="d-flex justify-content-center mt-3">
                                <h3 className='text-dark'>Anshuiya Foundation: Website</h3>
                            </div>

                            <div className="aboutpro d-flex justify-content-start mt-5 mb-5 mr-3 ml-3">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <span className='d-block'>
                                            Designed the frontend of the Anshuiya Foundation Website. This project assigned by the
                                            Engineering Innovation Research Lab team to generate the completely responsive and animated
                                            web page for the Anshuiya Foundation Trust. In this website different kind of components have been created
                                            and designed for the better User Experience.
                                        </span>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <ul className='mt-3 mb-4'>
                                            <li>Hyper Text Markup Language (HTMl-5)</li>
                                            <li>Cascading style sheet (CSS)</li>
                                            <li>Bootstrap</li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-target="#carouselExampleControls" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-target="#carouselExampleControls" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </button>
                </div>

                <hr />
                {/* Work Experience  */}

                <div className="container-fluid mt-3">
                    <div className="d-flex justify-content-start mt-3">
                        <span className='text-dark'>
                            <h3>Work Experience</h3>
                        </span>
                    </div>

                    <div className="container mt-3 mb-3">
                        <div className="d-flex justify-content-center mt-3">
                            <h3 className='text-dark'>Engineering Innovation Research Lab</h3>
                        </div>
                        <div className="d-flex justify-content-start mt-5 mb-3 typewriter">

                           
                            <span id="typingSpan" className='swift-up-text'>
                                Working as Web Developer/ Designer Intern at Engineering Innovation Research Lab, Jabalpur.
                                Working as a web developer, I am responsible for the coding innovative designs and layouts of the
                                various websites, also responsible for building websites from concepts all the way to completion from the
                                bottom up, fashioning everything from the homepage to side layout and functions.
                            </span>

                        </div>
                    </div>
                </div>

                {/* Work Experience  */}
            </div>
            <hr />

        </>
    )
}
