import React from 'react';
import AllContactsHoc from './AllContacts.container';

class App extends React.Component{

    render(){
        /*const contact = {
            firstName: 'Pierre-Claude',
            lastName: 'Grimal',
            phoneNumber : '0621459673',
            mail: 'pierre-claude.grimal@ig2i.centralelille.fr'
        };*/

        return(
            <div>
                <h1>First Application React</h1>
                <AllContactsHoc />
            </div>
        );
    }

}

export default App;