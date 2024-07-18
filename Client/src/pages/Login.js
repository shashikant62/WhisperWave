import React from "react";
const Login=()=>{
    return(<div className="Logincontaner">
        <div className="inside_container">
        <div className="top_login">
            <img className="img_login" src="/logomain.png"></img>
            <h1 className="name_login">LOGIN</h1>
        </div>
            <div className="input_conatiner">
            <input className="username_login" placeholder="UserName"></input>
            <input className="password_login" placeholder="Password"></input>
            </div>
            <div className="btn">
                <input type="button" className="login_btn"value="Login"></input>
                <span className="login_text">Don't have an account?
                <a className="register_login"href="">register</a>
                </span>
            </div>
        </div>
    </div>)
}

export default Login;