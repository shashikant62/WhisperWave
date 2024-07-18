import React from "react";
const Register=()=>{
    return(<div className="Registercontaner">
        <div className="inside_container_Register">
        <div className="top_Register">
            <img className="img_Register" src="/logomain.png"></img>
            <h1 className="name_Register">Register</h1>
        </div>
            <div className="input_conatiner_Register">
            <input className="username_Register" placeholder="UserName"></input>
            <input className="email_Register" placeholder="Email"></input>
            <input className="password_Register" placeholder="Password"></input>
            <input className="confirm-password_Register" placeholder="Confirm-Password"></input>
            </div>
            <div className="btn">
                <input type="button" className="Register_btn"value="Register"></input>
                <span className="Register_text">If alredy have an account?
                <a className="login_Register"href="">login</a>
                </span>
            </div>
        </div>
    </div>)
}

export default Register;