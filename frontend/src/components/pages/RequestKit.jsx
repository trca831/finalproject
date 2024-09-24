import React, { useEffect, useState } from "react";
import { API_URL } from "../../constants";
import { useLocation } from 'react-router-dom'
import { Link } from "react-router-dom";

function RequestKit({ user }) {
    const location = useLocation();
    const { kitId } = location.state;
    const [requestMessages, setRequestMessages] = useState("");

    // Predefine name, email, and kitId
    const [name, setName] = useState(user ? user.name : "");
    const [email, setEmail] = useState(user ? user.email : "");
    const [, setKitId] = useState(kitId || "");

    // Other inputs
    const [phone, setPhone] = useState("");
    const [school, setSchool] = useState("");
    const [address, setAddress] = useState("");
    const [comments, setComments] = useState("");
    const [gradeLevel, setGradeLevel] = useState("");
    const [schoolYear, setSchoolYear] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = {
            name,
            email,
            phone,
            address,
            school,            
            gradeLevel,
            schoolYear,
            kitId,
            comments,

        }

        console.log("Submitting form data: ", formData);
    };

    return(
        <>
        <div>
        <section className="page-section" id="register">
        <div className="container mt-3">
          <div className="text-center mb-5">
            <h2 className="section-heading text-uppercase text-dark">Request A Kit</h2>
          </div>

          <div className={requestMessages ? "text-center text-dark text-bold mb-3" : "d-none"} id="submitErrorMessage">
            {requestMessages && <p>{requestMessages}</p>}
            </div>

          <form
            id="registerForm"
            data-sb-form-api-token="API_TOKEN"
            onSubmit={handleSubmit}
        
            
          >
            <div className="container w-50 text-dark">
            <div className="mb-5">
              <div>
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                  <input
                    className="form-control shadow"
                    id="name"
                    type="text"
                    name="name"
                    value={name}
                    readOnly
                  />
                </div>
                <div className="form-group">
                <label htmlFor="email">Email:</label>
                  <input
                    className="form-control shadow"
                    id="email"
                    type="email"
                    name="email"
                    value={email}
                    readOnly
                  />
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Phone:</label>
                  <input
                    className="form-control shadow mb-5"
                    id="phone"
                    type="tel"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="123-456-7890*"
                    data-sb-validations="required"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="phone:required"
                  >
                    A phone number is required.
                  </div>
                  <div className="form-group">
                    <label htmlFor="school">School Name:</label>
                  <input
                    className="form-control shadow mb-5"
                    id="school"
                    type="text"
                    name="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                    placeholder="City High School*"
                    data-sb-validations="required"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="school:required"
                  >
                    A school is required.
                  </div>
                </div>
                  {/* Stretch Goal: Integrate API with US schools? */}
                  <div className="form-group">
                    <label htmlFor="address">School Address:</label>
                  <input
                    className="form-control shadow mb-5"
                    id="address"
                    type="text"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Example Street, City, ST 12345*"
                    data-sb-validations="required"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="address:required"
                  >
                    An address is required.
                  </div>
                </div>
                </div>
                
                <div className="form-group">
                <label className="me-1">Grade Level:</label>
                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="gradeLevel"
                        id="pk-2"
                        value="PK-2"
                        checked={gradeLevel === "PK-2"}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        required
                        />
                        <label className="form-check-label" htmlFor="pk-2">
                        PK-2
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="gradeLevel"
                        id="3-5"
                        value="3-5"
                        checked={gradeLevel === "3-5"}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        required
                        />
                        <label className="form-check-label" htmlFor="3-5">
                        3-5
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="gradeLevel"
                        id="6-8"
                        value="6-8"
                        checked={gradeLevel === "6-8"}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        required
                        />
                        <label className="form-check-label" htmlFor="6-8">
                        6-8
                        </label>
                    </div>

                    <div className="form-check form-check-inline">
                        <input
                        className="form-check-input"
                        type="radio"
                        name="gradeLevel"
                        id="9-12"
                        value="9-12"
                        checked={gradeLevel === "9-12"}
                        onChange={(e) => setGradeLevel(e.target.value)}
                        required
                        />
                        <label className="form-check-label" htmlFor="9-12">
                        9-12
                        </label>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="schoolYear">School Year:</label>
                  <input
                    className="form-control shadow mb-5"
                    id="schoolYear"
                    type="text"
                    name="schoolYear"
                    value={schoolYear}
                    onChange={(e) => setSchoolYear(e.target.value)}
                    placeholder="YYYY-YYYY *"
                    data-sb-validations="required"
                  />
                  <div
                    className="invalid-feedback"
                    data-sb-feedback="schoolYear:required"
                  >
                    A valid school year is required.
                  </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="kitId">Kit Id:</label>
                  <input
                    className="form-control shadow mb-5"
                    id="kitId"
                    type="text"
                    name="kitId"
                    value={kitId}
                    readOnly
                  />
                  </div>
                  <div className="form-group form-group-textarea mb-md-0">
                    <label htmlFor="comments">Request Comments:</label>
                    <textarea className="form-control shadow mb-5" id="comments" name="comments" type="text" value={comments} onChange={(e) => setComments(e.target.value)} placeholder="Your Message *"></textarea>
                    </div>
                  
              </div>
            </div>
            </div>
            <div className="text-center">
              <button
                className="btn btn-primary btn-lg text-uppercase mb-3"
                id="submitButton"
                type="submit"
              >
                Submit
              </button>
              <Link to="/request_confirmation"><p>Confirmation fix</p></Link>
            </div>
            
          </form>
        </div>
      </section>
        </div>
        </>
    )
};

export default RequestKit;