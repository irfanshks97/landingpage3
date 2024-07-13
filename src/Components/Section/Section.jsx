import React from "react";
import banner from "../../assets/images/banner.png";
import "./Section.css";
export default function Section() {
  return (
    <div className="section w-100">
      <div className="image">
        <img src={banner} className="shadow banner" />
      </div>
      <div className="content row p-5">
        <div className="col-sm-6 order-sm-1 order-2 p-md-5 p-4">
          <p>
            Looking for ways to be more efficient with your business IT? Trying
            to make the busineess case for data investment? Read this Forrester
            report to learn how to develop a business go-to team that informs
            your data strategy and frame that strategy as a business success
            story.
          </p>
          <p>
            This independent report provides helpful insights to improve your
            data management model, better engage with stakeholders, and build
            business strategy into your data management efforts.
          </p>
        </div>
        <div className="col-12 col-sm-6 order-sm-2 order-1">
          <h1 className="mb-3 mb-sm-0">Download Now</h1>
          <p className="paragraph">Simply fill out this form to download</p>
          <form
            action="/submit"
            method="post"
            className="p-md-5 p-4 justify-content-start shadow"
          >
            <div className="required-wrapper">
              <input
                type="text"
                placeholder="First Name"
                className="form-control required"
              />
            </div>

            <br />
            <div className="required-wrapper">
              <input
                type="text"
                placeholder="Last Name"
                className="form-control required"
              />
            </div>
            <br />
            <div className="required-wrapper">
              <input
                type="text"
                placeholder="Work Email"
                className="form-control required"
              />
            </div>
            <br />
            <div className="required-wrapper">
              <input
                type="text"
                placeholder="Company Name"
                className="form-control required"
              />
            </div>
            <br />
            <div className="required-wrapper">
              <select className="form-select required">
                <option value="">Job Title</option>
                <option value="Software developer">Software Developer</option>
                <option value="Software tester">Software Tester</option>
                <option value="Business analyst">Business Analyst</option>
                <option value="Cyber security">Cyber Security</option>
                <option value="Data Analyst">Data Analyst</option>
                <option value="Cyber security">Frontend Developer</option>
              </select>
            </div>
            <br />
            <div className="required-wrapper">
              <select className="form-select">
                <option value="">Select country...</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UAE">UAE</option>
                <option value="Australia">Australia</option>
                <option value="Pakistan">Pakistan</option>
                <option value="Afganistan">Afganistan</option>
              </select>
            </div>
            <br />
            <button type="submit" className="button">
              Download Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
