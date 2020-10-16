import React from "react";
import SignupForm from "../components/CreateAccount";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

function Signup() {
    return (
        <div>
            <SignupForm />
            <Link to="/">
                <HomeButton />
            </Link>
        </div>
    );
}
export default Signup;