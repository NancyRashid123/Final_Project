
import React, { useState } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Validation Schemas
  const signUpValidationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
      .matches(/\d/, 'Password must contain at least one number')
      .matches(/[@$!%*?&]/, 'Password must contain at least one special character')
      .required('Password is required'),
  });

  const signInValidationSchema = Yup.object({
    email: Yup.string().email('Invalid email address').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  // Handle Form Submit Logic
  const handleSubmit = (values, { resetForm }) => {
    setErrorMessage(''); // Reset error messages

    if (isSignUp) {
      setSuccessMessage('Registration successful! Redirecting to Sign In...');
      setTimeout(() => {
        setIsSignUp(false);
        setSuccessMessage('');
        resetForm();
      }, 2000);
    } else {
      // Simulate sign-in validation
      const { email, password } = values;

      if (email === 'test@example.com' && password === 'Password1!') {
        setSuccessMessage('Sign-in successful! Redirecting to home page...');
        setTimeout(() => {
          window.location.href = 'home.html'; // Simulate redirect
        }, 2000);
      } else {
        setErrorMessage('Invalid email or password. Please try again.');
      }
    }
  };

  return (
    <div className="login-container">
      <div className={`form-container ${isSignUp ? 'active' : ''}`}>
        <div className="login-form">
          {/* Sign Up Form */}
          {isSignUp ? (
            <Formik
              initialValues={{ name: '', email: '', password: '' }}
              validationSchema={signUpValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="form">
                <h1>Create Account</h1>
                <div className="social-icons">
                  <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                </div>
                {successMessage && <div className="success">{successMessage}</div>}
                <Field type="text" name="name" placeholder="Name" />
                <ErrorMessage name="name" component="div" className="error" />
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />
                <button type="submit">Sign Up</button>
              </Form>
            </Formik>
          ) : (
            // Sign In Form
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={signInValidationSchema}
              onSubmit={handleSubmit}
            >
              <Form className="form">
                <h1>Sign In</h1>
                <div className="social-icons">
                  <a href="#" className="icon"><i className="fa-brands fa-facebook"></i></a>
                  <a href="#" className="icon"><i className="fa-brands fa-google"></i></a>
                </div>
                {errorMessage && <div className="error">{errorMessage}</div>}
                {successMessage && <div className="success">{successMessage}</div>}
                <Field type="email" name="email" placeholder="Email" />
                <ErrorMessage name="email" component="div" className="error" />
                <Field type="password" name="password" placeholder="Password" />
                <ErrorMessage name="password" component="div" className="error" />
                <a href="#">Forgot password?</a>
                <button type="submit">Sign In</button>
              </Form>
            </Formik>
          )}
        </div>

        {/* Toggle Section */}
        <div className="toggle-container">
          <div className="toggle-panel">
            <h1>{isSignUp ? 'Welcome Back!' : 'Hello, User!'}</h1>
            <p>{isSignUp ? 'Already have an account?' : "Don't have an account?"}</p>
            <button className="toggle-button" onClick={() => setIsSignUp(!isSignUp)}>
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;







