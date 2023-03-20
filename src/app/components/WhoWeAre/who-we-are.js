'use client'
import { MainContext } from "@/app/page";
import { useContext, useRef } from "react";
import style from "../../page.module.css";
export default function WhoWeAre() { 
  const ref = useContext(MainContext)
  return (
    <div id="who-we-are" className={style.WhoWeAre} ref={ref}>
      <div className={style.leftWho}>
        <span className={style.h1} id='titleWho'>Who we are?</span>
      </div>
      <div className={style.rightWho}>
        <p id='descriptionWho' className={style.descriptionWho}>
          We are healthcare technology company and we've created a suite of
          highly effective, unifying, plug and play tools tat make the enquity
          process to specialixed healtcare simpler, more convenient and more
          meaningfull for doctors, patients and healthcare intermediaries
        </p>
        <button className={style.learnMoreWho}>Learn more</button>
      </div>
    </div>
  );
}
