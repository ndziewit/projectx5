import React, { Component } from "react";
import axios from "axios";

export default class LogInForm extends Component {
    constructor(props) {
        super(props);

        this.emailAddressInput = this.emailAddressInput.bind(this);
        this.passwordInput = this.passwordInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        email: "",
        password: "",
        loginError: false
    };

    emailAddressInput(e) {
        this.setState({ email: e.target.value });
    }

    passwordInput(e) {
        this.setState({
            password: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        const retrieveAccount = {
            email:this.state.email,
            password: this.state.password
        };
        console.log(retreivedAccount);
        axios
            .post("api/Usercheck", retreivedAccount)
            .then(res => (window.location = `/?email=${this.state.email}`))
            .catch(err => {
                this.setState({ loginError: true });
                alert("Email or Password are wrong");
            });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <input
                        type="email"
                        className="form-control email-input-form"
                        onChange={this.emailAddressInput}
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Email Address"
                        value={this.state.email}
                    />
                    </div>
                    <div className="form-group">
                        <input
                        type="password"
                        className="form-control password-input-form"
                        onChange={this.passwordInput}
                        id="exampleInputPassword1"
                        placeholder="Password"
                        value={this.state.password}
                    />
                    </div>
                    <button
                        name="signin"
                        type="submit"
                        value="Sign In"
                        className="btn btn-primary create-account-button"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        );
    }
}