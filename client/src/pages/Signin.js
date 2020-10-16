import React from "react";
import SigninForm from "../components/LogInForm";
import HomeButton from "../components/HomeButton";
import { Link } from "react-router-dom";

function Signin() {
    return (
        <div>
            <SigninForm />
            <Link to="/">
                <HomeButton />
            </Link>
        </div>
    );
}

export default Signin;