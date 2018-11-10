import React from 'react';
import Contact from './Contact';

class AllContacts extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            allContacts: []
        }
    }

    componentWillMount() {
        fetch('http://127.0.0.1:3000/api/contacts')
            .then(res => res.json())
            .then((result) => {
                this.setState({
                    allContacts: result
                })
            });
    }

    render() {
        const { allContacts } = this.state;
        let cmpt = 0;
        return (
            <div>
                {                    
                    allContacts.length > 0 &&
                    allContacts.map(currentContact => <Contact key={cmpt++} contact={currentContact} />)
                }
            </div>
        );
    }
}

export default AllContacts;