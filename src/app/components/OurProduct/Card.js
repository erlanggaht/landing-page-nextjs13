import Image from "next/image";
import style from "../../page.module.css";
import hackerimg from "../../assests/hacker-undraw.svg";
export default function Card({ title, description, link }) {
  function linkHandle() {
    window.open(link);
  }

  return (
    <div id="card" className={style.card}>
      <p
        className={style.p}
        style={{
          padding: "1.3rem 2rem",
          margin: "0px 0 10px 0",
          color: "#A0A3AC",
          wordSpacing: "1px",
          textOverflow: "ellipsis",
          wordWrap: "break-word",
          overflow: "hidden",
          maxHeight: "3.2rem",
        }}
      >
        {" "}
        {description}{" "}
      </p>
      <Image
        src={hackerimg}
        height={"200"}
        width={"200"}
        alt="hackerimgdraw"
        style={{ width: "100%", height: "auto", margin: "0rem 0 1.5rem 0" }}
      />
      <div className={style.contentCard}>
        <h2 className={style.h2} style={{ height: "60px",cursor:"pointer" }} onClick={() => linkHandle()}>
          <span style={{ color: "#2752c4" }}>E</span>- {title}
        </h2>
        <p
          className={style.p}
          style={{
            color: "#A0A3AC",
            margin: "1rem  0 2rem 0",
            wordSpacing: "2px",
            lineHeight: "1.2rem",
          }}
        >
          Better handle patient endquires, Review files, receive payment and
          consult remotly. Share scans securely
        </p>
        <span
          style={{ fontSize: "1.3rem", color: "#2752c4", cursor: "pointer" }}
          onClick={() => linkHandle()}
        >
          &#10148;
        </span>
      </div>
    </div>
  );
}
