import React, { useState } from 'react';

const DataEndpoint = ({ userUrl, kitsUrl, kitItemsUrl,  donationUrl, contactsUrl, kitRequestsUrl, setShowKitsTable, setSelectedEndpoint }) => {  

  const handleShowKitsTable = () => {
    setShowKitsTable(true);
  };
  
  return (
    <>
    <div className="offcanvas-body p-0">
          <nav className="navbar-dark">
            <ul className="navbar-nav">
              <li className="mb-2">
                <a href="#table" className="nav-link px-3 active" onClick={() => setSelectedEndpoint(userUrl)}>
                  <span className="me-2">
                    <i class="fas fa-user"></i>
                  </span>
                  <span>Users</span>
                </a>
              </li>
              <li className="mb-2">
              <a  href='/add_user' className="nav-link px-5">
              <span className="me-2"><i className="fas fa-user-plus"></i></span>
              <span>Add New User</span>  
              </a>
            </li>
              <li className="mb-2">
                <a href="#table"  className="nav-link px-3" onClick={() => setSelectedEndpoint(kitsUrl)}>
                  <span className="me-2">
                    <i class="bi bi-boxes"></i>
                  </span>
                  <span>Kits</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/add-kit" className="nav-link px-5">
                    <span className="me-2"><i className="bi bi-box"></i></span>
                    <span>Add New Kit</span>
                </a>
            </li>
              <li className="mb-2">
                <a href="#table"  className="nav-link px-3" onClick={() => setSelectedEndpoint(kitItemsUrl)}>
                  <span className="me-2">
                    <i class="fa-solid fa-book"></i>
                  </span>
                  <span>Kit Items</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/add-kit-item" className="nav-link px-5">
                    <span className="me-2"><i class="fa-solid fa-book-medical"></i></span>
                    <span>Add New Kit Item</span>
                </a>
            </li>
              <li className="mb-2">
                <a
                  href="#table"
                  className="nav-link px-3"
                  onClick={handleShowKitsTable}>
                  <span className="me-2">
                  <i class="bi bi-box2-heart-fill"></i>
                  </span>
                  <span>Kits with Kit Items</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="/add-kit-with-items" className="nav-link px-5">
                    <span className="me-2"><i class="fa-solid fa-box-open"></i></span>
                    <span>Add Item to Kit</span>
                </a>
            </li>
              <li className="mb-2">
                <a href="#table"  className="nav-link px-3" onClick={() => setSelectedEndpoint(kitRequestsUrl)}>
                  <span className="me-2">
                    <i class="bi bi-clipboard-check-fill"></i>
                  </span>
                  <span>Kit Requests</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#table"  className="nav-link px-3" onClick={() => setSelectedEndpoint(donationUrl)}>
                  <span className="me-2">
                    <i class="bi bi-cash-coin"></i>
                  </span>
                  <span>Donations</span>
                </a>
              </li>
              <li className="mb-2">
                <a href="#table"  className="nav-link px-3" onClick={() => setSelectedEndpoint(contactsUrl)}>
                  <span className="me-2">
                    <i class="bi bi-chat-right-text-fill"></i>
                  </span>
                  <span>Contacts</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style={{ zIndex: 3000}}>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">Add New User</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* <!-- Your form for adding a new user goes here --> */}
              <form>
                {/* <!-- Form fields for adding a new user --> */}
                <div className="mb-3">
                  <label htmlFor="userName" className="form-label">User Name</label>
                  <input type="text" className="form-control" id="userName" />
                </div>
                {/* <!-- Add other fields as needed --> */}
              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save</button>
            </div>
          </div>
        </div>
      </div>
      </>
      
  );
};

export default DataEndpoint;
