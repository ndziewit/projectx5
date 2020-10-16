import React, { Component } from "react";
import axios from "axios";

export default class LogInForm extends Component {
    constuctor(props) {
        super(props);

        this.emailAddressInput = this.emailAddressInput.bind(this);
        this.passwordInput = this.passwordInput.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            isVerified: false
        };
    }

    state = {
        email: "",
        password: ""
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
        if (this.state.isVerified) {
            alert("Account Created");
            const createdAccount = {
                email: this.state.email,
                password: this.state.password

            };
            axios
            .post("/api/addUser", createdAccount)
            .then(res => console.log(res.data));

            window.location = "/";
        } else {
            alert("Verify");
        }
    }

    verifyCallback(response) {
        if (response) {
            this.setState({
                isVerified: true
            });
        }
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
                        name="signup"
                        type="submit"
                        value="Create Account"
                        className="btn btn-primary create-account-button"
                    >
                        Create Account
                    </button>
                </form>
            </div>
        );
    }
 }