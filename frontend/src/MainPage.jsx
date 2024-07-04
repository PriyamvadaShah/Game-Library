import React from "react";
import Home from './Home/Home';
import Landing from './Landing/Landing';
import Games from './components/Games/Games';
import Friends from './components/Friends/Friends';
import Footer from "./components/Footer/Footer";

function MainPage(){
    return(<>
        <Home />
          <Landing />
          <Home />
          <Home />
          <Home />
          <Home />
          <Games />
          <Friends />
          <Footer/>
          </>

    )
}

export default MainPage;