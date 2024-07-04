import React, { useContext } from 'react';
import { Link , useNavigate} from 'react-router-dom';
import './Header.css';
import Button from '@mui/material/Button';
import { NameContext } from '../context/Name';
function Header() {
    const NameCt = useContext(NameContext);
    const navigate=useNavigate();
    async function handleSignOut(){
        await NameCt.setName("");
        navigate("/");
    }
    return (
        <div id="navbar">
            <ul id="ul">
                <Link to="/">
                <h5 id="logo">
                    Kaizo
                </h5>
                </Link>
                <li style={{ style: "--clr:#2483ff;", backgroundColor: "red", }}>
                <Link to="/">
                    <a href="#">
                        <i class="fa-solid fa-house"></i>
                        <span>Home</span>
                    </a>
                    </Link>
                </li>

                <li style={{ style: "--clr:#fff200;", backgroundColor: "green", }}>
                    <Link to="/User"><a href="#">
                        <i class="fa-solid fa-gamepad"></i>
                        <span>Profile</span>
                    </a></Link>
                </li>

                <li style={{ style: "--clr:#ff253f;", backgroundColor: "yellow", }}>
                    <a href="#">
                        <i class="fa-solid fa-heart"></i>
                        <span>Likes</span>
                    </a>
                </li>

                <li style={{ style: "--clr:#25d366;", backgroundColor: "pink", }}>
                    <a href="#">
                        <i class="fa-solid fa-user-group"></i>
                        <span>Settings</span>
                    </a>
                </li>

                <li style={{ style: "--clr:#f32ec8;", backgroundColor: "blue", }}>
                    <a href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <span>Search</span>
                    </a>
                </li>


                <div style={{display: "flex", flexWrap: "wrap"}}>
                    <Link
                        to="/SignUp">
                        <button className="btn2"><span></span>
                            <span></span>
                            <span></span>
                            <span></span>

                            Sign Up</button>
                    </Link>

                    <Link to={NameCt.name ? "/" : "/Login"}>
                        <button className="btn2" style={{marginLeft:"10%", width:"100%"}} onClick={NameCt.name ? handleSignOut : null}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            {NameCt.name ? <p>Log Out</p> : <p>Log In</p>}
                        </button>
                    </Link>
                </div>
            </ul>

        </div>
    )
}
export default Header;