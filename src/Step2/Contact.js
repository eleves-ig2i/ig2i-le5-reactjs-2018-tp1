import React from 'react';

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

export default Contact;