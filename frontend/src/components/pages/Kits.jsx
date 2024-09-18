import React, { useState, useEffect } from "react";
import { API_URL } from "../../constants";
import { Link } from "react-router-dom";

function Kits() {
  const [kits, setKits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const kitsUrl = `${API_URL}/kits`;

  useEffect(() => {
    async function loadKits() {
      try {
        const response = await fetch(kitsUrl);
        if (response.ok) {
          const json = await response.json();
          console.log("Fetched kits data:", json);
          setKits(json);
          
        } else {
          throw response;
        }
      } catch (e) {
        setError("An error occurred.");
        console.log("An error occurred", e);
      } finally {
        setLoading(false);
      }
    }
    loadKits();
  }, [kitsUrl]);

  return (
    <>
      <div>
        <section className="page-section bg-light" id="portfolio">
          <div className="container">
            <div className="text-center">
              <h2 className="section-heading text-uppercase">Available Kits</h2>
              <h3 className="section-subheading text-muted">
                Browse our collection of curated learning kits.
              </h3>
            </div>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}

            <div className="row d-flex p-1">
              {kits.map(
                (
                  kit // Map through the list of kits
                ) => (
                  <>
                    <div className="col-lg-6 col-sm-6 mb-4">
                      <div className="portfolio-item" key={kit.id}>
                        <a
                          className="portfolio-link"
                          data-bs-toggle="modal"
                          data-bs-target={`#portfolioModal${kit.id}`}
                        >
                          <div className="portfolio-hover">
                            <div className="portfolio-hover-content">
                              <i className="fas fa-plus fa-3x"></i>
                            </div>
                          </div>
                          <img
                            className="portfolio-img img-fluid"
                            src={kit.image_url}
                            alt="..."
                          />
                        </a>
                        <div className="portfolio-caption">
                          <div className="portfolio-caption-heading">
                            {kit.name}
                          </div>
                          <div className="portfolio-caption-subheading text-muted mb-3">
                            <p>Grades: {kit.grade_level}</p>
                            {kit.description}
                          </div>
                          <Link to="/kit_request">
                            <button className="btn btn-primary btn-small">
                              Request Kit
                            </button>
                          </Link>
                        </div>
                      
                    
                    <div
                      class="portfolio-modal modal fade"
                      id={`portfolioModal${kit.id}`}
                      tabindex="-1"
                      role="dialog"
                      aria-hidden="true"
                      key={kit.id}
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="close-modal" data-bs-dismiss="modal">
                            <img
                              src="assets/img/close-icon.svg"
                              alt="Close modal"
                            />
                          </div>
                          <div class="container">
                            <div class="row justify-content-center">
                              <div class="col-lg-8">
                                <div class="modal-body">
                                  <h2 class="text-uppercase">{kit.name}</h2>
                                  <p class="item-intro text-muted">
                                    {kit.description}
                                  </p>

                                  <div
                                    id="carouselKitItems"
                                    class="carousel slide"
                                    data-bs-ride="carousel"
                                  >
                                    <div class="carousel-indicators">
                                      <button
                                        type="button"
                                        data-bs-target="#carouselKitItems"
                                        data-bs-slide-to="0"
                                        class="active"
                                        aria-current="true"
                                        aria-label="Slide 1"
                                      ></button>
                                      <button
                                        type="button"
                                        data-bs-target="#carouselKitItems"
                                        data-bs-slide-to="1"
                                        aria-label="Slide 2"
                                      ></button>
                                      <button
                                        type="button"
                                        data-bs-target="#carouselKitItems"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 3"
                                      ></button>
                                    </div>
                                    <div class="carousel-inner">
                                      <div class="carousel-item active">
                                        <img
                                          class="d-block w-100"
                                          src="assets/img/kit-items/item1.jpg"
                                          alt="Kit Item 1"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                          <h5>Item 1 Name</h5>
                                          <p>Description for item 1.</p>
                                        </div>
                                      </div>
                                      <div class="carousel-item">
                                        <img
                                          class="d-block w-100"
                                          src="assets/img/kit-items/item2.jpg"
                                          alt="Kit Item 2"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                          <h5>Item 2 Name</h5>
                                          <p>Description for item 2.</p>
                                        </div>
                                      </div>
                                      <div class="carousel-item">
                                        <img
                                          class="d-block w-100"
                                          src="assets/img/kit-items/item3.jpg"
                                          alt="Kit Item 3"
                                        />
                                        <div class="carousel-caption d-none d-md-block">
                                          <h5>Item 3 Name</h5>
                                          <p>Description for item 3.</p>
                                        </div>
                                      </div>
                                    </div>
                                    <button
                                      class="carousel-control-prev"
                                      type="button"
                                      data-bs-target="#carouselKitItems"
                                      data-bs-slide="prev"
                                    >
                                      <span
                                        class="carousel-control-prev-icon"
                                        aria-hidden="true"
                                      ></span>
                                      <span class="visually-hidden">
                                        Previous
                                      </span>
                                    </button>
                                    <button
                                      class="carousel-control-next"
                                      type="button"
                                      data-bs-target="#carouselKitItems"
                                      data-bs-slide="next"
                                    >
                                      <span
                                        class="carousel-control-next-icon"
                                        aria-hidden="true"
                                      ></span>
                                      <span class="visually-hidden">Next</span>
                                    </button>
                                  </div>

                                  <p>
                                    Use this area to describe the kit. Lorem
                                    ipsum dolor sit amet, consectetur
                                    adipisicing elit.
                                  </p>
                                  <ul class="list-inline">
                                    <li>
                                      <strong>Client:</strong>
                                      Threads
                                    </li>
                                    <li>
                                      <strong>Category:</strong>
                                      Illustration
                                    </li>
                                  </ul>
                                  <button
                                    class="btn btn-primary btn-xl text-uppercase"
                                    data-bs-dismiss="modal"
                                    type="button"
                                  >
                                    <i class="fas fa-xmark me-1"></i>
                                    Close Project
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </div>
                    </div>
                  </>
                )
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Kits;
