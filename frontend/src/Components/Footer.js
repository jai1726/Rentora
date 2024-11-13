import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='mt-3'>
<footer className=" flex flex-col items-center">
  <section className="">
    <div className="">
      <span>Get connected with us on social networks:</span>
    </div>
    <div>
      {/* <a href="" className="">
        <i className="fab fa">facebook</i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-twitter">twitter</i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-google">google</i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-instagram">insta</i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-linkedin">linkedin</i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab fa-github">github</i>
      </a> */}
    </div>
  </section>
  <section className="">
    <div className="container text-center text-md-start mt-5">
      <div className="flex row  gap-10 mt-3">
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3"></i>Website name
          </h6>
          <p>
          Rentora
          </p>
        </div>
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          <h6 className="text-uppercase fw-bold mb-4">
            Features
          </h6>
          <p className="text-reset">Find Home and stay effortlessly </p>
          <p className="text-reset"> Search an book  your  tommorrows stay </p>
        </div>
              
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="/InterviewExperiences" className="text-reset">Experiences</a>
          </p>
          <p>
            <a href="/FindStudent" className="text-reset">FindStudent</a>
          </p>
          <p>
            <a href="/About" className="text-reset">Profile</a>
          </p>
          <p>
            <a href="/" className="text-reset">Home</a>
          </p>
        </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3"></i> Prayagraj ,ALLAHABAD, INDIA</p>
          <p>
            <i className="fas fa-envelope me-3"></i>
            jagadeeshdende@gmail.com
          </p>
          <p><i className="fas fa-phone me-3"></i> + 91 9390386257</p>
        </div>
        
      </div>
    </div>
  </section>  

  <p>&copy; 2024 Rentora. All rights reserved.</p>

</footer>
</div>
  )
}
