import React from 'react';
import './compoStyle/custom.css';
// import Myexperience from './Myexperience';
// import Myeducation from './Myeducation';
import { Link, Outlet } from 'react-router-dom';
// import { Routes, Route} from 'react-router-dom';
// import Myexperience from './Myexperience';

export default function Homeeducation() {

  return (
    <>
        <div className="container-fluid containercolor">
            <div id='ExpEdu' className="container">
                <div className="container-eucation ">
                    <div className="container mt-5">
                        <div className="d-flex justify-content-center">
                            <Link className='btn btn-light mr-3 mt-5' to='Myexperience'>My Experience</Link>
                            <Link className='btn btn-light ml-2 mt-5' to='Myeducation'>My Education</Link>
                        </div>
                        <Outlet/>
                    </div>
      
                </div>
            </div>

        </div>
    </>
  )
}
