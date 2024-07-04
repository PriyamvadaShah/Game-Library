import './Games.css';
import React, { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Card from "../Cards/Cards.jsx";

function Games() {
   useEffect(() => {
      AOS.init();
   }, []);

   const observer = useRef(
      new IntersectionObserver((entries) => {
         entries.forEach((entry) => {
            if (entry.isIntersecting) {
               entry.target.classList.add("show");
            } else {
               entry.target.classList.remove("show");
            }
         });
      })
   );

   useEffect(() => {
      const hiddenElements = document.querySelectorAll(".hide");
      hiddenElements.forEach((el) => observer.current.observe(el));

      return () => {
         hiddenElements.forEach((el) => observer.current.unobserve(el));
      };
   }, []);

   return (
      <div id="body">
         <div id="head">
            <div className="hide">
               <h1 id="heading2">
                  <div>Discover.</div>
                  <div>Play. </div>
                  <div>Connect. </div>
               </h1>
            </div>
            <div className="hide">
               <dotlottie-player src="https://lottie.host/28ea1155-ed1e-4a3a-ae25-c0da08238caa/6gueDer3aV.json" background="transparent" speed="1" style={{ width: "400px", height: "400px", marginLeft: "-2rem" }} loop autoplay></dotlottie-player>
            </div>
         </div>
         <div>
            <h1 className="oneLine show">
               Offline. Online. Free. Paid. Combat. Sports.<br></br> All games.. just one CLICK away.
            </h1>
         </div>
         <div id="cards">
            <section className="main">
               <Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGOqMeelMj_IoHJlw1fmL1ySo6raB5M-NiQ&shttps://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfGOqMeelMj_IoHJlw1fmL1ySo6raB5M-NiQ&s" heading="The Classics" text="Join in for a dive into timeless classics!" label="Timeless"/>
               <Card imgSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYXmNTqLC7tdQemsO0nW8hGgkCB1O2t8tBFg&s" heading="Trending" text="Dive into Gaming's Hottest Hits this month!" label="Hot Hits"/>
               <Card imgSrc="https://www.metacritic.com/a/img/resize/61c43cf0953ae1634e8ca15578c42899f716aff7/hub/2024/05/28/a8b5a5a3-ce43-4da3-976f-c9e47abf53a4/gamescorecard-2024-06-eldenring.jpg?auto=webp&width=1092" heading="Newcomers" text="Fresh Game Arrivals: Your Next Adventure Awaits!" label="Latest"/>
            </section>
         </div>
      </div>
   );
}

export default Games;
