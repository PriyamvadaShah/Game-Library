import { useContext } from 'react';
import { NameContext } from './context/Name';
import './App.css'
import Header from './Header/Header';
import { Outlet } from 'react-router-dom';

function App() {
  const nameState= useContext(NameContext);
  return (
    <>
      <Header />
          <Outlet/>
        </>
  )
}
export default App;

// useEffect(() => {
//   async function getIt() {
//     try {
//       const response = await fetch(URL);
//       if (response.ok) {
//         const result = await response.text();
//         console.log(result);
//         setData(result); // Store the fetched data in state
//       } else {
//         console.error("Bad response");
//       }
//     } catch (error) {
//       console.error("Fetch error:", error);
//     }
//   }
//   getIt();
// }, []);
// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };
//   const [data,setData]=useState(0);
//   const myHeaders = new Headers();
// myHeaders.append("x-rapidapi-key", "caf6025359mshc0624f27c016534p1407a2jsnfb8489fe808e");
// myHeaders.append("x-rapidapi-host", "indian-railway-live-train.p.rapidapi.com");
// myHeaders.append("Cookie", "connect.sid=s%3AtGAX0oZW1RuXhEVwoN_7dg2I1H8tuq4Z.PUmAXN871UDeD1E4t1VNq2kz5wRliyUutdwIGCOVj2M");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow",
//   mode: "no-cors"
// };

// useEffect(() => {
//   fetch("http://localhost:8080/api/v1/public/randomusers?page=1&limit=10", requestOptions)
//   .then((response) => response.text())
//   .then((result) => {
//       console.log(result.statusCode);
//       setData(result);
// })
//   .catch((error) => console.error(error));
// }, []);
// const myHeaders = new Headers();
// myHeaders.append("Cookie", "connect.sid=s%3AtGAX0oZW1RuXhEVwoN_7dg2I1H8tuq4Z.PUmAXN871UDeD1E4t1VNq2kz5wRliyUutdwIGCOVj2M");

// const requestOptions = {
//   method: "GET",
//   headers:  "access-control-allow-credentials: true",
// };

// fetch("http://localhost:8080/api/v1/public/randomjokes?limit=10&query=science&inc=categories%2Cid%2Ccontent&page=1", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .catch((error) => console.error(error));
// const [data, setData] = useState('Load');
//   useEffect(() => {
//     fetch("https://newsapi.org/v2/everything?q=apple&from=2024-06-02&to=2024-06-02&sortBy=popularity&apiKey=9afbd1ff75b644ba9fa9a7fc15f6ba9e")
//       .then((response) => response.json())
//       .then((result) => {
//         console.log(result.articles[0].description);
//         setData(result.articles[0].description);
//       })
//       .catch((error) => console.error("Fetch error:", error));
//   }, []); 