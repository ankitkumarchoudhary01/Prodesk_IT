import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div><p>
        Copyright © 2026 Prodesk IT
     </p></div>
     <div>
    <p>All Rights Reserved</p>     

     </div>

      <div className="socials">
        <span><a href="#"><img src="\insta.png" alt="instagramlogo" /></a></span>
        <span><a href="#"><img src="\twitter.png" alt="twitterlogo" /></a></span>
      </div>
    </footer>
  );
}