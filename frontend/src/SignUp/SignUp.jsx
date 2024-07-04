import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from 'axios';
import { NameContext } from "../context/Name";
function SignUp() {
    const [email, setEmail] = useState(""); const [data, setData] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [err, setErr]=useState("");
    const navigate = useNavigate();
    const NameCt=useContext(NameContext);
    async function send() {
        // try {
        //     const response = await fetch('/api/signUp', {
        //       method: 'POST',

        //       body:JSON.stringify({
        //          email: email,
        //          userName: userName,
        //          password: password
        //       }), // Convert the user data to a JSON string
        //     });
        //     if (!response.ok) {
        //       throw new Error(`HTTP error! status: ${response.status} ${response.error}`);
        //     }

        //     const data = await response.json();
        //     navigate("/User");
        //     return data;
        //   } catch (error) {
        //     console.error('Error creating user:', error);
        //   }
        try{
        const response = await fetch('/api/signUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                userName: userName,
                password: password
            }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.log("Server response error data:", errorData);
            setErr(errorData.error || "Unknown error occurred");
            throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
        }

        const data = await response.json();
        console.log("User created successfully:", data);
        NameCt.setName(userName);
        navigate("/User");
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
    // get request
    //     const response = axios.get('/api/signUp')
    // .then((response)=>{
    //     setData(response.data);
    //     console.log(data);
    // })
    // .catch((error)=>{
    //     console.log(error);
    // })
    // try {
    //     const response = await fetch('/api/signUp');
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     const data = await response.json();
    //     setData(data);
    //     console.log(data);
    // } catch (error) {
    //     console.error('Error fetching data:', error);
    // }

}

return (
    <div className="ring">
        <i style={{ style: "--clr:#00ff0a;" }}></i>
        <i style={{ style: "--clr:#ff0057;" }}></i>
        <i style={{ style: "--clr:#fffd44;" }}></i>

        <div class="login">
            <h2>Sign Up</h2>
            <div className="inputBx">
                <input type="text" placeholder="Email" name="email" onChange={(e) => { setEmail(e.target.value) }} />
            </div>
            <div className="inputBx">
                <input type="text" placeholder="Username" name="username" onChange={(e) => { setUserName(e.target.value) }} />
            </div>
            <div className="inputBx">
                <input type="password" placeholder="Password" name="password" onChange={(e) => { setPassword(e.target.value) }} />
            </div>
            <div className="inputBx">
                <input type="submit" value="Sign in" onClick={send} />
            </div>
            {err && <p>{`Error: ${err}`}</p>}

            </div>
    </div>
)
}
export default SignUp;