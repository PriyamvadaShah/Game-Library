import './Landing.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Swiper from 'swiper';
import 'swiper/css';

AOS.init();
function Landing() {
    AOS.init({
        duration: 1200,
    });
    

    return (
        <div id="lander">
            <div>

                <h1 id="main"><div>Kaizo</div>
                <div id="animation">                   
                    <dotlottie-player src="https://lottie.host/f752a17f-2d4e-4551-abba-6caac78b1070/gsbxDJJnUz.json" background="transparent" speed="1" style={{ width: "185px", height: "185px", marginLeft:"-01.5rem", marginRight:"-2.5rem", padding:"-2rem" }} loop autoplay></dotlottie-player>
                </div>
                </h1>
                <h5 id="quotation"> Your Favourite Game Haven!</h5>

                <h5 id="content"> At Kaizo, we believe in the power of play and the magic of games to bring people together.</h5>
            </div>


            {/*
            <div className="item titillium-web-light" data-aos="fade-down">2</div>
            <div className="item titillium-web-light" data-aos="fade-right">3</div>
            <div className="item titillium-web-light" data-aos="fade-left">4</div>
            <div className="item titillium-web-light" data-aos="zoom-in">5</div>
            <div className="item titillium-web-light" data-aos="zoom-out">6</div>
            <div className="item titillium-web-light" data-aos="slide-up">7</div> */}
        </div>
    )
}

export default Landing;