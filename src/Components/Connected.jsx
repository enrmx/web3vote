import React from "react";

const Connected = (props) => {
    return (
        <div className="connected-container" style={{ textAlign: "center" }}>
            <h1 className="connected-header">You are Connected to Metamask</h1>
            <p className="connected-account">Metamask Account: {props.account}</p>
            <p className="connected-account">Remaining Time: {props.remainingTime}</p>
            {props.showButton ? (
                <p className="connected-account">You have already voted</p>
            ) : (
                <div>
                    <input
                        type="number"
                        placeholder="Enter Candidate Index"
                        value={props.number}
                        onChange={props.handleNumberChange}
                    ></input>
                    <br />

                    <button className="login-button" style={{ margin: "10px" }} onClick={props.voteFunction}>
                        Vote
                    </button>
                </div>
            )}

            <table id="myTable" className="candidates-table">
                <thead>
                    <tr>
                        <th>Index</th>
                        <th>Candidate name</th>
                        <th>Candidate votes</th>
                    </tr>
                </thead>
                <tbody>
                {[...Array(5)].map((_, index) => (
                    <tr key={index}>
                    <td>{index}</td>
                    <td>Dummy Candidate </td>
                    <td>{Math.floor(Math.random() * 100)}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default Connected;