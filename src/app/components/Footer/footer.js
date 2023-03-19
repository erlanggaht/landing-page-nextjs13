import Image from "next/image";
import style from '../../page.module.css'
import facebookIcon from "../../assests/icons8-facebook.svg";
import twitter from "../../assests/icons8-twitter-circled.svg";
import linkedin from "../../assests/icons8-linkedin-circled.svg";


export default function Footer() {
  return (
    <div id="Footer" className={style.Footer}>
      <div id="CopyRightFooter">
        <span className={style.title}>Erlanggaht.</span>
        <p className={style.p} style={{margin:"10px 0",lineHeight: '1.6'}}>Copyright © 2023 All rights reserved</p>
        <div id="LogoFooter" className={style.LogoFooter}>
          <Image
            src={facebookIcon}
            height="90"
            width="90"
            style={{ width: "23px",height:'auto'}} alt="iconFacebook"
          />
          <Image
            src={twitter}
            height="90"
            width="90"
            style={{ width: "23px",height:'auto'}} alt="iconTwitter"
          />
          <Image
            src={linkedin}
            height="90"
            width="90"
            style={{ width: "23px",height:'auto'}} alt="iconLinkedin"
          />
        </div>
      </div>

      <div id="MenuFooter" className={style.MenuFooter}>
        <span>Home</span>
        <span>Products</span>
        <span>About</span>
        <span>Contact</span>
      </div>

      <div id="ContactUsFooter" className={style.ContactUsFooter}> 
      <span className={style.TitleContactUsFooter} >Contact Us</span>
      <p className={style.p} style={{margin:"13px 0 26px 0",lineHeight: '1.6'}}>if you have a question want to get started or just want to chat contact us</p>
      <a href="#" style={{color:"#2752c4"}}>erlanggaht.md@gmail.com</a>
      </div>
    </div>
  );
}
