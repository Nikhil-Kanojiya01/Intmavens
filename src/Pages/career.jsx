import React from "react";
import { useForm } from "react-hook-form";
import careerImg from "../assets/images/career.png";

const Career = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Career Form Data:", data);
    alert("Application submitted. We'll review and get back to you.");
    reset();
  };

  return (
    <div className="career-page">
      <div className="container">

        <div className="career-container">
          <div className="career-card">
            <div className="career-form">
              <h2 className="section-title">Career With Us</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-input ${errors.name ? "form-input--error" : ""}`}
                  placeholder="Name"
                  {...register("name", { required: "Name is required" })}
                />
                {errors.name && <span className="form-error">{errors.name.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`form-input ${errors.email ? "form-input--error" : ""}`}
                  placeholder="Email"
                  {...register("email", { required: "Email is required" })}
                />
                {errors.email && <span className="form-error">{errors.email.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  className={`form-input ${errors.phone ? "form-input--error" : ""}`}
                  placeholder="Phone"
                  {...register("phone", { required: "Phone is required" })}
                />
                {errors.phone && <span className="form-error">{errors.phone.message}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="role" className="form-label">
                  Job Role
                </label>
                <input
                  id="role"
                  type="text"
                  className="form-input"
                  placeholder="Job Role"
                  {...register("role")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cv" className="form-label">
                  Upload CV
                </label>
                <input id="cv" type="file" className="file-input" {...register("cv")}
                />
              </div>

              <div className="form-group form-group--checkbox">
                <label className="checkbox-label">
                  <input type="checkbox" className="checkbox-input" {...register("terms", { required: true })} />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">I agree to <a href="#">terms and conditions</a></span>
                </label>
              </div>

              <button type="submit" className="btn btn--primary">
                Apply Now
              </button>
            </form>
            </div>
            <div className="career-image">
              <img src={careerImg} alt="Career" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
