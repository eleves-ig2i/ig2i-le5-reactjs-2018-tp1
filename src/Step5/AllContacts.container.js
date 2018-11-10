import React from 'react'
import { compose, withState, withHandlers, lifecycle } from 'recompose';
import AllContactsHoc from './AllContactsHoc';

let initialState = {
    allContacts: []
};



const enhance = (
    compose(withState('allContacts', 'setContact', initialState),
        lifecycle({
                componentDidMount() {
                    fetch('http://127.0.0.1:3000/api/contacts')
                        .then(res => res.json())
                        .then((result) => {
                            this.setState({allContacts: result})
                        });
                }
            }
        ),
        withHandlers({
            handleChange: props => event => {
                const contact = props.allContacts.find(currentContact=>{
                    return currentContact.id === event.target.id;
                });
                contact.lastName =  event.target.value;
                props.setContact({
                    allContacts: {...contact}
                })
            }
        })
    )
);

export default enhance(AllContactsHoc);