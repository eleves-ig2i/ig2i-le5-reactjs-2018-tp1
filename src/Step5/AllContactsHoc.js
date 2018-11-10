import React from 'react';
import ContactHoc from './ContactHoc';

const AllContactsHoc = (props)=>{
    const { allContacts, handleChange } = props;
    let cmpt = 0;
    return (
        <div>
            {
                allContacts.length > 0 &&
                allContacts.map(currentContact => <ContactHoc key={cmpt++} {...currentContact} handleChange={handleChange}  />)
            }
        </div>
    );
};

export default AllContactsHoc;