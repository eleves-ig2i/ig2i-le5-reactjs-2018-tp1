import React from 'react';
import Proptypes from 'prop-types';

class Contact extends React.Component{

    constructor(props) {
        super(props);

        const initialState = {
            firstName: '',
            lastName: '',
            phoneNumber: '',
            mail: ''
        };

        this.state = initialState;
    }

    componentDidMount() {        
        console.log(this.props.firstName);
    }

    render() {
        const {firstName, lastName, phoneNumber, mail} = this.props.contact;
        return (
            <div id="container">
                <h2>Je suis un composant contact</h2>
                <p>
                    Nom : {lastName}
                    <br />
                    Prenom : {firstName}
                    <br />
                    Numéro de téléphone : {phoneNumber}
                    <br />
                    email : {mail}
                </p>
            </div>
        );
    }

}

Contact.propTypes = {
    contact : Proptypes.shape({ 
        firstName: Proptypes.string.isRequired,
        lastName: Proptypes.string.isRequired,
        phoneNumber: Proptypes.string.isRequired,
        email: Proptypes.string.isRequired,
    })
};

export default Contact;