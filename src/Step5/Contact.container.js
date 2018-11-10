import { compose, withState, withHandlers } from 'recompose';
import ContactHoc from './ContactHoc';

const initialState = {
    firstName: '',
    lastName: '',
    phoneNumber : '',
    mail: ''
};

const enhance = (
    compose(
        withHandlers({
            handleChange: props => event => {
                props.setContact({
                    ...props.contact,
                    lastName: event.target.value
                })
            }
        }))
);

export default enhance(ContactHoc);