import React from 'react';
import './sign-up.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/cumstom-button.component';

import {auth,createUserProfileDocument} from '../../firebase/firebase.util';

class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit  = async event =>{
        event.preventDefault();
        const {displayName, email, password, confirmPassword } = this.state;
        if (password != confirmPassword) {
            alert("Passwords don't match");
            return;
        }
        try {
            const {user} = await  auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
        } catch(error) {
            console.log("Error", error.message)
        }
    } 
    handleChange = event => {
        const {name, value } = event.target;
        this.setState ({ [name]: value});
    }

    render() {
        return (
            <div className='sign-up'>
                <h2 className='title'>I don't have an account </h2>
                <span>Sign up with your email and password</span>
                    <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName' 
                        type='text' 
                        value={this.state.displayName} 
                        handleChange={this.handleChange}
                        required 
                        label='Display name'/>
                    <FormInput 
                        name='email' 
                        type='email' 
                        value={this.state.email} 
                        handleChange={this.handleChange}
                        required 
                        label='Email'/>
                    <FormInput 
                        name='password' 
                        type='password' 
                        value={this.state.password}
                        handleChange={this.handleChange} 
                        required 
                        label='Password'/>
                    <FormInput 
                        name='confirmPassword' 
                        type='password' 
                        value={this.state.confirmPassword}
                        handleChange={this.handleChange} 
                        required 
                        label='Confirm password'/>
                     <CustomButton type='submit'>Sign Up</CustomButton>
                    </form>
            </div>
        )
    }
}
 
export default SignUp