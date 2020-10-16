import React from "react";
import { Link } from "react-router-dom";
import HomeButton from "../components/HomeButton";

function accounts() {
    return (
        <div>
            <Link to="Login">
                <button
                name="signin"
                type="submit"
                value="Log In"
                className="btn btn-primary log-in-button"
            >
                Sign In
            </button>
            </Link>
            <Link to="/Signup">
                <button
                    name="signup"
                    type="submit"
                    value="Create Account"
                    callName="btn btn-primary create-account-button"
            >
                Sign Up
            </button>
            </Link>

            <Link to="/">
                <HomeButton />
            </Link>
        </div>
    );
}

export default accounts;