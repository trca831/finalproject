import React, { useState } from 'react';

const DataEndpoint = ({ userUrl, kitsUrl, kitItemsUrl,  donationUrl, contactsUrl, kitRequestsUrl, setSelectedEndpoint }) => {  
  
  return (
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
                <a href="#table"  className="nav-link px-3" onClick={() => setSelectedEndpoint(kitsUrl)}>
                  <span className="me-2">
                    <i class="bi bi-boxes"></i>
                  </span>
                  <span>Kits</span>
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
  );
};

export default DataEndpoint;
