import React from "react";

const Login = (props) => {
    return (
        <div className="login-container">
            <h1 className="welcome-message">welcome <span className="highlight">to</span> web3vote</h1>
            <button className="login-button" onClick={props.connectWallet}>Login with MetaMask</button>
        </div>
    )
}

export default Login;