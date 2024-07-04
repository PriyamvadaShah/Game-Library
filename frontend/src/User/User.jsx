import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { NameContext } from "../context/Name";
import "./User.css";
import Card from "../components/Cards/Cards";
import { Link } from "react-router-dom";

function User() {
  const navigate = useNavigate();
  const [data, setData] = useState("");
  const [auth, setAuth] = useState(false);
  const [err, setErr] = useState("");
  const NameCt = useContext(NameContext);
  console.log(NameCt.name);
  const [a, setA] = useState([]);
  var bab = "";
  var ab = "";
  if (NameCt.name) {
    localStorage.setItem('userName', NameCt.name);
  }

  //post	request

  async function postRequest(heading, gameUrl) {
    try {
      const response = await fetch('/api/url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          gameName: heading,
          userName: NameCt.name,
          gameUrl: gameUrl
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server response error data:", errorData);
        setErr(errorData.error || "Unknown error occurred");
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
      }

      const data = await response.json();
      console.log("data sent", data);
    } catch (error) {
      console.error('Error sending data:', error);
    }
  }

  //getURls

  async function getUrls() {
    try {
      const params = new URLSearchParams({
        userName: NameCt.name,
      });
      const response = await fetch(`/api/url?${params.toString()}`, {
        method: 'GET',
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server response error data:", errorData);
        setErr(errorData.error || "Unknown error occurred");
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
      }

      ab = await response.json();
      setData(ab);
      console.log("ab:", ab.user.visitHistory);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }

  //getcookie

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  }

  //checkauth

  async function checkAuth() {
    const cookie = getCookie('uid');
    if (!cookie) {
      setAuth(false);
      navigate("/Login");
      return;
    }
    try {
      const response = await fetch(`/api/checkAuth`, {
        method: 'GET',
        credentials: 'include' // Ensures cookies are sent with the request
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server response error data:", errorData);
        setErr(errorData.error || "Unknown error occurred");
        throw new Error(`HTTP error! status: ${response.status}, message: ${errorData.message}`);
      }

      bab = await response.json();
      await setAuth(bab.message);
      console.log("Message fetched:", bab.message);
    } catch (error) {
      console.error('Error creating user:', error.message);
    }
  }

  //getlastvisited


  const getLastVisited = (visitHistory) => {
    if (!visitHistory || visitHistory.length === 0) return [];
    return visitHistory.slice(Math.max(visitHistory.length - 3, 0)).reverse();
  };

  //handleclick

  const handleClick = (heading, gameUrl) => async (event) => {
    event.preventDefault(); // Prevent default anchor behavior if used inside button
    await postRequest(heading, gameUrl);
    await getUrls();
    await setA(getLastVisited(ab.user.visitHistory));
    // window.location.href = gameUrl;
  };

  //useeffect

  useEffect(() => {
    async function load() {
      await checkAuth();
      console.log("auth", bab.message);
      if (!bab.message) {
        navigate("/Login");
        return;
      }
      await getUrls();
      await setA(getLastVisited(ab.user.visitHistory));
    }

    load();
  }, []);

  useEffect(() => {
    const userName = localStorage.getItem('userName');
    if (userName) {
      NameCt.setName(userName);
    }
  }, [NameCt]);

  // useEffect(() => {
  // 	if (ab.user.visitHistory) {
  // 	  const lastVisited = getLastVisited(ab.user.visitHistory);
  // 	  setA(lastVisited);
  // 	}
  //   }, [ab]);


  return (
    <div className="userSection">
      <h2 id="headingTop">Welcome Back, {NameCt.name}!</h2>

      <h1 id="heading">Game History</h1>
      {NameCt.name ? (
        <table className="center-table">
          <thead>
            <tr style={{ color: "#d3d3d3" }}>
              <th>Game</th>
              <th>Let's Play</th>
              <th>Time Visited</th>
            </tr>
          </thead>
          <tbody>
            {
              a ? (
                a.map((item, index) => (
                  <tr key={index}>
                    <td>{item.gameName}</td>
                    <td><a href={item.gameUrl}>Play Now</a></td>
                    <td>{item.timestamps}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td>"NA"</td>
                  <td>"NA"</td>
                  <td>"NA"</td>
                </tr>
              )

            }
          </tbody>
        </table>
      ) : (
        <p>Loading...</p>
      )}
      <div style={{ display: "flex", justifyContent:"center" }}>


        <Link
          to="/Chat">
          <button className="btn2" ><span></span>
            <span></span>
            <span></span>
            <span></span>
            Create a Chat Group</button>
        </Link>


      </div>
      <h1 id="heading">Adventure Combat</h1>
      <div className="userg">

        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3foxZb5NfEMaV4YbmffOii99driqL1XV0Kw&s"
          heading="PUBG"
          text="Action packed thriller combat"
          label="adventure combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('PUBG', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfoLd_4DlZIMNE5Hw7FK6xecCCyf5JhDZiw&s"
          heading="GTA"
          text="Get ready to be very thrilled!"
          label="adventure"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('GTA', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}

        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
      </div>

      <h1 id="heading">Light-Hearted Fun</h1>
      <div className="userg">

        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3foxZb5NfEMaV4YbmffOii99driqL1XV0Kw&s"
          heading="PUBG"
          text="Action packed thriller combat"
          label="adventure combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('PUBG', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfoLd_4DlZIMNE5Hw7FK6xecCCyf5JhDZiw&s"
          heading="GTA"
          text="Get ready to be very thrilled!"
          label="adventure"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('GTA', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}

        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
      </div>


      <h1 id="heading">Strategy</h1>
      <div className="userg">

        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3foxZb5NfEMaV4YbmffOii99driqL1XV0Kw&s"
          heading="PUBG"
          text="Action packed thriller combat"
          label="adventure combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('PUBG', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxfoLd_4DlZIMNE5Hw7FK6xecCCyf5JhDZiw&s"
          heading="GTA"
          text="Get ready to be very thrilled!"
          label="adventure"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('GTA', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />
        <Card
          imgSrc="https://eu-images.contentstack.com/v3/assets/blt740a130ae3c5d529/blt4c51e2a5d67a5992/650f06590224e2194c4faa89/mortalkombat_1.jpg?width=850&auto=webp&quality=95&format=jpg&disable=upscale"
          heading="Mortal Kombat"
          text="Fasten seatbelts for action"
          label="Action Combat"
          gameUrl="https://www.youtube.com/watch?v=QzntvHz23tw"
          onClick={handleClick('Mortal Kombat', 'https://www.google.com')}
        />




      </div>
      <div className="userFooter">
        <footer className="bg-rgb(10, 10, 53) rounded-lg shadow dark:bg-gray-900 m-4">
          <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
            <div className="sm:flex sm:items-center sm:justify-between">
              <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                <span className="self-center text-2xl whitespace-nowrap dark:text-white">Kaizo</span>
              </a>
              <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline me-4 md:me-6">Licensing</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024<a href="https://flowbite.com/" className="hover:underline">Kaizo™</a>. All Rights Reserved.</span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default User;
