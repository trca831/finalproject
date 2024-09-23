import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API_URL2 } from "../../constants";
import { Link } from "react-router-dom";




export default function Login({setLoggedIn}) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    const [loginMessages, setLoginMessages] = useState("");
    const navigate = useNavigate();
    
  
  
    const [userData, setUserData] = useState({});
  
    const loginUrl = `${API_URL2}/login`;
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log("Form submitted");
  
      // Update the userData state
      const updatedUserData = {
          user: {
            email,
            password,
          },
        };
  
      setUserData(updatedUserData);
  
      try {
        // Send POST request to registration endpoint
        const response = await fetch(loginUrl, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(updatedUserData),
        });
  
        if (response.ok) {
          // Handle successful registration (e.g., redirect to another page)
          const data = await response.json()
          localStorage.setItem('jwt', data.token);

          console.log("Login successful!");
          
          setLoggedIn(true);
          
          

                      
          // Clear input fields
        setEmail("");
        setPassword("");
        
  
          navigate("/")
        } else {
          // Handle registration error
          const errorData = await response.json();
          setLoginMessages(errorData.status.errors.join(", ") || "Login failed");
        }
      } catch (error) {
        // Handle network or other errors
        setLoginMessages("An error occurred: " + error.message);
        console.log(error.message)
      }
    };
  
    return (
      <div>
        <section className="page-section" id="register">
          <div className="container mt-3">
            <div className="text-center mb-5">
              <h2 className="section-heading text-uppercase">Login</h2>
            </div>
  
            <div className={loginMessages ? "text-center text-white text-bold mb-3" : "d-none"} id="submitErrorMessage">
              {loginMessages && <p>{loginMessages}</p>}
              </div>
  
            <form
              id="registerForm"
              data-sb-form-api-token="API_TOKEN"
              onSubmit={handleSubmit}
              
            >
            <div>
              <div className="container w-50">
              <div className="mb-5">
                <div className="form-group">
                    <input
                      className="form-control border border-dark"
                      id="email"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Email *"
                      data-sb-validations="required,email"
                    />
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="email:required"
                    >
                      An email is required.
                    </div>
                    <div className="invalid-feedback" data-sb-feedback="email:email">
                      Email is not valid.
                    </div>
                  </div>
                  <div className="form-group mb-md-0">
                    <input
                      className="form-control border border-dark"
                      id="password"
                      type="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Your Password *"
                      data-sb-validations="required"
                    />
                    <div
                      className="invalid-feedback"
                      data-sb-feedback="password:required"
                    >
                      A password is required.
                    </div>
                  </div>
                </div>
              </div>
              </div>
  
              {/* <div className="d-none" id="submitSuccessMessage">
                      <div className="text-center text-primary mb-3">Message sent!</div> 
                      </div> */}
  
              
  
              <div className="text-center">
                <button
                  className="btn btn-primary btn-lg text-uppercase mb-3"
                  id="submitButton"
                  type="submit"
                >
                  Submit
                </button>
                <Link to="/registration"><p>Not registered? Sign up now.</p></Link>
              </div>
              
            </form>
          </div>
        </section>
      </div>
  
    );
  }


