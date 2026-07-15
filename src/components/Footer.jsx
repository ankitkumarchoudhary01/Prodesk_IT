import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div>
        Copyright © 2026 Prodesk IT.
      </div>
      <div>
        All Rights Reserved.
      </div>

      <div className="socials">
        <span><a href="#"><img src="\insta.png" alt="instagramlogo" /></a></span>
        <span><a href="#"><img src="\twitter.png" alt="twitterlogo" /></a></span>
      </div>
    </footer>
  );
}