import React from "react";
import { connect } from "react-redux";
import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/cumstom-button.component";
import { signUpStart } from "../../redux/user/user.action";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    signUpStart({ displayName, email, password, confirmPassword });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-up">
        <h2 className="title">I don't have an account </h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
            label="Display name"
          />
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
            label="Email"
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
            label="Password"
          />
          <FormInput
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
            label="Confirm password"
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: user => dispatch(signUpStart(user))
});
export default connect(null, mapDispatchToProps)(SignUp);
