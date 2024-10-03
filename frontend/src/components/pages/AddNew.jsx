import React from 'react';

const AddNew = ({ header, children }) => {
  return (
    <div>
        <section className="page-section" id="register">
        <div className="container d-flex justify-content-center mt-3">
    <div className="card w-50">
      <div className="card-header">
        <h3>{header}</h3>
      </div>
      <div className="card-body">
        {children}
      </div>
    </div>
    </div>
    </section>
    </div>
  );
};

export default AddNew;
