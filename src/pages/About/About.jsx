import React from "react";
import "./About.css";

const About = () => {
  return (
    <>
      <div className="about-main-container">
        <h1 className="about-header">About myExpenses</h1>
        <div className="banner-slider">
          <div className="deepika-slide">
            <p>
              Ready to take control of your finances? Start tracking your
              expenses today!
            </p>
          </div>
        </div>
        <div className="about-mission-container">
          <div className="about-text-container">
            <h2>Purpose And Mission</h2>
            <p className="about-para">
              Our mission is to help individuals and families manage their
              finances effortlessly and gain better control over their spending
              habits.
            </p>
          </div>
          <div className="about-img-container">
            <img
              src="/public/WhatsApp Image 2024-11-21 at 14.49.08.jpeg"
              alt="..."
              className="about-container-image"
            />
          </div>
        </div>
        <div className="feature-container">
          <h1>Features</h1>
          <div className="main-features">
            <div className="card-feature1">
              <img src="https://placeholder.com/245X150" alt="" />
              <p>Track daily, weekly, and monthly expenses.</p>
            </div>
            <div className="card-feature1">
              <img src="https://placeholder.com/245X150" alt="" />
              <p>Categorize expenses for better analysis.</p>
            </div>
            <div className="card-feature1">
              <img src="https://placeholder.com/245X150" alt="" />
              <p>Set budgets and monitor progress.</p>
            </div>
            <div className="card-feature1">
              <img src="https://placeholder.com/245X150" alt="" />
              <p>Generate detailed reports and visual charts.</p>
            </div>
          </div>
        </div>
        <div className="about-target-container">
          <p>
            Whether you're a student, a working professional, or a small
            business owner, our app is tailored to meet your expense tracking
            needs.
          </p>
          <p className="inspired">
            Inspired by the challenges of managing finances during college, we
            created this app to simplify expense tracking. It provides an
            easy-to-use platform for monitoring spending, setting budgets, and
            gaining insights into financial habits, making it accessible to
            everyone aiming to stay on top of their finances.
          </p>
        </div>
        <div className="team-section">
          <h1>Introducing the creators or contributors.</h1>
          <div className="anju">
            <img src="/public/images/members/anju.png" alt="" />
          </div>
          <div className="shalu">
            <img src="/public/images/members/shalu.png" alt="shalu" />
          </div>
          <div className="deepika">
            <img src="/public/images/members/deepika.png" alt="deepika" />
          </div>
          <div className="tulsi">
            <img src="/public/images/members/tulsi.jpg" alt="tulsi" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
