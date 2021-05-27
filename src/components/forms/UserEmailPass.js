import React, { useState } from 'react'

const UserEmailPass = () => {

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    const [userList, setUserList] = useState([]);

    const loginFun = (e) => {
        e.preventDefault();

        if(email && pass){
            const newUserList = { id: new Date().getTime().toString() , email:email, pass: pass}
            setUserList([...userList, newUserList])
            setEmail("");
            setPass("");
        } else{
            alert('Please fill email Pass');
        }
    }

    return(
        <>
        <h6>useState, spread method</h6>
        <div className="formEmailPass">
            <h2>Form Here</h2>
            <form onSubmit={loginFun}>
                <div className="field">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" id="email" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password"
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                    ></input>
                </div>
                <div className="field">
                    <button type="submit" className="formBtn">Login</button>
                </div>
            </form>
            <div className="userLoginList">
                {
                    userList.map((curnt) => {
                        return(
                            <p key={curnt.id}>
                                <strong>UserName: {curnt.email}</strong>
                                <strong>Password: {curnt.pass}</strong>
                            </p>
                        )
                    })
                }
                
            </div>
        </div>
        </>
    )
}

export default UserEmailPass;