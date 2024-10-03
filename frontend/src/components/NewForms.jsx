import React from 'react';
import AddNew from './pages/AddNew';
import NewUser from './NewUser';

const NewForms = () => {
    return (
      <div className=''>
        <AddNew header="Add New User">
          <NewUser />
        </AddNew>
        </div>

    );
};

export default NewForms;