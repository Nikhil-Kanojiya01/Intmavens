import React, { useState } from "react";
import { useForm } from "react-hook-form";
import careerImg from "../assets/images/career.png";

const Career = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSuccessMessage("");
    setErrorMessage("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";
      const endpoint = `${API_URL}/api/mail/career`;

      console.log("🔵 Submitting to:", endpoint);
      console.log("📤 Data:", {
        name: data.name,
        email: data.email,
        phone: data.phone,
        role: data.role || "Not specified",
        message: "Career application submitted",
      });

      // Note: CV file handling will be implemented separately
      // For now, we send the basic form data
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          role: data.role || "Not specified",
          message: `Career application for ${data.role || "open position"}`,
        }),
      });

      console.log("📥 Response status:", response.status);

      const result = await response.json();
      console.log("📥 Response data:", result);

      if (result.ok) {
        setSuccessMessage("✅ Application submitted successfully! We'll review and get back to you soon.");
        reset();
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000);
      } else {
        setErrorMessage(result.error || "Failed to submit application. Please try again.");
      }
    } catch (err) {
      console.error("❌ Error submitting application:", err);
      setErrorMessage(
        "Unable to connect to server. Please ensure the backend is running on http://localhost:4000"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="career-page">
      <div className="container">

        <div className="career-container">
          <div className="career-card">
            <div className="career-form">
              <h2 className="section-title">Career With Us</h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                {successMessage && (
                  <div
                    className="form-success"
                    style={{
                      padding: "12px",
                      marginBottom: "20px",
                      backgroundColor: "#efe",
                      color: "#3c3",
                      borderRadius: "4px",
                      border: "1px solid #3c3",
                    }}
                  >
                    {successMessage}
                  </div>
                )}

                {errorMessage && (
                  <div
                    className="form-error"
                    style={{
                      padding: "12px",
                      marginBottom: "20px",
                      backgroundColor: "#fee",
                      color: "#c33",
                      borderRadius: "4px",
                      border: "1px solid #fcc",
                    }}
                  >
                    {errorMessage}
                  </div>
                )}

              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  className={`form-input ${errors.name ? "form-input--error" : ""}`}
                  placeholder="Name"
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  placeholder="Job Role (Optional)"
                  disabled={loading}
                  {...register("role")}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cv" className="form-label">
                  Upload CV
                </label>
                <input 
                  id="cv" 
                  type="file" 
                  className="file-input" 
                  disabled={loading}
                  {...register("cv")}
                />
                <small style={{ color: "#666", marginTop: "4px", display: "block" }}>
                  CV upload logic will be implemented separately
                </small>
              </div>

              <div className="form-group form-group--checkbox">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    className="checkbox-input" 
                    disabled={loading}
                    {...register("terms", { required: true })} 
                  />
                  <span className="checkbox-custom"></span>
                  <span className="checkbox-text">I agree to <a href="#">terms and conditions</a></span>
                </label>
              </div>

              <button 
                type="submit" 
                className="btn btn--primary"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Apply Now"}
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
