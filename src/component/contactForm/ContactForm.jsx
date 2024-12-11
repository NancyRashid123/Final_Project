import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let errors = {};
    if (!formData.name) errors.name = 'Name is required.';
    if (!formData.email) errors.email = 'Email is required.';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid.';
    if (!formData.phone) errors.phone = 'Phone is required.';
    if (!formData.message) errors.message = 'Message is required.';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }
  };

  return (
    <section className="quote-section px py">
      <h2>REQUEST</h2>
      <div className='quote-section-container'>
       <form onSubmit={handleSubmit} id="contact-form">
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={formErrors.phone ? 'error' : ''}
          />
          {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
        </div>

        <div className="form-item">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={formErrors.message ? 'error' : ''}
          />
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
        </div>

        <button className='submit' type="submit">Send</button>
      </form>

      <div className="quote-description">
        <div className="quote-photo">
          <div className="image-overlay">
            <div className="text-overlay">
              <h3>Short About Us</h3>
              <p>
                Dolor sit amet, consectetur, adipis civelit sed quia non qui
                dolorem ipsum quia dolor sit amet, consectetur, adipis civelit.
              </p>
              <div className="services-lists-container">
                <ul className="services-list">
                  <li>Lawn Renovation</li>
                  <li>Landscape Lighting</li>
                  <li>Flowerscaping</li>
                  <li>Natural Stone Walks</li>
                </ul>
                <ul className="services-list">
                  <li>Lawn Maintenance</li>
                  <li>Seasonal Clean-ups</li>
                  <li>Snow Plowing & Salting</li>
                  <li>Tree & Shrub Care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div></div>

      {/* <form onSubmit={handleSubmit} id="contact-form">
        <div className="form-row">
          <div className="form-item">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={formErrors.name ? 'error' : ''}
            />
            {formErrors.name && <p className="error-message">{formErrors.name}</p>}
          </div>
          <div className="form-item">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={formErrors.email ? 'error' : ''}
            />
            {formErrors.email && <p className="error-message">{formErrors.email}</p>}
          </div>
        </div>
        <div className="form-item">
          <label htmlFor="phone">Phone</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={formErrors.phone ? 'error' : ''}
          />
          {formErrors.phone && <p className="error-message">{formErrors.phone}</p>}
        </div>

        <div className="form-item">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={formErrors.message ? 'error' : ''}
          />
          {formErrors.message && <p className="error-message">{formErrors.message}</p>}
        </div>

        <button className='submit' type="submit">Send</button>
      </form>

      <div className="quote-description">
        <div className="quote-photo">
          <div className="image-overlay">
            <div className="text-overlay">
              <h3>Short About Us</h3>
              <p>
                Dolor sit amet, consectetur, adipis civelit sed quia non qui
                dolorem ipsum quia dolor sit amet, consectetur, adipis civelit.
              </p>
              <div className="services-lists-container">
                <ul className="services-list">
                  <li>Lawn Renovation</li>
                  <li>Landscape Lighting</li>
                  <li>Flowerscaping</li>
                  <li>Natural Stone Walks</li>
                </ul>
                <ul className="services-list">
                  <li>Lawn Maintenance</li>
                  <li>Seasonal Clean-ups</li>
                  <li>Snow Plowing & Salting</li>
                  <li>Tree & Shrub Care</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default ContactForm;


