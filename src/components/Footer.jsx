export default function Footer() {
  return (
<<<<<<< HEAD
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
=======
    <footer className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-4 bg-[var(--primary)] text-white border-t border-white">

      <div className="w-60">
        <p className="my-2 text-center">
          Copyright © 2026 Prodesk IT
        </p>
>>>>>>> phase-2-tailwind
      </div>

      <div className="w-60">
        <p className="my-2 text-center">
          All Rights Reserved
        </p>
      </div>

      <div className="w-60 flex lg:justify-end justify-center">
        <a href="https://www.linkedin.com/company/prodesk-it/" target="_blank" rel="noopener noreferrer">
          <img
            src="/linkedin.webp"
            alt="LinkedIn"
            className="h-8 w-8 transition-transform duration-300 hover:scale-110"
          />
        </a>

      </div>

    </footer>
  );
}