import { useForm } from "react-hook-form";
import { useState } from "react";
import formImage from "../assets/images/form-image.jpg";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmit = async (data) => {
    setLoading(true);
    setSubmitStatus(null);
    setErrorMessage("");

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';
      
      console.log('🔵 Submitting to:', `${API_URL}/api/mail/contact`);
      console.log('📤 Data:', data);

      const response = await fetch(`${API_URL}/api/mail/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await response.json();
      console.log('📥 Response:', result);

      if (result.ok) {
        setSubmitStatus('success');
        reset();
        setTimeout(() => setSubmitStatus(null), 5000);
      } else {
        setSubmitStatus('error');
        setErrorMessage(result.error || 'Failed to submit. Please try again.');
      }
    } catch (err) {
      console.error('❌ Error:', err);
      setSubmitStatus('error');
      setErrorMessage('Unable to connect to server. Please ensure the backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-container">
          {/* Left Side - Contact Information */}
          <div className="contact-info">
            <div className="contact-info__image">
              <img
                src={formImage}
                alt="Contact Us"
                className="contact-info__bg-image"
              />
            </div>
            <div className="contact-info__content">
              <h2 className="contact-info__title">Reach us</h2>

              <div className="contact-info__items">
                <a
                  href="mailto:contactus@intmavens.com"
                  className="contact-info__item"
                >
                  <div className="contact-info__icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-info__details">
                    <span className="contact-info__label">Email</span>
                    <span className="contact-info__value">
                      contactus@intmavens.com
                    </span>
                  </div>
                </a>

                <a href="tel:+917972143020" className="contact-info__item">
                  <div className="contact-info__icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-info__details">
                    <span className="contact-info__label">Phone</span>
                    <span className="contact-info__value">
                      +91-7972143020
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="contact-form-section">
            <div className="contact-form__content">
              <h2 className="contact-form__title">Get in Touch</h2>

              {/* Success Message */}
              {submitStatus === 'success' && (
                <div style={{
                  padding: '15px',
                  marginBottom: '20px',
                  backgroundColor: '#d4edda',
                  color: '#155724',
                  borderRadius: '4px',
                  border: '1px solid #c3e6cb'
                }}>
                  ✅ Thank you for your message! We will get back to you soon.
                  <br />
                  <small>Confirmation emails have been sent to both you and our team.</small>
                </div>
              )}

              {/* Error Message */}
              {submitStatus === 'error' && (
                <div style={{
                  padding: '15px',
                  marginBottom: '20px',
                  backgroundColor: '#f8d7da',
                  color: '#721c24',
                  borderRadius: '4px',
                  border: '1px solid #f5c6cb'
                }}>
                  ❌ {errorMessage}
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`form-input ${
                      errors.name ? "form-input--error" : ""
                    }`}
                    placeholder="Name"
                    disabled={loading}
                    {...register("name", {
                      required: "Name is required",
                      minLength: {
                        value: 2,
                        message: "Name must be at least 2 characters",
                      },
                    })}
                  />
                  {errors.name && (
                    <span className="form-error">{errors.name.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`form-input ${
                      errors.email ? "form-input--error" : ""
                    }`}
                    placeholder="Email"
                    disabled={loading}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    })}
                  />
                  {errors.email && (
                    <span className="form-error">{errors.email.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="phone" className="form-label">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`form-input ${
                      errors.phone ? "form-input--error" : ""
                    }`}
                    placeholder="Phone"
                    disabled={loading}
                    {...register("phone", {
                      required: "Phone is required",
                      pattern: {
                        value: /^[+]?[\d\s\-()]{10,}$/,
                        message: "Invalid phone number",
                      },
                    })}
                  />
                  {errors.phone && (
                    <span className="form-error">{errors.phone.message}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows="5"
                    className={`form-input form-textarea ${
                      errors.message ? "form-input--error" : ""
                    }`}
                    placeholder="Message"
                    disabled={loading}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 10,
                        message: "Message must be at least 10 characters",
                      },
                    })}
                  ></textarea>
                  {errors.message && (
                    <span className="form-error">{errors.message.message}</span>
                  )}
                </div>

                <div className="form-group form-group--checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className="checkbox-input"
                      disabled={loading}
                      {...register("terms", {
                        required: "You must agree to the terms and conditions",
                      })}
                    />
                    <span className="checkbox-custom"></span>
                    <span className="checkbox-text">
                      I agree to <a href="#">terms and conditions</a>
                    </span>
                  </label>
                  {errors.terms && (
                    <span className="form-error">{errors.terms.message}</span>
                  )}
                </div>

                <button
                  type="submit"
                  className="btn btn--primary contact-form__submit"
                  disabled={loading}
                >
                  {loading ? 'Submitting...' : 'Submit Query'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
