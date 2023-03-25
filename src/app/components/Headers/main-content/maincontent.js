'use client'
import Image from "next/image";
import style from "../../../page.module.css";
import programmerUndraw from "../../../assests/programmer-undraw.svg";
import { useContext } from "react";
import { MainContext } from "@/app/page";
export default function MainContent() {

  const ref= useContext(MainContext)
  function scrollDown(){
    ref.current.scrollIntoView({
      behavior: "smooth", inline: "center" 
    })
  }
  return (
    <div id="main-content" className={style.mainContent}>
      <div id="content" className={style.content}>
        <h1
          style={{
            width: "70%",
            color: "#182957",
            fontSize: "2.5rem",
          }}
        >
          Simplifying access to specialized healthcare
        </h1>
        <p
          id="paragrafMainContent"
          style={{
            margin: "1rem 0",
            width: "60%",
            fontSize: ".9rem",
            color: "#A0A3AC",
          }}
        >
          We build an{" "}
          <span style={{ color: "#2752C4", fontSize: ".9rem", width: "100vw" }}>
            E - toolbox
          </span>{" "}
          to link patients and doctors in a new and modern way to improve their
          effinciency
        </p>
        <button className={style.btnLearnMore}>
          {" "}
          Learn more{" "}
          <span
            style={{
              paddingLeft: ".7rem",
              fontSize: ".8rem",
              fontWeight: "normal",
            }}
          >
            &#10148;
          </span>{" "}
        </button>
      </div>
      <span id="image-content">
        <Image
          src={programmerUndraw}
          height="200"
          width="200"
          style={{ width: "calc(480px - 2%)", height: "auto",filter:"drop-shadow(#ddd 0px 4px 4px)" }}
          alt={"image-undraw-programer"}
          className={style.imgcontent}
        />
      </span>

      <p style={{ padding: "1rem 0",cursor:"pointer" }} onClick={() => scrollDown()}>
        <span style={{ color: "#2752C4", fontSize: ".9rem", width: "100vw" }}>
          {" "}
          <span style={{ transform: "rotate(90deg)", display: "inline-block" }}>
            &#10148;
          </span>{" "}
          Scroll down
        </span>{" "}
        to read more{" "}
      </p>
    </div>
  );
}
