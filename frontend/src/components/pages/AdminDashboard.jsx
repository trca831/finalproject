import React, {useState, useEffect } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import SampleChart from "../SampleChart";
// import SampleChartTwo from "../SampleChartTwo";
import SampleChartThree from "../SampleChartThree";
import DashCardSet from "../DashCardSet";
import { API_URL } from "../../constants";
import DataEndpoint from "../DataEndpoint";
import DashTable from "../DashTable";
import KitsAndItemsTable from "../KitsandItemsTable";


const AdminDashboard = ({ user }) => {
  
  const userUrl = `${API_URL}/users`
  const kitsUrl = `${API_URL}/kits`
  const kitItemsUrl = `${API_URL}/kit_items`
  const donationUrl = `${API_URL}/donations`
  const contactsUrl = `${API_URL}/contacts`
  const kitRequestsUrl = `${API_URL}/kit_requests`

  
  const headers = {
    userUrl: [
      { key: 'id', label: 'User Id' },
      { key: 'email', label: 'User Email' },
      { key: 'name', label: 'User Name' },
      { key: 'role', label: 'Role'},
      { key: 'created_at', label: 'Date Created'},
    ],
    kitsUrl: [
      { key: 'id', label: 'Kit Id' },
      { key: 'name', label: 'Kit Name'},
      { key: 'description', label: 'Description' },
      { key: 'grade_level', label: 'Grade Level'},
      { key: 'image_url', label: 'Image URL'},

    ],
    kitItemsUrl: [
        { key: 'id', label: 'Kit Item Id' },
        { key: 'name', label: 'Kit Item Name'},
        { key: 'description', label: 'Description' },
        { key: 'image_url', label: 'Image URL'},  
      ],
      kitRequestsUrl: [
        { key: 'id', label: 'Kit Request Id' },
        { key: 'request_name', label: 'User Name'},
        { key: 'request_email', label: 'User Email' },
        { key: 'requested_kit', label: 'Kit Name'},
        { key: 'requested_kit_id', label: 'Kit Id'},
        { key: 'school_name', label: 'School Name'},
        { key: 'school_address', label: 'School Address'},
        { key: 'school_year', label: 'School Year'},
        { key: 'created_at', label: 'Date Requested'},
  
      ],
      donationUrl: [
        { key: 'id', label: 'Donation Id' },
        { key: 'donor_name', label: 'Donor Name'},
        { key: 'donor_email', label: 'Donor Email' },
        { key: 'amount', label: 'Donation Amount'},
        { key: 'created_at', label: 'Donation Date'},
  
      ],
      contactsUrl: [
        { key: 'name', label: 'Contact Name' },
        { key: 'email', label: 'Contact Email'},
        { key: 'phone', label: 'Contact Phone' },
        { key: 'message', label: 'Message'},
        { key: 'user_id', label: 'User Id (if available)'},
  
      ],
    
  };
  const UserTable = () => <DashTable headers={headers.userUrl} apiEndpoint={userUrl} />;
  const KitsTable = () => <DashTable headers={headers.kitsUrl} apiEndpoint={kitsUrl} />;
  const KitItemsTable = () => <DashTable header={headers.kitItemsUrl} apiEndpoint={kitItemsUrl}/>;
  const KitRequestsTable = () => <DashTable header={headers.kitRequestsUrl} apiEndpoint={kitRequestsUrl} />;
  const DonationsTable = () => <DashTable header={headers.donationUrl} apiEndpoint={donationUrl}/>;
  const ContactsTable = () => <DashTable header={headers.contactsUrl} apiEndpoint={contactsUrl}/>


  const [selectedEndpoint, setSelectedEndpoint] = useState(userUrl);

  if (user.role !== "admin") {
    return (
      <section className="page-section">
        <div>
          <h2>You do not have permission to view this page.</h2>
        </div>
      </section>
    );
  }
  return (
    <>
      <nav
        className="navbar justify-content-between mt-0"
        style={{ zIndex: -1, backgroundColor: "black" }}
      >
        <div
          className="d-inline-flex w-100 justify-content-between p-0 ms-4 me-4"
          style={{ marginTop: 80 }}
        >
          <a className="navbar-brand text-uppercase text-white">
            Admin Dashboard
          </a>
          <form className="form-inline d-inline-flex w-50">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-primary my-2 my-sm-0" type="submit">
              <i className="fas fa-search"></i>
            </button>
          </form>
        </div>
      </nav>

      <button
        className="btn btn-primary mt-3 ms-3"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasExample"
        aria-controls="offcanvasExample"
        style={{ position: "sticky", top: 95, zIndex: 1000 }}
        
      >
        <i className="fas fa-bars"></i>
      </button>

      <div
        className="offcanvas offcanvas-start bg-dark text-white"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
        style={{ width: 250 }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title mb-3" id="offcanvasExampleLabel">
            Menu
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <DataEndpoint 
        userUrl={userUrl} 
        kitsUrl={kitsUrl} 
        kitItemsUrl={kitItemsUrl} 
        donationUrl={donationUrl} 
        contactsUrl={contactsUrl} 
        kitRequestsUrl={kitRequestsUrl} 
        setSelectedEndpoint={setSelectedEndpoint}
        
      />
      </div>
      <main className="mt-3 pt-3" style={{ zIndex: -500 }}>
        <div className="container-fluid">
          <DashCardSet/>
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-header">Charts</div>
                  <div className="card-body">
                    <SampleChart />
                  </div>
                </div>
              </div>
              <div className="col-md-6 mb-3">
                <div className="card">
                  <div className="card-header">Charts</div>
                  <div className="card-body">
                    <SampleChartThree />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 mb-3">
                <div className="card">
                  <div className="card-header">Data Tables</div>
                  <div className="card-body d-flex justify-content-center">
                    <div id="table" style={{ overflowX: 'auto' }}>
                    {selectedEndpoint === userUrl && <DashTable headers={headers.userUrl} apiEndpoint={userUrl} />}
                    {selectedEndpoint === kitsUrl && <DashTable headers={headers.kitsUrl} apiEndpoint={kitsUrl} />}
                    {selectedEndpoint === kitItemsUrl && <DashTable headers={headers.kitItemsUrl} apiEndpoint={kitItemsUrl} />}
                    {selectedEndpoint === kitRequestsUrl && <DashTable headers={headers.kitRequestsUrl} apiEndpoint={kitRequestsUrl} />}
                    {selectedEndpoint === donationUrl && <DashTable headers={headers.donationUrl} apiEndpoint={donationUrl} />}
                    {selectedEndpoint === contactsUrl && <DashTable headers={headers.contactsUrl} apiEndpoint={contactsUrl} />}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <KitsAndItemsTable />
          </div>
      </main>
    </>
  );
};

export default AdminDashboard;
