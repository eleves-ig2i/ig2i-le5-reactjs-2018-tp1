import React from 'react';
import Contact from './Contact';

class App extends React.Component{

    render(){
        const contact = {
            firstName: undefined, //'Pierre-Claude'
            lastName: 'Grimal',
            phoneNumber : '0621459673',
            email: 'pierre-claude.grimal@ig2i.centralelille.fr'
        };
        
        return(
            <div>
                <h1>First Application React</h1>
                <Contact contact={contact} />
            </div>    
        );
    }

}

export default App;