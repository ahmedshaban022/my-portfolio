
import { toast } from 'react-toastify';
import React, { useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './style.css'
import Aos from 'aos';
import "aos/dist/aos.css";
import Ramadan from './Ramadan';



function Sections(props) {

  useEffect(() => {
    Aos.init({duration:2000})
   
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('ain-gmail2022', 'template_9nrj12q', form.current, 'user_q5dj805yURXDa88Cf1Yt1')
      .then((result) => {
          toast.success('Message Sent ');
          e.target.reset();
      }, (error) => {
        toast.error('Message Not Sent for API reasons!')
      });
  };
    return (
        <>
        
            <section className="home  py-5" id="home" data-aos="fade-down">
          <div className="container-lg">
            <div className="row min-vh-100 align-items-center align-content-center">
            
              <div className="col-md-6 mt-5 mt-md-0">
                <div className="home-img">
                  <img style={{width: '400px'}} className="rounded-circle mw-100 mh-50" src={require("../imgs/Ahmed Shaban.PNG")} alt="Profile image" />
                </div>
              </div>
              <div className="col-md-6 mt-5 mt-md-0 order-md-first">
                <div className="home-text">
                  <p className="text-muted mb-1">Hello I'm</p>
                  <h1 className="text-danger text-uppercase fs-1 fw-bold">
                    Web Developer
                  </h1>
                  <h2 className="fs-4">Ahmed Shaban</h2>
                  <p className="mt-4 text-muted">
                      Full stack Web Development Using MEARN
                  </p>
                  <a className="btn btn-danger px-3 mt-3" onClick={()=>toast.info('My Works')} href="#portfolio">My Work</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="about py-5" id="about"  data-aos="fade-up">
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="fw-bold mb-5">About Me</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="about-text">
                  <h3 className="fs-4 mb-3">
                  Front-end and Back-end development 
                  </h3>
                  <p className="text-muted">
                  Software engineering fundamentals  ITI (3month)
                  </p>
                  <p className="text-muted">
                  Full stack web development using MEARN ITI (3month)
                  </p>
                </div>
                <div className="about-text">
                  <h3 className="fs-4 mb-3">
                  Work Experience 
                  </h3>
                  <p className="text-muted">
                  Full Stack Developer Using MERN At AutoService , Kuwait (Remote)
                   <br/>
                   <small className="text-muted">
                  From  July-2022 - Untile Now
                  </small>
                  </p>
                </div>
                
                <div className="row">
                  <div className="col-lg-12 d-flex align-items-center">
                    <a href={require("../files/Ahmed Shaban.pdf")}  onClick={()=>toast.success('CV Downloaded')} download className="btn btn-danger me-5 px-3">Download CV</a>
                    <div className="social-links fs-4 ">
                      <a href="https://www.facebook.com/assassin2022/"  target="_blank" className="text-dark me-2 "><i className="fab fa-facebook text-primary" /></a>
                      <a href="#" target="_blank" className="text-dark me-2"><i className="fab fa-twitter text-primary" /></a>
                      <a href="#"  target="_blank" className="text-dark me-2"><i className="fab fa-instagram text-danger" /></a>
                      <a href="https://www.linkedin.com/in/ahmed-shaban-1756b5227/" target="_blank"  className="text-dark me-2 "><i className="fab fa-linkedin-in text-primary" /></a>
                      <a href="https://wa.link/cn1cuw" target="_blank"  className="text-dark me-2"><i className="fab fa-whatsapp text-success"></i></a>
                      
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 mt-5 mt-md-0">
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Html</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={100} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Css</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Javascript</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={80} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Bootstrap</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '100%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">React JS</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Angular</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Node Js</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '85%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">Mongo DB</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">C#</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '35%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">C++</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '35%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
                <div className="skill-item mb-4">
                  <h3 className="fs-6">C</h3>
                  <div className="progress" style={{height: '5px'}}>
                    <div className="progress-bar bg-danger" role="progressbar" style={{width: '40%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="services py-5" id="services">
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="fw-bold mb-5"  data-aos="flip-down">What I Do</h2>
                </div>
              </div>
            </div>
            <div className="row text-center">
              <div className="col-md-12 col-lg-6 mb-4" data-aos="fade-right">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                  <div className="icon my-3 text-danger fs-2">
                    <i className="fas fa-code" />
                  </div>
                  <h3 className="fs-5 py-2">Web Development</h3>
                  <p className="text-muted">
                 
                 Building  Web Applications with high quality , performance and security
                  </p>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 mb-4"  data-aos="fade-left">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                  <div className="icon my-3 text-danger fs-2">
                    <i className="fas fa-lightbulb" />
                  </div>
                  <h3 className="fs-5 py-2">Creative Design</h3>
                  <p className="text-muted">
                  You will get the right design for you and the possibility of modification and maintenance

                  </p>
                </div>
              </div>
              {/* <div className="col-md-6 col-lg-4 mb-4">
                <div className="service-item shadow-sm p-4 rounded bg-white">
                  <div className="icon my-3 text-danger fs-2">
                    <i className="fas fa-mobile-alt" />
                  </div>
                  <h3 className="fs-5 py-2">Mobile Apps</h3>
                  <p className="text-muted">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit,
                    iusto?
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
        <section className="portfolio py-5" id="portfolio" data-aos="zoom-out-up">
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="fw-bold mb-5">Latest Works</h2>
                </div>
              </div>
            </div>
            <div className="row">

            <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up-right">
                  <img className="w-100 img-thumbnail" src={require("../projects/Ua-Shop.png")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">UA-Shop (MERN)</h3>
                  <p className="mb-4">
                    <a href="https://ua-shop.herokuapp.com" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up">
                  <img className="w-100 img-thumbnail" src={require("../projects/Aim-Tech..Task.png")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">  Cooking Recipes (MERN)</h3>
                  <p className="mb-4">
                    <a href="https://aim-cooking-recipes.herokuapp.com/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up-left">
                  <img className="w-100 img-thumbnail" src={require("../projects/chat-app.png")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">Chat App (MERN)</h3>
                  <p className="mb-4">
                    <a href="https://ua-live-chat.herokuapp.com/chats" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up-right">
                  <img className="w-100 img-thumbnail" src={require("../projects/souq-abnoud.jpg")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">Souq Abnoud (MERN)</h3>
                  <p className="mb-4">
                    <a href="https://ahmedshaban022.github.io/souq-abnoud/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>


            
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up">
                  <img className="w-100 img-thumbnail" src={require("../projects/trans.PNG")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">  Booking-DashBoard (MEAN)</h3>
                  <p className="mb-4">
                    <a href="https://booking-admin-dashboard.netlify.app/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up-left">
                  <img className="w-100 img-thumbnail" src={require("../projects/UA-Todo.PNG")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">Todo (MERN)</h3>
                  <p className="mb-4">
                    <a href="https://ua-todo.herokuapp.com/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up-right">
                  <img className="w-100 img-thumbnail" src={require("../projects/pte-admin.PNG")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">PTE-Admin Dashboard (React)</h3>
                  <p className="mb-4">
                    <a href="https://ahmedshaban022.github.io/pte-task-admin-panel/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up">
                  <img className="w-100 img-thumbnail" src={require("../projects/Yello.png")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">Yello-Posts (MERN)</h3>
                  <p className="mb-4">
                    <a href="http://yello-task.herokuapp.com/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>
            
            
             
             
              <div className="col-md-6 col-lg-4">
                <div className="portfolio-item" data-aos="fade-up-left">
                  <img className="w-100 img-thumbnail" src={require("../projects/5.PNG")} alt="portfolio image" />
                  <h3 className="text-capitalize fs-5 my-2">Javascript Games</h3>
                  <p className="mb-4">
                    <a href="https://ahmedshaban022.github.io/JS-Games/" target="_blank" className="text-danger text-decoration-none">Live Demo</a>
                  </p>
                </div>
              </div>
             
            </div>
          </div>
        </section>
        <section className="freelance-availbe py-5 bg-danger">
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8 text-center">
                <p className="text-light fs-5">Do you have any project</p>
                <h2 className="fs-1 text-white mb-4">
                  I'm Available For Freelance Projects
                </h2>
                <a href="#contact" className="btn btn-outline-light">Hire Me</a>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="testimonials py-5" id="testimonials">
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="fw-bold mb-5">Testimonials</h2>
                </div>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-8 col-xl-7">
                <div id="carousel1" className="carousel slide" data-bs-ride="carousel">
                  <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to={0} className="active bg-danger" aria-current="true" aria-label="Slide 1" />
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to={1} className="bg-danger" aria-label="Slide 2" />
                    <button type="button" data-bs-target="#carousel1" data-bs-slide-to={2} className="bg-danger" aria-label="Slide 3" />
                  </div>
                  <div className="carousel-inner p-1">
                    <div className="testi-item carousel-item active bg-white shadow-sm rounded p-4 mb-5">
                      <div className="testi-author-info d-flex align-items-center">
                        <img style={{width: '80px'}} className="img-thumbnail rounded-circle" src={require("../Revs/2.jpg")} alt="author img" />
                        <div className="author ms-3">
                          <h3 className="fs-5 mb-1">Jhone Doe</h3>
                          <p className="text-muted m-0">Network Adminstrator</p>
                        </div>
                      </div>
                      <p className="text-muted mt-3">
                        Lorem ipsum dolor sit amet consectetur Reiciendis recusandae
                        repellendus laboriosam fugit, omnis natus!
                      </p>
                      <div className="ratings text-danger">
                        <i className="fas fa-star" /> <i className="fas fa-star" />
                        <i className="fas fa-star" /> <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testi-item carousel-item bg-white shadow-sm rounded p-4 mb-5">
                      <div className="testi-author-info d-flex align-items-center">
                        <img style={{width: '80px'}} className="img-thumbnail rounded-circle" src={require("../Revs/1ss.jfif")} alt="author img" />
                        <div className="author ms-3">
                          <h3 className="fs-5 mb-1">Jack Adrian</h3>
                          <p className="text-muted m-0">Graphic Designer</p>
                        </div>
                      </div>
                      <p className="text-muted mt-3">
                        Lorem ipsum dolor sit amet consectetur Reiciendis recusandae
                        repellendus laboriosam fugit, omnis natus!
                      </p>
                      <div className="ratings text-danger">
                        <i className="fas fa-star" /> <i className="fas fa-star" />
                        <i className="fas fa-star" /> <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                    <div className="testi-item bg-white carousel-item shadow-sm rounded p-4 mb-5">
                      <div className="testi-author-info d-flex align-items-center">
                        <img style={{width: '80px'}} className="img-thumbnail rounded-circle" src={require("../Revs/2.jfif")} alt="author img" />
                        <div className="author ms-3">
                          <h3 className="fs-5 mb-1">Lewis Jone</h3>
                          <p className="text-muted m-0">Ui &amp; UX Designer</p>
                        </div>
                      </div>
                      <p className="text-muted mt-3">
                        Lorem ipsum dolor sit amet consectetur Reiciendis recusandae
                        repellendus laboriosam fugit, omnis natus!
                      </p>
                      <div className="ratings text-danger">
                        <i className="fas fa-star" /> <i className="fas fa-star" />
                        <i className="fas fa-star" /> <i className="fas fa-star" />
                        <i className="fas fa-star" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        <section className="contact py-5" id="contact" data-aos="fade-down" >
          <div className="container-lg py-4">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="section-title text-center">
                  <h2 className="fw-bold mb-5">Contact Me</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-5">
                <div className="contact-item d-flex mb-3">
                  <div className="icon fs-4 text-danger">
                    <i className="fas fa-envelope" />
                  </div>
                  <div className="text ms-3">
                    <h3 className="fs-5">Email</h3>
                    <p className="text-muted">ahmedshaban.ua007@gmail.com</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-3">
                  <div className="icon fs-4 text-danger">
                    <i className="fas fa-phone" />
                  </div>
                  <div className="text ms-3">
                    <h3 className="fs-5">Phone</h3>
                    <p className="text-muted">+201152592726</p>
                  </div>
                </div>
                <div className="contact-item d-flex mb-3">
                  <div className="icon fs-4 text-danger">
                    <i className="fas fa-map-marker-alt" />
                  </div>
                  <div className="text ms-3">
                    <h3 className="fs-5">Visit Office</h3>
                    <p className="text-muted">Egypt Qena SVU</p>
                  </div>
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact-form">
                  <form ref={form} onSubmit={sendEmail}>
                    <div className="row">
                      <div className="col-lg-6 mb-4">
                        <input type="text" required placeholder="Your Name" name="user_name" className="form-control form-control-lg fs-6 border-0 shadow-sm" />
                      </div>
                      <div className="col-lg-6 mb-4">
                        <input type="email" required placeholder="Your Email" name="user_email"  className="form-control form-control-lg fs-6 border-0 shadow-sm" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12 mb-4">
                        <input type="text" required placeholder="Subject" name="subject" className="form-control form-control-lg fs-6 border-0 shadow-sm" />
                      </div>
                    </div>
                    <div className="row"> 
                      <div className="col-lg-12 mb-4">
                        <textarea rows={5} required placeholder="Your Message" name="message" className="form-control form-control-lg fs-6 border-0 shadow-sm" defaultValue={""} />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button type="submit" className="btn btn-danger px-3" data-aos="fade-up">
                          Send Message
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    );
}

export default Sections;
