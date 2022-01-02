import React from "react";
import "./footer.sass";

const Footer = () => {
 return (
  <div className="footer">
   <div className="container footer">
    <div className="contenedor-footer">
     <div className="social-media">
      <div className="facebook">
       <a href="https://www.facebook.com/mani.garcia.54/">
        <img
         className="social_media-icon"
         src={require("../images/facebook.png")}
        />
       </a>
      </div>
      <div className="instagram">
       <a href="https://www.instagram.com" />
       <img
        className="social_media-icon"
        src={require("../images/instagram.png")}
       />
      </div>
      <div className="email">
       <img
        className="social_media-icon"
        src={require("../images/gmail.png")}
       />
      </div>
     </div>
     <div className="copyright">
      <p>© emanuel garcia jimenez</p>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Footer;
