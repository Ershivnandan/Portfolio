import React from 'react'
import { useNavigate } from 'react-router-dom';
import Homeabout from './Homeabout';

export default function About() {

  const navigateDestination = useNavigate();

  return (
    <>
      <div className="container-fluid mt-3 mb-5">
        <Homeabout/>
      </div>

      <div className="container mt-3 mb-5">
            <div className="d-flex justify-content-center">
              <button onClick={ () => navigateDestination('/') } id='navtoabout' className="btn btn-dark m-3">Go to Home</button>
            </div>
        </div>
      
    </>
  )
}
