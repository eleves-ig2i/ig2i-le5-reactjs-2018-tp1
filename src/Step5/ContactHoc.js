import React from 'react';
import Proptypes from 'prop-types';

const propType = {
    contact : Proptypes.shape({
        firstName: Proptypes.string.isRequired,
        lastName: Proptypes.string.isRequired,
        phoneNumber: Proptypes.string.isRequired,
        mail: Proptypes.string.isRequired,
    })
};

const ContactHoc = (props)=>{ // ({contact}) au lieu de (contact) pour mettre dans App.js <ContactHoc contact={contact} /> à la place de <ContactHoc {...contact} />
    const { id, firstName, lastName, phoneNumber, mail, handleChange } = props;
    return (
        <div id="container">
            <h2>Je suis un composant contact HOC</h2>
            <p>
                Nom : {lastName}
                <br />
                Prenom : {firstName}
                <br />
                Numéro de téléphone : {phoneNumber}
                <br />
                email : {mail}
                <br />
                <input id={id} type="text" name="lastName" value={lastName} onChange={handleChange} />
            </p>
        </div>
    );
};

ContactHoc.prototype = propType;

export default ContactHoc;