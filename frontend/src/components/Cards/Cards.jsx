import './Cards.css';
import React, { useEffect, useState, useContext} from 'react';
import { NameContext } from '../../context/Name';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {button, Button} from "@nextui-org/react";
import Chip from "../chip";

function Card({ imgSrc, heading, text, label, gameUrl, onClick }) {
    const [err, setErr]=useState("");
    const NameCt = useContext(NameContext);
        
    

    class ParallaxTiltEffect {
        constructor({ element, tiltEffect }) {
            this.element = element;
            this.container = this.element.querySelector('.container');
            this.size = [300, 360];
            [this.w, this.h] = this.size;

            this.tiltEffect = tiltEffect;

            this.mouseOnComponent = false;

            this.handleMouseMove = this.handleMouseMove.bind(this);
            this.handleMouseEnter = this.handleMouseEnter.bind(this);
            this.handleMouseLeave = this.handleMouseLeave.bind(this);
            this.defaultStates = this.defaultStates.bind(this);
            this.setProperty = this.setProperty.bind(this);
            this.init = this.init.bind(this);

            this.init();
        }

        handleMouseMove(event) {
            const { offsetX, offsetY } = event;

            let X;
            let Y;

            if (this.tiltEffect === 'reverse') {
                X = ((offsetX - this.w / 2) / 3) / 3;
                Y = (-(offsetY - this.h / 2) / 3) / 3;
            } else if (this.tiltEffect === 'normal') {
                X = (-(offsetX - this.w / 2) / 3) / 3;
                Y = ((offsetY - this.h / 2) / 3) / 3;
            }

            this.setProperty('--rY', X.toFixed(2));
            this.setProperty('--rX', Y.toFixed(2));

            this.setProperty('--bY', `${80 - X / 4}%`);
            this.setProperty('--bX', `${50 - Y / 4}%`);
        }

        handleMouseEnter() {
            this.mouseOnComponent = true;
            this.container.classList.add('container--active');
        }

        handleMouseLeave() {
            this.mouseOnComponent = false;
            this.defaultStates();
        }

        defaultStates() {
            this.container.classList.remove('container--active');
            this.setProperty('--rY', 0);
            this.setProperty('--rX', 0);
            this.setProperty('--bY', '80%');
            this.setProperty('--bX', '50%');
        }

        setProperty(p, v) {
            return this.container.style.setProperty(p, v);
        }

        init() {
            this.element.addEventListener('mousemove', this.handleMouseMove);
            this.element.addEventListener('mouseenter', this.handleMouseEnter);
            this.element.addEventListener('mouseleave', this.handleMouseLeave);
        }

        destroy() {
            this.element.removeEventListener('mousemove', this.handleMouseMove);
            this.element.removeEventListener('mouseenter', this.handleMouseEnter);
            this.element.removeEventListener('mouseleave', this.handleMouseLeave);
        }
    }

    useEffect(() => {
        const cards = document.querySelectorAll('.wrap');
        const effects = Array.from(cards).map((card, index) => {
            return new ParallaxTiltEffect({
                element: card,
                tiltEffect: 'reverse',
            });
        });
        const hiddenElements=document.querySelectorAll(".hide");
        hiddenElements.forEach((el)=> observer.observe(el));

        return () => {
            effects.forEach(effect => effect.destroy());
            observer.disconnect(); 
        };
    }, []);
    const observer= new IntersectionObserver((entries)=>
        {
           entries.forEach((entry)=>{
              if(entry.isIntersecting){
                 entry.target.classList.add("show");
              }else{
                 entry.target.classList.remove("show");
              }
           });
        });

        


    return (
        <div className="wrap">
            <div className="container hide">
                <div id="image">
                    <img src={imgSrc} alt="Card image" />
                </div>
                <div className="text">
                    <p><Chip label={label}/></p>
                    <p >
                        <h4>{heading}</h4>
                        <h6 style={{fontSize: "1.1rem", fontWeight: "200"}}>{text}</h6>
                    </p>
                    
                    <button id="btn" onClick={onClick}>Explore!</button>  
                </div>
                              
            </div>
        </div>
    );
}

export default Card;
