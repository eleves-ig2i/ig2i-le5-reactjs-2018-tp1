import React from 'react';
import AllContacts from './AllContacts';

class App extends React.Component{

    render(){
        /*const user = {
            firstName: 'Pierre-Claude',
            lastName: 'Grimal',
            phoneNumber : '0621459673',
            mail: 'pierre-claude.grimal@ig2i.centralelille.fr'
        };*/
        
        return(
            <div>
                <h1>First Application React</h1>
                <AllContacts />
            </div>    
        );
    }

}

export default App;